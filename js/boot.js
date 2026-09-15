/* ==========================================================================
   BOOT SEQUENCE & LOCK SCREEN CONTROLLER
   ========================================================================== */

class BootController {
    constructor() {
        this.bootScreen = document.getElementById('boot-screen');
        this.lockScreen = document.getElementById('lock-screen');
        this.desktop = document.getElementById('desktop-environment');
        this.progressBar = document.getElementById('boot-progress');
        this.bootPrompt = document.getElementById('boot-prompt');
        this.btnPowerOn = document.getElementById('btn-power-on');
        this.btnLogin = document.getElementById('btn-login');
        this.powerLed = document.getElementById('power-led');

        this.lockClock = document.getElementById('lock-clock');
        this.lockDate = document.getElementById('lock-date');

        this.isBooted = false;
        this.isUnlocked = false;
    }

    init() {
        this.startBootSequence();
        this.updateLockClock();
        setInterval(() => this.updateLockClock(), 1000);
        this.bindEvents();
    }

    startBootSequence() {
        if (this.powerLed) this.powerLed.classList.add('booting');
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 8;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                this.onBootComplete();
            }
            if (this.progressBar) {
                this.progressBar.style.width = `${progress}%`;
            }
        }, 150);
    }

    onBootComplete() {
        if (this.powerLed) this.powerLed.classList.remove('booting');
        if (this.bootPrompt) this.bootPrompt.classList.add('visible');
    }

    proceedToLockScreen() {
        if (this.isBooted) return;
        this.isBooted = true;

        if (window.soundSystem) {
            window.soundSystem.playBootChime();
        }

        // Camera Zoom-in transition
        this.bootScreen.classList.add('zoom-out');
        setTimeout(() => {
            this.bootScreen.classList.add('hidden');
            this.bootScreen.classList.remove('active');
            this.lockScreen.classList.remove('hidden');
        }, 800);
    }

    unlockDesktop() {
        if (this.isUnlocked) return;
        this.isUnlocked = true;

        if (window.soundSystem) {
            window.soundSystem.playClick();
        }

        this.lockScreen.classList.add('unlocked');
        setTimeout(() => {
            this.lockScreen.classList.add('hidden');
            this.desktop.classList.remove('hidden');

            // Open Projects App automatically as a welcoming splash
            if (window.windowManager) {
                window.windowManager.openApp('projects');
            }
        }, 600);
    }

    updateLockClock() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateStr = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

        if (this.lockClock) this.lockClock.textContent = timeStr;
        if (this.lockDate) this.lockDate.textContent = dateStr;
    }

    bindEvents() {
        if (this.btnPowerOn) {
            this.btnPowerOn.addEventListener('click', () => this.proceedToLockScreen());
        }

        // Press any key during boot prompt to enter
        document.addEventListener('keydown', (e) => {
            if (!this.isBooted) {
                this.proceedToLockScreen();
            } else if (!this.isUnlocked && e.key === 'Enter') {
                this.unlockDesktop();
            }
        });

        if (this.btnLogin) {
            this.btnLogin.addEventListener('click', () => this.unlockDesktop());
        }

        const userProfileCard = document.getElementById('user-profile-card');
        if (userProfileCard) {
            userProfileCard.addEventListener('click', () => this.unlockDesktop());
        }
    }
}

window.bootController = new BootController();
