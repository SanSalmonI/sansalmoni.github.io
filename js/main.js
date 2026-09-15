/* ==========================================================================
   MAIN APPLICATION ENTRY POINT & EVENT BINDINGS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Subsystem Controllers
    if (window.bootController) window.bootController.init();
    if (window.windowManager) window.windowManager.init();
    if (window.taskbar) window.taskbar.init();

    // 2. Bind Desktop Icons
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    desktopIcons.forEach(icon => {
        const appId = icon.dataset.app;

        // Double click to open on desktop
        icon.addEventListener('dblclick', () => {
            if (window.windowManager) {
                window.windowManager.openApp(appId);
            }
        });

        // Single click selection highlight
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopIcons.forEach(i => i.classList.remove('selected'));
            icon.classList.add('selected');

            if (window.soundSystem) window.soundSystem.playClick();
        });
    });

    // Clear icon selection when clicking desktop background
    const desktopEnv = document.getElementById('desktop-environment');
    if (desktopEnv) {
        desktopEnv.addEventListener('click', (e) => {
            if (e.target.id === 'desktop-environment' || e.target.id === 'desktop-wallpaper') {
                desktopIcons.forEach(i => i.classList.remove('selected'));
                hideContextMenu();
            }
        });
    }

    // 3. Custom Right Click Context Menu
    const contextMenu = document.getElementById('context-menu');
    
    if (desktopEnv && contextMenu) {
        desktopEnv.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const posX = Math.min(e.clientX, window.innerWidth - 210);
            const posY = Math.min(e.clientY, window.innerHeight - 180);

            contextMenu.style.left = `${posX}px`;
            contextMenu.style.top = `${posY}px`;
            contextMenu.classList.remove('hidden');
        });
    }

    function hideContextMenu() {
        if (contextMenu) contextMenu.classList.add('hidden');
    }

    // Bind Context Menu Items
    const ctxRefresh = document.getElementById('ctx-refresh');
    const ctxProjects = document.getElementById('ctx-projects');
    const ctxTerminal = document.getElementById('ctx-terminal');
    const ctxWallpaper = document.getElementById('ctx-wallpaper');
    const ctxSettings = document.getElementById('ctx-settings');

    if (ctxRefresh) {
        ctxRefresh.addEventListener('click', () => {
            hideContextMenu();
            if (window.taskbar) window.taskbar.showToast("Desktop System Refreshed");
        });
    }

    if (ctxProjects) {
        ctxProjects.addEventListener('click', () => {
            hideContextMenu();
            if (window.windowManager) window.windowManager.openApp('gallery');
        });
    }

    if (ctxTerminal) {
        ctxTerminal.addEventListener('click', () => {
            hideContextMenu();
            if (window.windowManager) window.windowManager.openApp('terminal');
        });
    }

    if (ctxWallpaper) {
        ctxWallpaper.addEventListener('click', () => {
            hideContextMenu();
            if (window.windowManager) window.windowManager.openApp('settings');
        });
    }

    if (ctxSettings) {
        ctxSettings.addEventListener('click', () => {
            hideContextMenu();
            if (window.windowManager) window.windowManager.openApp('settings');
        });
    }

    // Bind Direct Taskbar Terminal Button
    const taskbarTerminalBtn = document.getElementById('taskbar-terminal-btn');
    if (taskbarTerminalBtn) {
        taskbarTerminalBtn.addEventListener('click', () => {
            if (window.windowManager) window.windowManager.openApp('terminal');
        });
    }
});
