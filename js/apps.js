/* ==========================================================================
   APPLICATION REGISTRY & INNER APP RENDERERS
   ========================================================================== */

window.appRegistry = {
    // 1. GITHUB TOOL & LAUNCHER APP
    github: {
        title: "GitHub Profile",
        icon: "fa-brands fa-github",
        iconImg: "./assets/GithubIcon.png",
        width: 680,
        height: 440,
        render: function() {
            return `
                <div class="app-detail-container" style="display:flex; flex-direction:column; gap:20px; align-items:center; text-align:center; padding:30px;">
                    <img src="./assets/GithubIcon.png" alt="GitHub" style="width:72px; height:72px; object-fit:contain; filter:drop-shadow(0 4px 12px rgba(0,0,0,0.5));">
                    <div>
                        <h2 style="font-family:var(--font-heading); font-size:1.5rem; color:var(--accent-cyan);">Santiago Salmon on GitHub</h2>
                        <p style="font-size:0.88rem; color:var(--text-secondary); max-width:460px; margin-top:6px;">
                            Access game dev repositories, 3D modeling scripts, Unity/Unreal projects, and graphic design resources.
                        </p>
                    </div>
                    <a href="https://github.com/SanSalmonI" target="_blank" class="btn-boot-start" style="padding:12px 24px; font-size:0.95rem; display:inline-flex; align-items:center; gap:10px; text-decoration:none; margin-top:10px;">
                        <i class="fa-brands fa-github"></i> Launch GitHub Profile
                    </a>
                </div>
            `;
        },
        onMount: function() {
            window.open("https://github.com/SanSalmonI", "_blank");
        }
    },

    // 2. AUTODESK MAYA TOOL APP
    maya: {
        title: "Autodesk Maya 3D Studio",
        icon: "fa-solid fa-cube",
        iconImg: "./assets/MayaIcon.png",
        width: 780,
        height: 520,
        render: function() {
            return `
                <div class="app-detail-container" style="display:flex; flex-direction:column; gap:20px;">
                    <div style="display:flex; align-items:center; gap:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:20px; border-radius:12px;">
                        <img src="./assets/MayaIcon.png" alt="Maya" style="width:56px; height:56px; object-fit:contain;">
                        <div>
                            <h2 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--accent-cyan);">Autodesk Maya</h2>
                            <p style="font-size:0.85rem; color:var(--text-secondary);">3D Character Design, Rigging, & Architectural Blueprints Modeling</p>
                        </div>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
                        <img src="./assets/project_dev_tool.jpg" alt="3D Render" style="width:100%; height:160px; object-fit:cover; border-radius:10px; border:1px solid rgba(255,255,255,0.1);">
                        <img src="./assets/project_ai_dash.jpg" alt="3D Model" style="width:100%; height:160px; object-fit:cover; border-radius:10px; border:1px solid rgba(255,255,255,0.1);">
                    </div>
                </div>
            `;
        }
    },

    // 3. BLENDER TOOL APP
    blender: {
        title: "Blender 3D Suite",
        icon: "fa-solid fa-cubes",
        iconImg: "./assets/BlenderIcon.png",
        width: 780,
        height: 520,
        render: function() {
            return `
                <div class="app-detail-container" style="display:flex; flex-direction:column; gap:20px;">
                    <div style="display:flex; align-items:center; gap:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:20px; border-radius:12px;">
                        <img src="./assets/BlenderIcon.png" alt="Blender" style="width:56px; height:56px; object-fit:contain;">
                        <div>
                            <h2 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--accent-cyan);">Blender 3D Suite</h2>
                            <p style="font-size:0.85rem; color:var(--text-secondary);">3D Modeling, Environment Lighting, & Cycles Rendering</p>
                        </div>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
                        <img src="./assets/project_dev_tool.jpg" alt="Blender Render" style="width:100%; height:160px; object-fit:cover; border-radius:10px; border:1px solid rgba(255,255,255,0.1);">
                    </div>
                </div>
            `;
        }
    },

    // 4. KRITA TOOL APP
    krita: {
        title: "Krita Digital Painting",
        icon: "fa-solid fa-paintbrush",
        iconImg: "./assets/KritaIcon.png",
        width: 780,
        height: 520,
        render: function() {
            return `
                <div class="app-detail-container" style="display:flex; flex-direction:column; gap:20px;">
                    <div style="display:flex; align-items:center; gap:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:20px; border-radius:12px;">
                        <img src="./assets/KritaIcon.png" alt="Krita" style="width:56px; height:56px; object-fit:contain;">
                        <div>
                            <h2 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--accent-cyan);">Krita Digital Painting</h2>
                            <p style="font-size:0.85rem; color:var(--text-secondary);">2D Concept Art, Illustration, & Texture Painting Studio</p>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // 5. ILLUSTRATOR TOOL APP
    illustrator: {
        title: "Adobe Illustrator Studio",
        icon: "fa-solid fa-bezier-curve",
        iconImg: "./assets/AdobeIllustratorIcon.png",
        width: 780,
        height: 520,
        render: function() {
            return `
                <div class="app-detail-container" style="display:flex; flex-direction:column; gap:20px;">
                    <div style="display:flex; align-items:center; gap:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:20px; border-radius:12px;">
                        <img src="./assets/AdobeIllustratorIcon.png" alt="Illustrator" style="width:56px; height:56px; object-fit:contain;">
                        <div>
                            <h2 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--accent-cyan);">Adobe Illustrator</h2>
                            <p style="font-size:0.85rem; color:var(--text-secondary);">Vector Graphics, Logo Design, & Brand Identity Creation</p>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // 6. PHOTOSHOP TOOL APP
    photoshop: {
        title: "Adobe Photoshop Workshop",
        icon: "fa-solid fa-image",
        iconImg: "./assets/PhotoshopIcon.png",
        width: 780,
        height: 520,
        render: function() {
            return `
                <div class="app-detail-container" style="display:flex; flex-direction:column; gap:20px;">
                    <div style="display:flex; align-items:center; gap:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:20px; border-radius:12px;">
                        <img src="./assets/PhotoshopIcon.png" alt="Photoshop" style="width:56px; height:56px; object-fit:contain;">
                        <div>
                            <h2 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--accent-cyan);">Adobe Photoshop</h2>
                            <p style="font-size:0.85rem; color:var(--text-secondary);">Digital Image Post-Processing & Graphic Assets Creation</p>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // 7. UNITY ENGINE TOOL APP
    unity: {
        title: "Unity Game Development Engine",
        icon: "fa-solid fa-gamepad",
        iconImg: "./assets/UnityIcon.png",
        width: 780,
        height: 520,
        render: function() {
            return `
                <div class="app-detail-container" style="display:flex; flex-direction:column; gap:20px;">
                    <div style="display:flex; align-items:center; gap:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:20px; border-radius:12px;">
                        <img src="./assets/UnityIcon.png" alt="Unity" style="width:56px; height:56px; object-fit:contain;">
                        <div>
                            <h2 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--accent-cyan);">Unity Game Engine</h2>
                            <p style="font-size:0.85rem; color:var(--text-secondary);">Virtual Reality Game Development, C# Gameplay Systems, & Character Controls</p>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // 8. UNREAL ENGINE TOOL APP
    unreal: {
        title: "Unreal Engine 5 Workstation",
        icon: "fa-solid fa-vr-cardboard",
        iconImg: "./assets/UnrealIcon.png",
        width: 780,
        height: 520,
        render: function() {
            return `
                <div class="app-detail-container" style="display:flex; flex-direction:column; gap:20px;">
                    <div style="display:flex; align-items:center; gap:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:20px; border-radius:12px;">
                        <img src="./assets/UnrealIcon.png" alt="Unreal" style="width:56px; height:56px; object-fit:contain;">
                        <div>
                            <h2 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--accent-cyan);">Unreal Engine 5</h2>
                            <p style="font-size:0.85rem; color:var(--text-secondary);">High-Fidelity Real-Time Environments, Blueprints, & Visual Effects</p>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // 9. GALLERY APP
    gallery: {
        title: "Gallery",
        icon: "fa-solid fa-photo-film",
        width: 820,
        height: 560,
        render: function() {
            return `
                <div class="gallery-container" style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h2 style="font-family:var(--font-heading); font-size:1.3rem; color:var(--accent-cyan);"><i class="fa-solid fa-images"></i> Santiago Salmon Gallery</h2>
                        <span style="font-size:0.8rem; color:var(--text-muted);"><i class="fa-solid fa-folder-open"></i> ./assets/gallery/</span>
                    </div>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="./assets/gallery/render1.jpg" alt="Gallery Artwork 1" onerror="this.src='./assets/project_ai_dash.jpg'">
                            <div class="gallery-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
                        </div>
                        <div class="gallery-item">
                            <img src="./assets/gallery/render2.jpg" alt="Gallery Artwork 2" onerror="this.src='./assets/project_dev_tool.jpg'">
                            <div class="gallery-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
                        </div>
                        <div class="gallery-item">
                            <img src="./assets/gallery/render3.jpg" alt="Gallery Artwork 3" onerror="this.src='./assets/project_ecom_app.jpg'">
                            <div class="gallery-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // 10. ABOUT ME APP (With Official Resume PDF Field & Viewer!)
    about: {
        title: "About Me",
        icon: "fa-solid fa-user-gear",
        width: 780,
        height: 600,
        render: function() {
            return `
                <div class="about-container" style="display:flex; flex-direction:column; gap:24px;">
                    <div class="about-hero">
                        <img src="./assets/avatar.png" alt="Santiago Salmon" class="about-photo" onerror="this.src='./assets/avatar.jpg'">
                        <div class="about-intro">
                            <h2>Santiago Salmon</h2>
                            <h3>Video Game Developer | Graphic Designer</h3>
                            <p>After graduating with a Bachelor's degree in Game Design from SAE Institute Mexico, I am currently pursuing studies in Videogame Programming at LaSalle Vancouver. My enthusiasm lies in visual arts, with expertise in drawing and proficiency in 3D modeling. I am thrilled at the opportunity to combine my programming skills with my passion for visual arts to craft captivating and immersive experiences.</p>
                        </div>
                    </div>

                    <!-- Official Resume PDF Action Banner -->
                    <div style="background:linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(127, 0, 255, 0.15)); border:1px solid rgba(0, 242, 254, 0.3); border-radius:14px; padding:18px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
                        <div>
                            <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--accent-cyan); display:flex; align-items:center; gap:8px;">
                                <i class="fa-solid fa-file-pdf"></i> Official Resume (CV) Document
                            </h4>
                            <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">
                                Santiago Salmon - Video Game Developer & Graphic Designer Resume (SanSalmonCVDev.pdf)
                            </p>
                        </div>
                        <div style="display:flex; gap:10px;">
                            <a href="./assets/SanSalmonCVDev.pdf" target="_blank" download="Santiago_Salmon_CV.pdf" class="btn-proj-action" style="padding:10px 18px; font-weight:700; background:linear-gradient(135deg, var(--accent-blue), var(--accent-cyan)); color:#030712; border:none; text-decoration:none; border-radius:8px; display:flex; align-items:center; gap:8px;">
                                <i class="fa-solid fa-download"></i> Download Resume PDF
                            </a>
                            <a href="./assets/SanSalmonCVDev.pdf" target="_blank" class="btn-proj-action" style="padding:10px 18px; font-weight:600; background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.2); text-decoration:none; border-radius:8px; display:flex; align-items:center; gap:8px;">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Open in New Tab
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 class="section-heading"><i class="fa-solid fa-briefcase"></i> Work Experience</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-year">Oct 2023 - Present</div>
                                <div class="timeline-role">Virtual Reality Game Developer</div>
                                <div class="timeline-company">SAE Institute Mexico (2022 - 2024)</div>
                                <p>I brought a vibrant mix of creativity and technical skills to design and develop characters, enhancing immersive gaming experiences.</p>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">Oct 2021 - Oct 2023</div>
                                <div class="timeline-role">3D Render Designer</div>
                                <div class="timeline-company">Re'Inventa (2020 - 2023)</div>
                                <p>Utilizing my expertise as a 3D Render Designer, I converted blueprints into visually captivating digital settings. With a strong ability to create renders and conceptualize spaces, I was able to drive my creative influence in materializing architectural concepts.</p>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">Oct 2020 - Oct 2021</div>
                                <div class="timeline-role">Graphic Designer</div>
                                <div class="timeline-company">BioTerra (2016 - 2019)</div>
                                <p>With my skills in graphic design, I excelled at producing engaging social media content. Known for designing influential logos that capture the core identity of the company.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="section-heading"><i class="fa-solid fa-graduation-cap"></i> Education</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-year">2023 - Present</div>
                                <div class="timeline-role">Bachelor of Video Game Programming</div>
                                <div class="timeline-company">LaSalle College Vancouver</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-year">2019 - 2023</div>
                                <div class="timeline-role">Bachelor of Game Design Development</div>
                                <div class="timeline-company">SAE Institute Mexico • Final CGPA: 3.90</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // 11. CONTACT APP (With Explicit LinkedIn, Mail, GitHub Fields)
    contact: {
        title: "Contact Me",
        icon: "fa-solid fa-paper-plane",
        width: 640,
        height: 540,
        render: function() {
            return `
                <div class="contact-container" style="display:flex; flex-direction:column; gap:20px;">
                    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:18px; border-radius:12px; display:flex; flex-direction:column; gap:12px;">
                        <h3 style="font-family:var(--font-heading); color:var(--accent-cyan); font-size:1.1rem; display:flex; align-items:center; gap:8px;">
                            <i class="fa-solid fa-address-card"></i> Direct Contact Channels
                        </h3>
                        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:14px; font-size:0.88rem;">
                            <a href="https://www.linkedin.com/in/santiago-salmon-ize-aa9424285/" target="_blank" style="display:flex; align-items:center; gap:10px; padding:10px; background:rgba(0,242,254,0.08); border:1px solid rgba(0,242,254,0.2); border-radius:8px; color:#fff; text-decoration:none;">
                                <i class="fa-brands fa-linkedin" style="font-size:1.2rem; color:var(--accent-cyan);"></i>
                                <div>
                                    <div style="font-weight:700;">LinkedIn</div>
                                    <div style="font-size:0.75rem; color:var(--text-secondary);">LinkedIn Profile</div>
                                </div>
                            </a>
                            <a href="mailto:ssalmonize@gmail.com" style="display:flex; align-items:center; gap:10px; padding:10px; background:rgba(255,0,127,0.08); border:1px solid rgba(255,0,127,0.2); border-radius:8px; color:#fff; text-decoration:none;">
                                <i class="fa-solid fa-envelope" style="font-size:1.2rem; color:var(--accent-pink);"></i>
                                <div>
                                    <div style="font-weight:700;">Email</div>
                                    <div style="font-size:0.75rem; color:var(--text-secondary);">ssalmonize@gmail.com</div>
                                </div>
                            </a>
                            <a href="https://github.com/SanSalmonI" target="_blank" style="display:flex; align-items:center; gap:10px; padding:10px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; text-decoration:none;">
                                <i class="fa-brands fa-github" style="font-size:1.2rem; color:#fff;"></i>
                                <div>
                                    <div style="font-weight:700;">GitHub</div>
                                    <div style="font-size:0.75rem; color:var(--text-secondary);">GitHub Profile</div>
                                </div>
                            </a>
                            <a href="https://santiagosalmon.my.canva.site/portafolio" target="_blank" style="display:flex; align-items:center; gap:10px; padding:10px; background:rgba(0,230,118,0.08); border:1px solid rgba(0,230,118,0.2); border-radius:8px; color:#fff; text-decoration:none;">
                                <i class="fa-solid fa-globe" style="font-size:1.2rem; color:var(--accent-emerald);"></i>
                                <div>
                                    <div style="font-weight:700;">Website</div>
                                    <div style="font-size:0.75rem; color:var(--text-secondary);">Canva Portfolio</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <form class="contact-form" id="contact-form-el">
                        <div class="form-group">
                            <label>Your Name</label>
                            <input type="text" class="form-control" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" class="form-control" placeholder="your.email@example.com" required>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea class="form-control" placeholder="Hello Santiago, let's connect regarding game development or 3D design..." required></textarea>
                        </div>
                        <button type="submit" class="btn-submit-contact">
                            <i class="fa-solid fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            `;
        },
        onMount: function(container) {
            const form = container.querySelector('#contact-form-el');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    if (window.taskbar) {
                        window.taskbar.showToast("Message Sent! Thank you for reaching out to Santiago.");
                    }
                    form.reset();
                });
            }
        }
    },

    // 12. SKILLS & APP SEARCH APP
    skills: {
        title: "Skills & Software Toolset",
        icon: "fa-solid fa-microchip",
        width: 780,
        height: 580,
        render: function() {
            return `
                <div class="skills-container" style="display:flex; flex-direction:column; gap:24px;">
                    <!-- Primary Software Toolset Icons Showcase -->
                    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:20px;">
                        <h3 class="section-heading" style="margin-bottom:16px;"><i class="fa-solid fa-toolbox"></i> Primary Software & Creative Toolset</h3>
                        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(90px, 1fr)); gap:16px; text-align:center;">
                            <div class="tool-badge-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px 8px; border-radius:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                <img src="./assets/UnityIcon.png" alt="Unity" style="width:42px; height:42px; object-fit:contain;">
                                <span style="font-size:0.75rem; font-weight:600; color:#fff;">Unity</span>
                            </div>
                            <div class="tool-badge-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px 8px; border-radius:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                <img src="./assets/UnrealIcon.png" alt="Unreal Engine" style="width:42px; height:42px; object-fit:contain;">
                                <span style="font-size:0.75rem; font-weight:600; color:#fff;">Unreal</span>
                            </div>
                            <div class="tool-badge-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px 8px; border-radius:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                <img src="./assets/BlenderIcon.png" alt="Blender" style="width:42px; height:42px; object-fit:contain;">
                                <span style="font-size:0.75rem; font-weight:600; color:#fff;">Blender</span>
                            </div>
                            <div class="tool-badge-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px 8px; border-radius:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                <img src="./assets/MayaIcon.png" alt="Autodesk Maya" style="width:42px; height:42px; object-fit:contain;">
                                <span style="font-size:0.75rem; font-weight:600; color:#fff;">Maya</span>
                            </div>
                            <div class="tool-badge-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px 8px; border-radius:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                <img src="./assets/PhotoShopIcon.png" alt="Photoshop" style="width:42px; height:42px; object-fit:contain;">
                                <span style="font-size:0.75rem; font-weight:600; color:#fff;">Photoshop</span>
                            </div>
                            <div class="tool-badge-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px 8px; border-radius:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                <img src="./assets/IllustratorIcon.png" alt="Illustrator" style="width:42px; height:42px; object-fit:contain;">
                                <span style="font-size:0.75rem; font-weight:600; color:#fff;">Illustrator</span>
                            </div>
                            <div class="tool-badge-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px 8px; border-radius:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                <img src="./assets/KritaIcon.png" alt="Krita" style="width:42px; height:42px; object-fit:contain;">
                                <span style="font-size:0.75rem; font-weight:600; color:#fff;">Krita</span>
                            </div>
                            <div class="tool-badge-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:12px 8px; border-radius:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                <img src="./assets/GithubIcon.png" alt="GitHub" style="width:42px; height:42px; object-fit:contain;">
                                <span style="font-size:0.75rem; font-weight:600; color:#fff;">GitHub</span>
                            </div>
                        </div>
                    </div>

                    <!-- Skills Proficiency Meters -->
                    <div class="skills-grid">
                        <div class="skill-category-card">
                            <div class="skill-cat-title"><i class="fa-solid fa-gamepad"></i> Game Dev & Engines</div>
                            <div class="skill-item">
                                <div class="skill-label"><span>Unity Engine</span> <span>95%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 95%;"></div></div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-label"><span>Unreal Engine</span> <span>90%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 90%;"></div></div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-label"><span>Front End Coding</span> <span>88%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 88%;"></div></div>
                            </div>
                        </div>

                        <div class="skill-category-card">
                            <div class="skill-cat-title"><i class="fa-solid fa-cube"></i> 3D & Animation</div>
                            <div class="skill-item">
                                <div class="skill-label"><span>3D Modeling</span> <span>96%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 96%;"></div></div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-label"><span>3D Animation & 2D Animation</span> <span>92%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 92%;"></div></div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-label"><span>Autodesk Suite & Maya</span> <span>94%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 94%;"></div></div>
                            </div>
                        </div>

                        <div class="skill-category-card">
                            <div class="skill-cat-title"><i class="fa-solid fa-palette"></i> Visual Arts & Design</div>
                            <div class="skill-item">
                                <div class="skill-label"><span>Illustration & Drawing</span> <span>95%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 95%;"></div></div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-label"><span>Adobe Suite & Krita</span> <span>95%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 95%;"></div></div>
                            </div>
                            <div class="skill-item">
                                <div class="skill-label"><span>Experience Design</span> <span>90%</span></div>
                                <div class="skill-bar-track"><div class="skill-bar-fill" style="width: 90%;"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    // 13. TERMINAL CLI
    terminal: {
        title: "Terminal CLI",
        icon: "fa-solid fa-terminal",
        width: 680,
        height: 440,
        render: function() {
            return `
                <div class="terminal-container">
                    <div class="term-welcome">
                        Interactive Terminal v4.8.2 [Santiago Salmon Workstation]<br>
                        Type <span style="color:var(--accent-cyan)">'help'</span> to view available system commands.
                    </div>
                    <div class="term-output" id="term-output-stream"></div>
                    <div class="term-prompt-line">
                        <span class="term-prompt-symbol">santiago@gamedev-os:~$</span>
                        <input type="text" class="term-input" id="term-input" autofocus autocomplete="off">
                    </div>
                </div>
            `;
        },
        onMount: function(container) {
            const input = container.querySelector('#term-input');
            const stream = container.querySelector('#term-output-stream');

            if (!input || !stream) return;

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const cmd = input.value.trim();
                    input.value = '';

                    const cmdLine = document.createElement('div');
                    cmdLine.className = 'term-line';
                    cmdLine.innerHTML = `<span style="color:var(--accent-emerald)">santiago@gamedev-os:~$</span> ${cmd}`;
                    stream.appendChild(cmdLine);

                    const response = document.createElement('div');
                    response.className = 'term-line';

                    const lower = cmd.toLowerCase();
                    if (lower === 'help') {
                        response.innerHTML = `
                            Available commands:<br>
                            - <span style="color:var(--accent-cyan)">gallery</span>: Open Gallery<br>
                            - <span style="color:var(--accent-cyan)">about</span>: Show biography summary & resume link<br>
                            - <span style="color:var(--accent-cyan)">skills</span>: List game dev, 3D art & graphic design skills<br>
                            - <span style="color:var(--accent-cyan)">contact</span>: Send message or view email/LinkedIn/GitHub<br>
                            - <span style="color:var(--accent-cyan)">neofetch</span>: Display system hardware info<br>
                            - <span style="color:var(--accent-cyan)">clear</span>: Clear terminal screen
                        `;
                    } else if (lower === 'neofetch') {
                        response.innerHTML = `
                            <span style="color:var(--accent-cyan)">User:</span> Santiago Salmon<br>
                            <span style="color:var(--accent-cyan)">Role:</span> Video Game Developer | Graphic Designer<br>
                            <span style="color:var(--accent-cyan)">Education:</span> LaSalle College Vancouver / SAE Institute Mexico<br>
                            <span style="color:var(--accent-cyan)">Contact:</span> ssalmonize@gmail.com<br>
                            <span style="color:var(--accent-cyan)">LinkedIn:</span> https://www.linkedin.com/in/santiago-salmon-ize-aa9424285/
                        `;
                    } else if (lower === 'gallery') {
                        response.textContent = "Opening Gallery...";
                        window.windowManager.openApp('gallery');
                    } else if (lower === 'about') {
                        response.textContent = "Opening About Me...";
                        window.windowManager.openApp('about');
                    } else if (lower === 'skills') {
                        response.textContent = "Opening Skills & Search...";
                        window.windowManager.openApp('skills');
                    } else if (lower === 'contact') {
                        response.textContent = "Opening Contact Me...";
                        window.windowManager.openApp('contact');
                    } else if (lower === 'clear') {
                        stream.innerHTML = '';
                        return;
                    } else if (cmd !== '') {
                        response.innerHTML = `<span style="color:#ff5f56">zsh: command not found: ${cmd}</span>. Type 'help' for available commands.`;
                    }

                    stream.appendChild(response);
                    container.scrollTop = container.scrollHeight;
                }
            });
        }
    },

    // 14. SETTINGS APP
    settings: {
        title: "System Settings",
        icon: "fa-solid fa-sliders",
        width: 600,
        height: 450,
        render: function() {
            return `
                <div class="settings-container" style="display:flex; flex-direction:column; gap:20px; padding:20px;">
                    <div class="setting-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:20px; border-radius:12px;">
                        <h3 style="font-size:1.1rem; font-family:var(--font-heading); color:var(--accent-cyan); display:flex; align-items:center; gap:10px;">
                            <i class="fa-solid fa-film"></i> Live Video Wallpaper Control
                        </h3>
                        <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:8px;">
                            Active Background: <span style="color:var(--accent-emerald); font-family:var(--font-mono);">assets/desktop_wallpaper.mp4</span>
                        </p>
                        <div style="margin-top:16px;">
                            <button class="btn-boot-start" id="settings-toggle-wp-btn" style="padding:10px 20px; font-size:0.88rem; cursor:pointer;">
                                <i class="fa-solid fa-pause"></i> Pause Video Wallpaper
                            </button>
                        </div>
                    </div>
                </div>
            `;
        },
        onMount: function(container) {
            const btn = container.querySelector('#settings-toggle-wp-btn');
            const video = document.getElementById('desktop-wallpaper');
            const icon = document.getElementById('wallpaper-icon');
            if (btn && video) {
                btn.innerHTML = video.paused ? '<i class="fa-solid fa-play"></i> Play Video Wallpaper' : '<i class="fa-solid fa-pause"></i> Pause Video Wallpaper';
                btn.addEventListener('click', () => {
                    if (video.paused) {
                        video.play();
                        btn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause Video Wallpaper';
                        if (icon) icon.className = 'fa-solid fa-pause';
                        if (window.taskbar) window.taskbar.showToast('Video Wallpaper Playing');
                    } else {
                        video.pause();
                        btn.innerHTML = '<i class="fa-solid fa-play"></i> Play Video Wallpaper';
                        if (icon) icon.className = 'fa-solid fa-play';
                        if (window.taskbar) window.taskbar.showToast('Video Wallpaper Paused');
                    }
                });
            }
        }
    }
};
