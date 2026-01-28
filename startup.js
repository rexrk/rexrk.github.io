(function () {

    // ===== ONE-TIME ONLY =====
    if (sessionStorage.getItem("startupDone")) {
        const screen = document.getElementById("startup-screen");
        if (screen) screen.remove();
        return;
    }
    sessionStorage.setItem("startupDone", "true");
    // =========================

    const banner = `
  .   ____          _            __ _ _
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v4.0.1)
`;

    const logs = [
        ["INFO", "main", "c.r.portfolio.PortfolioService", "Starting PortfolioService v2.0"],
        ["INFO", "main", "c.r.portfolio.PortfolioService", "No active profile set, falling back to default"],
        ["INFO", "main", "o.s.b.w.embedded.tomcat.TomcatWebServer", "Tomcat initialized with port(s): 8080 (http)"],
        ["INFO", "main", "o.s.web.context.ContextLoader", "Root WebApplicationContext initialized"],
        ["INFO", "main", "c.r.portfolio.PortfolioService", "Started PortfolioService in 0.9 seconds (JVM running for 1.2)"]
    ];

    const el = document.getElementById("startup-logs");
    const start = new Date();
    let i = 0;

    el.innerHTML = `<span class="log-msg">${banner}</span>\n`;

    function format(ts, level, thread, clazz, msg) {
        return `<span class="log-time">${ts}</span>  ` +
               `<span class="log-level">${level}</span> ` +
               `<span class="log-thread">--- [ ${thread} ]</span> ` +
               `<span class="log-class">${clazz}</span> : ` +
               `<span class="log-msg">${msg}</span>\n`;
    }

    function next() {
        if (i >= logs.length) {
            el.innerHTML += `\n<span class="log-level">Access Granted</span> — <span class="log-msg">Dashboard initialized</span>\n`;
            setTimeout(() => {
                document.getElementById("startup-screen").remove();
            }, 400);
            return;
        }

        const now = new Date(start.getTime() + i * 130);
        const ts = now.toISOString().replace("T", " ").substring(0, 23);

        el.innerHTML += format(ts, ...logs[i]);
        i++;

        const delay = Math.floor(Math.random() * 200) + 160;
        setTimeout(next, delay);
    }

    next();
})();
