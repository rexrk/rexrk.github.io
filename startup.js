(function () {
    const screen = document.getElementById("startup-screen");
    if (!screen) return;

    // Check if previously played in this session
    if (sessionStorage.getItem("startupDone")) {
        screen.remove();
        return;
    }

    const banner = `
  .   ____          _            __ _ _
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v3.3.4) · Production
`;

    const logs = [
        ["INFO", "main", "c.r.portfolio.PortfolioApplication", "Starting PortfolioApplication v2.4 on prod-srv-01 using Java 21"],
        ["INFO", "main", "c.r.portfolio.PortfolioApplication", "The following profiles are active: prod, high-availability"],
        ["INFO", "main", "o.s.b.w.embedded.tomcat.TomcatWebServer", "Tomcat initialized with port(s): 8080 (http)"],
        ["INFO", "main", "o.apache.catalina.core.StandardService", "Starting service [Tomcat]"],
        ["INFO", "main", "o.s.web.context.ContextLoader", "Root WebApplicationContext: initialization completed in 842 ms"],
        ["INFO", "main", "com.zaxxer.hikari.HikariDataSource", "HikariPool-1 - Starting... Pool connection established"],
        ["INFO", "main", "o.s.s.web.DefaultSecurityFilterChain", "Spring Security initialized: [Stateless JWT, CORS, CSRF disabled]"],
        ["INFO", "main", "o.s.b.a.e.web.EndpointLinksResolver", "Exposing 14 endpoint(s) beneath base path '/actuator'"],
        ["INFO", "main", "c.r.portfolio.PortfolioApplication", "Started PortfolioApplication in 1.12 seconds (process running for 1.45s)"]
    ];

    const el = document.getElementById("startup-logs");
    if (!el) return;

    // Skip helper
    window.dismissStartup = function () {
        sessionStorage.setItem("startupDone", "true");
        if (screen) {
            screen.style.transition = "opacity 0.25s ease";
            screen.style.opacity = "0";
            setTimeout(() => {
                screen.remove();
            }, 250);
        }
    };

    // Keyboard shortcut to skip
    window.addEventListener("keydown", function (e) {
        if (e.key === "Escape" || e.code === "Space") {
            window.dismissStartup();
        }
    });

    el.innerHTML = `<span class="log-msg">${banner}</span>\n`;

    function format(ts, level, thread, clazz, msg) {
        return `<span class="log-time">${ts}</span> ` +
               `<span class="log-level">${level}</span> ` +
               `<span class="log-thread">--- [ ${thread.padEnd(8)} ]</span> ` +
               `<span class="log-class">${clazz.padEnd(38)}</span> : ` +
               `<span class="log-msg">${msg}</span>\n`;
    }

    const start = new Date();
    let i = 0;

    function next() {
        if (i >= logs.length) {
            el.innerHTML += `\n<span class="log-level">✓ SUCCESS</span> — <span class="log-msg">Session authenticated. Initializing developer console...</span>\n`;
            sessionStorage.setItem("startupDone", "true");
            setTimeout(() => {
                window.dismissStartup();
            }, 450);
            return;
        }

        const now = new Date(start.getTime() + i * 110);
        const ts = now.toISOString().replace("T", " ").substring(0, 23);

        el.innerHTML += format(ts, ...logs[i]);
        i++;

        // Scroll to bottom
        screen.scrollTop = screen.scrollHeight;

        const delay = Math.floor(Math.random() * 80) + 70;
        setTimeout(next, delay);
    }

    // Start after slight delay
    setTimeout(next, 120);
})();
