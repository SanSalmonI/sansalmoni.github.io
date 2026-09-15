/* ==========================================================================
   TASKBAR & SYSTEM TRAY CONTROLLER
   ========================================================================== */

class TaskbarController {
    constructor() {
        this.startBtn = document.getElementById('start-btn');
        this.startMenu = document.getElementById('start-menu');
        this.taskbarAppsContainer = document.getElementById('taskbar-apps');
        this.startSearchInput = document.getElementById('start-search-input');
        this.startAppsGrid = document.getElementById('start-apps-grid');

        this.trayTime = document.getElementById('tray-time');
        this.trayDate = document.getElementById('tray-date');

        this.btnSound = document.getElementById('btn-toggle-sound');
        this.btnCrt = document.getElementById('btn-toggle-crt');
        this.btnWallpaper = document.getElementById('btn-toggle-wallpaper');
        this.btnFullscreen = document.getElementById('btn-toggle-fullscreen');
        this.btnLockOs = document.getElementById('btn-lock-os');
    }

    init() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
        this.renderStartMenuApps();
        this.bindEvents();
    }

    updateClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const dateStr = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });

        if (this.trayTime) this.trayTime.textContent = timeStr;
        if (this.trayDate) this.trayDate.textContent = dateStr;
    }

    renderStartMenuApps() {
        if (!this.startAppsGrid || !window.appRegistry) return;
        this.startAppsGrid.innerHTML = '';

        Object.keys(window.appRegistry).forEach(appId => {
            const app = window.appRegistry[appId];
            const item = document.createElement('div');
            item.className = 'start-app-item';
            item.dataset.app = appId;
            item.innerHTML = `
                <i class="${app.icon}"></i>
                <span>${app.title}</span>
            `;
            item.addEventListener('click', () => {
                window.windowManager.openApp(appId);
                this.toggleStartMenu(false);
            });
            this.startAppsGrid.appendChild(item);
        });
    }

    renderTaskbarApps() {
        if (!this.taskbarAppsContainer || !window.windowManager) return;
        this.taskbarAppsContainer.innerHTML = '';

        window.windowManager.openWindows.forEach((winData, appId) => {
            const appConfig = window.appRegistry[appId];
            if (!appConfig) return;

            const item = document.createElement('div');
            item.className = `taskbar-item ${winData.element.classList.contains('active') && !winData.minimized ? 'active' : ''}`;
            item.innerHTML = `
                <i class="${appConfig.icon}"></i>
                <span>${appConfig.title}</span>
            `;

            item.addEventListener('click', () => {
                if (winData.minimized) {
                    window.windowManager.restoreWindow(appId);
                } else if (winData.element.classList.contains('active')) {
                    window.windowManager.minimizeWindow(appId);
                } else {
                    window.windowManager.focusWindow(appId);
                }
            });

            this.taskbarAppsContainer.appendChild(item);
        });
    }

    toggleStartMenu(show) {
        const isHidden = this.startMenu.classList.contains('hidden');
        const targetState = show !== undefined ? show : isHidden;

        if (targetState) {
            this.startMenu.classList.remove('hidden');
            this.startBtn.classList.add('active');
            if (this.startSearchInput) this.startSearchInput.focus();
        } else {
            this.startMenu.classList.add('hidden');
            this.startBtn.classList.remove('active');
        }
    }

    bindEvents() {
        // Toggle Start Menu
        if (this.startBtn) {
            this.startBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (window.soundSystem) window.soundSystem.playClick();
                this.toggleStartMenu();
            });
        }

        // Close Start Menu on click outside
        document.addEventListener('click', (e) => {
            if (this.startMenu && !this.startMenu.contains(e.target) && !this.startBtn.contains(e.target)) {
                this.toggleStartMenu(false);
            }
        });

        // Search filtering in Start Menu
        if (this.startSearchInput) {
            this.startSearchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const items = this.startAppsGrid.querySelectorAll('.start-app-item');
                items.forEach(item => {
                    const name = item.innerText.toLowerCase();
                    item.style.display = name.includes(query) ? 'flex' : 'none';
                });
            });
        }

        // Sound Toggle
        if (this.btnSound) {
            this.btnSound.addEventListener('click', () => {
                if (window.soundSystem) {
                    window.soundSystem.enabled = !window.soundSystem.enabled;
                    const icon = document.getElementById('sound-icon');
                    if (icon) {
                        icon.className = window.soundSystem.enabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
                    }
                    this.showToast(window.soundSystem.enabled ? 'UI Sound Effects Enabled' : 'UI Sound Effects Muted');
                }
            });
        }

        // CRT Scanline Toggle
        if (this.btnCrt) {
            this.btnCrt.addEventListener('click', () => {
                const crt = document.getElementById('crt-overlay');
                if (crt) {
                    crt.classList.toggle('disabled');
                    const isOff = crt.classList.contains('disabled');
                    this.showToast(isOff ? 'CRT Scanlines Disabled' : 'CRT Scanlines Enabled');
                }
            });
        }

        // Video Wallpaper Play/Pause Toggle
        if (this.btnWallpaper) {
            this.btnWallpaper.addEventListener('click', () => {
                const video = document.getElementById('desktop-wallpaper');
                const icon = document.getElementById('wallpaper-icon');
                if (video) {
                    if (video.paused) {
                        video.play();
                        if (icon) icon.className = 'fa-solid fa-pause';
                        this.showToast('Video Wallpaper Playing');
                    } else {
                        video.pause();
                        if (icon) icon.className = 'fa-solid fa-play';
                        this.showToast('Video Wallpaper Paused');
                    }
                }
            });
        }

        // Fullscreen Toggle
        if (this.btnFullscreen) {
            this.btnFullscreen.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    if (document.exitFullscreen) document.exitFullscreen();
                }
            });
        }

        // Lock OS Button
        if (this.btnLockOs) {
            this.btnLockOs.addEventListener('click', () => {
                if (window.bootController) {
                    window.bootController.isUnlocked = false;
                    const lockScreen = document.getElementById('lock-screen');
                    const desktop = document.getElementById('desktop-environment');
                    if (lockScreen && desktop) {
                        lockScreen.classList.remove('hidden', 'unlocked');
                        desktop.classList.add('hidden');
                    }
                    this.toggleStartMenu(false);
                }
            });
        }
    }

    showToast(msg) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>${msg}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}

window.taskbar = new TaskbarController();
