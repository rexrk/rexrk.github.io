/**
 * cyber-bg.js - Unified Watch Dogs / ctOS / Hacker Living Glass Background
 * Features:
 * - Transparent clear loop preserving vibrant ambient radial glows
 * - Cascading digital hex & telemetry streams with character mutation
 * - Floating ctOS surveillance & targeting HUD nodes with geo-coordinates
 * - Floating glowing cyber data packets adding 3D parallax depth behind the glass
 * - Interactive mouse radar / decryption pulse
 * - 60fps render loop with battery-saving tab visibility detection
 */

(function () {
    const canvas = document.getElementById("cyber-bg");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Watch Dogs & Backend Engineering Data Dictionary
    const HACKER_WORDS = [
        "0x7F454C46", "0xDEADBEEF", "0x00FF8080", "0x38BDF8", "0x2E0B5B",
        "ctOS://SYSTEM.ROOT", "NET_DAEMON.PID_4091", "TRACE_ROUTE::NODE_07",
        "JVM.GC.CYCLE_OK", "REDIS.CLUSTER.SYNC", "KAFKA.EVENT_BUS",
        "TXN_FLOW.ORCHESTRATE", "PORT_8080:LISTEN", "AES_256_GCM::LOCKED",
        "SYS_CALL::0x80", "MEM_ALLOC::HEAP_OK", "AUTH_BEARER_JWT",
        "DEDSEC://ACCESS_GRANTED", "LAT:28.6139N", "LON:77.2090E",
        "SOCKET://ESTABLISHED", "IO_WAIT::0.002ms", "K8S_INGRESS_KONG",
        "01001001", "01100001", "01110110", "01100001", // "Java" in binary
        "REST_200_OK", "STAT_UPTIME_99.98%", "SEC_LEVEL_MAX"
    ];

    const GLYPHS = "0123456789ABCDEF<>{}[]/\\*&^%$#@!;:~=+-";

    // Configuration
    const FONT_SIZE = 13;
    let columns = Math.floor(width / 24);
    let drops = [];
    let speeds = [];
    let columnTexts = [];

    // Floating Ambient Data Packets for depth
    let particles = [];
    const NUM_PARTICLES = 25;

    function initElements() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        columns = Math.floor(width / 24);
        drops = [];
        speeds = [];
        columnTexts = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
            speeds[i] = Math.random() * 0.45 + 0.35;
            columnTexts[i] = getRandomSnippet();
        }

        particles = [];
        for (let p = 0; p < NUM_PARTICLES; p++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 1,
                alpha: Math.random() * 0.4 + 0.2,
                color: Math.random() > 0.5 ? "#38bdf8" : "#39d353"
            });
        }
    }

    function getRandomSnippet() {
        return HACKER_WORDS[Math.floor(Math.random() * HACKER_WORDS.length)];
    }

    // Mouse tracking for interactive hacker radar
    let mouse = { x: -1000, y: -1000, radius: 160, active: false };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });

    window.addEventListener("mouseleave", () => {
        mouse.active = false;
        mouse.x = -1000;
        mouse.y = -1000;
    });

    window.addEventListener("resize", () => {
        initElements();
    });

    // Floating ctOS Surveillance HUD Reticles
    const hudNodes = [
        { x: 0.08, y: 0.16, label: "ctOS://NODE_AP_SOUTH_1", sub: "TARGET: PROD_DAEMON", rot: 0 },
        { x: 0.88, y: 0.22, label: "SIGNAL_INTERCEPT::TLS1.3", sub: "28.6139° N, 77.2090° E", rot: 0 },
        { x: 0.90, y: 0.84, label: "PORT:8080 · MICROSERVICES", sub: "STATUS: UNRESTRICTED", rot: 0 }
    ];

    let glitchCounter = 0;

    // Main 60fps Animation Loop
    function draw() {
        // Clear frame transparently so ambient radial background shines through the glass
        ctx.clearRect(0, 0, width, height);

        // Render ambient floating cyber particles for depth
        drawParticles();

        // Render subtle cyber grid lines
        drawCyberGrid();

        // Render falling hacker streams
        ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

        for (let i = 0; i < columns; i++) {
            const x = i * 24 + 10;
            const y = drops[i] * FONT_SIZE;
            const word = columnTexts[i];

            // Render stream characters
            for (let j = 0; j < word.length; j++) {
                const charY = y - j * FONT_SIZE;
                if (charY < 0 || charY > height + 20) continue;

                // Mouse proximity decryption boost
                const dx = x - mouse.x;
                const dy = charY - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const nearMouse = dist < mouse.radius;

                // Leading character glows bright cyan/white, tail fades in phosphor green
                if (j === 0) {
                    ctx.fillStyle = nearMouse ? "#ffffff" : "#00f0ff";
                    ctx.shadowColor = "#00f0ff";
                    ctx.shadowBlur = nearMouse ? 14 : 7;
                } else if (j < 3) {
                    ctx.fillStyle = nearMouse ? "#38bdf8" : "rgba(56, 189, 248, 0.8)";
                    ctx.shadowColor = "#38bdf8";
                    ctx.shadowBlur = 4;
                } else {
                    const alpha = Math.max(0.1, 0.55 - (j / word.length) * 0.45);
                    ctx.fillStyle = nearMouse ? "rgba(57, 211, 83, 0.85)" : `rgba(57, 211, 83, ${alpha})`;
                    ctx.shadowBlur = 0;
                }

                // Random character mutation
                let displayChar = word[j];
                if (Math.random() < 0.08 || (nearMouse && Math.random() < 0.25)) {
                    displayChar = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                }

                ctx.fillText(displayChar, x, charY);
            }

            ctx.shadowBlur = 0;

            // Increment drop position
            drops[i] += speeds[i];

            // Reset drop to top with new word
            if (drops[i] * FONT_SIZE - word.length * FONT_SIZE > height) {
                drops[i] = Math.floor(Math.random() * -30);
                columnTexts[i] = getRandomSnippet();
                speeds[i] = Math.random() * 0.45 + 0.35;
            }
        }

        // Render ctOS Surveillance HUD Elements
        drawCtosHud();

        // Mouse radar circle
        if (mouse.active) {
            drawMouseRadar();
        }

        // Watch Dogs Glitch Slice
        glitchCounter++;
        if (glitchCounter > 280) {
            if (glitchCounter < 284) {
                drawGlitchSlice();
            } else {
                glitchCounter = 0;
            }
        }

        if (!document.hidden) {
            requestAnimationFrame(draw);
        }
    }

    // Floating Data Particles
    function drawParticles() {
        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        });
    }

    // Draw Watch Dogs subtle grid intersections
    function drawCyberGrid() {
        ctx.fillStyle = "rgba(56, 189, 248, 0.14)";
        ctx.font = "10px monospace";
        const stepX = 140;
        const stepY = 110;

        for (let x = 40; x < width; x += stepX) {
            for (let y = 40; y < height; y += stepY) {
                ctx.fillText("+", x, y);
            }
        }
    }

    // Draw floating ctOS HUD telemetry nodes
    function drawCtosHud() {
        hudNodes.forEach((node) => {
            const posX = node.x * width;
            const posY = node.y * height;
            node.rot += 0.008;

            ctx.save();
            ctx.translate(posX, posY);

            // Bounding crosshair box
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.lineWidth = 1;
            ctx.strokeRect(-24, -24, 48, 48);

            // Rotating reticle tick marks
            ctx.beginPath();
            ctx.arc(0, 0, 18, node.rot, node.rot + Math.PI * 0.7);
            ctx.strokeStyle = "rgba(57, 211, 83, 0.4)";
            ctx.stroke();

            // Reticle center dot
            ctx.fillStyle = "rgba(56, 189, 248, 0.8)";
            ctx.fillRect(-1.5, -1.5, 3, 3);

            // ctOS telemetry text
            ctx.font = "9px 'JetBrains Mono', monospace";
            ctx.fillStyle = "rgba(56, 189, 248, 0.75)";
            ctx.fillText(node.label, 32, -4);
            ctx.fillStyle = "rgba(57, 211, 83, 0.6)";
            ctx.fillText(node.sub, 32, 8);

            ctx.restore();
        });
    }

    // Mouse radar ring
    let radarRadius = 0;
    function drawMouseRadar() {
        radarRadius = (radarRadius + 1.2) % mouse.radius;
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, radarRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * (1 - radarRadius / mouse.radius)})`;
        ctx.lineWidth = 1.4;
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 8;
        ctx.stroke();

        // Crosshairs around cursor
        ctx.strokeStyle = "rgba(57, 211, 83, 0.4)";
        ctx.beginPath();
        ctx.moveTo(mouse.x - 14, mouse.y);
        ctx.lineTo(mouse.x + 14, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 14);
        ctx.lineTo(mouse.x, mouse.y + 14);
        ctx.stroke();
        ctx.restore();
    }

    // Watch Dogs Glitch slice effect
    function drawGlitchSlice() {
        const sliceY = Math.random() * height;
        const sliceHeight = Math.random() * 25 + 5;
        const offset = (Math.random() - 0.5) * 20;

        try {
            const imgData = ctx.getImageData(0, sliceY, width, sliceHeight);
            ctx.putImageData(imgData, offset, sliceY);
            ctx.fillStyle = "rgba(56, 189, 248, 0.1)";
            ctx.fillRect(0, sliceY, width, sliceHeight);
        } catch (e) {
            // Ignore if canvas context issues occur
        }
    }

    // Resume rendering when tab becomes visible again
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            requestAnimationFrame(draw);
        }
    });

    // Initialize and start animation
    initElements();
    requestAnimationFrame(draw);
})();

