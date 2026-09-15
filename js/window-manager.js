/* ==========================================================================
   WINDOW MANAGER ENGINE
   Handles floating windows creation, dragging, z-index layering,
   minimize/maximize/close, and taskbar tab synchronization.
   ========================================================================== */

class WindowManager {
    constructor() {
        this.container = document.getElementById('windows-container');
        this.openWindows = new Map(); // appId -> Window instance data
        this.topZIndex = 100;
        this.dragState = null;
    }

    init() {
        this.bindGlobalDragEvents();
    }

    openApp(appId) {
        if (this.openWindows.has(appId)) {
            const winData = this.openWindows.get(appId);
            if (winData.minimized) {
                this.restoreWindow(appId);
            }
            this.focusWindow(appId);
            return;
        }

        const appConfig = window.appRegistry ? window.appRegistry[appId] : null;
        if (!appConfig) return;

        // Play sound
        if (window.soundSystem) window.soundSystem.playWindowOpen();

        // Calculate initial centered or cascading position
        const offset = (this.openWindows.size % 5) * 30;
        const width = Math.min(appConfig.width || 750, window.innerWidth - 40);
        const height = Math.min(appConfig.height || 520, window.innerHeight - 100);
        const left = Math.max(20, Math.floor((window.innerWidth - width) / 2) + offset);
        const top = Math.max(20, Math.floor((window.innerHeight - height - 48) / 2) + offset);

        // Build Window DOM Element
        const winEl = document.createElement('div');
        winEl.className = 'app-window active';
        winEl.id = `win-${appId}`;
        winEl.style.width = `${width}px`;
        winEl.style.height = `${height}px`;
        winEl.style.left = `${left}px`;
        winEl.style.top = `${top}px`;
        this.topZIndex += 1;
        winEl.style.zIndex = this.topZIndex;

        winEl.innerHTML = `
            <div class="window-header" data-appid="${appId}">
                <div class="window-title-box">
                    <i class="${appConfig.icon}"></i>
                    <span>${appConfig.title}</span>
                </div>
                <div class="window-controls">
                    <button class="win-btn win-btn-minimize" title="Minimize" data-action="minimize"><i class="fa-solid fa-minus"></i></button>
                    <button class="win-btn win-btn-maximize" title="Maximize" data-action="maximize"><i class="fa-solid fa-expand"></i></button>
                    <button class="win-btn win-btn-close" title="Close" data-action="close"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div class="window-body" id="win-body-${appId}">
                ${appConfig.render ? appConfig.render() : ''}
            </div>
        `;

        this.container.appendChild(winEl);

        const winData = {
            id: appId,
            element: winEl,
            minimized: false,
            maximized: false,
            prevDimensions: { left, top, width, height }
        };

        this.openWindows.set(appId, winData);

        // Bind inner events
        this.bindWindowEvents(winEl, appId);
        
        // Execute app post-mount logic
        if (appConfig.onMount) {
            appConfig.onMount(document.getElementById(`win-body-${appId}`));
        }

        // Notify Taskbar
        if (window.taskbar) {
            window.taskbar.renderTaskbarApps();
        }
    }

    focusWindow(appId) {
        if (!this.openWindows.has(appId)) return;
        
        this.openWindows.forEach((win, key) => {
            win.element.classList.remove('active');
        });

        const winData = this.openWindows.get(appId);
        winData.element.classList.add('active');
        this.topZIndex += 1;
        winData.element.style.zIndex = this.topZIndex;

        if (window.taskbar) {
            window.taskbar.renderTaskbarApps();
        }
    }

    minimizeWindow(appId) {
        if (!this.openWindows.has(appId)) return;
        const winData = this.openWindows.get(appId);
        winData.minimized = true;
        winData.element.classList.add('minimized');
        
        if (window.soundSystem) window.soundSystem.playWindowClose();
        if (window.taskbar) window.taskbar.renderTaskbarApps();
    }

    restoreWindow(appId) {
        if (!this.openWindows.has(appId)) return;
        const winData = this.openWindows.get(appId);
        winData.minimized = false;
        winData.element.classList.remove('minimized');
        this.focusWindow(appId);
    }

    toggleMaximizeWindow(appId) {
        if (!this.openWindows.has(appId)) return;
        const winData = this.openWindows.get(appId);
        
        if (winData.maximized) {
            winData.maximized = false;
            winData.element.classList.remove('maximized');
        } else {
            winData.maximized = true;
            winData.element.classList.add('maximized');
        }
    }

    closeWindow(appId) {
        if (!this.openWindows.has(appId)) return;
        const winData = this.openWindows.get(appId);

        if (window.soundSystem) window.soundSystem.playWindowClose();

        winData.element.remove();
        this.openWindows.delete(appId);

        if (window.taskbar) {
            window.taskbar.renderTaskbarApps();
        }
    }

    bindWindowEvents(winEl, appId) {
        // Focus on click
        winEl.addEventListener('mousedown', () => {
            this.focusWindow(appId);
        });

        // Header controls (Minimize, Maximize, Close)
        const header = winEl.querySelector('.window-header');
        header.addEventListener('click', (e) => {
            const btn = e.target.closest('.win-btn');
            if (!btn) return;
            const action = btn.dataset.action;
            if (action === 'close') this.closeWindow(appId);
            else if (action === 'minimize') this.minimizeWindow(appId);
            else if (action === 'maximize') this.toggleMaximizeWindow(appId);
        });

        // Double click header to maximize
        header.addEventListener('dblclick', (e) => {
            if (!e.target.closest('.win-btn')) {
                this.toggleMaximizeWindow(appId);
            }
        });

        // Header Dragging
        header.addEventListener('mousedown', (e) => {
            if (e.target.closest('.win-btn')) return;
            const winData = this.openWindows.get(appId);
            if (winData.maximized) return;

            this.dragState = {
                appId,
                winEl,
                startX: e.clientX,
                startY: e.clientY,
                origLeft: winEl.offsetLeft,
                origTop: winEl.offsetTop
            };
        });
    }

    bindGlobalDragEvents() {
        document.addEventListener('mousemove', (e) => {
            if (!this.dragState) return;
            e.preventDefault();
            const dx = e.clientX - this.dragState.startX;
            const dy = e.clientY - this.dragState.startY;

            let newLeft = this.dragState.origLeft + dx;
            let newTop = this.dragState.origTop + dy;

            // Constrain inside screen bounds
            newTop = Math.max(0, Math.min(newTop, window.innerHeight - 80));

            this.dragState.winEl.style.left = `${newLeft}px`;
            this.dragState.winEl.style.top = `${newTop}px`;
        });

        document.addEventListener('mouseup', () => {
            this.dragState = null;
        });
    }
}

window.windowManager = new WindowManager();
