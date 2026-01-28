const projects = [
  {
    name: "Recruitr",
    type: "backend-system",
    description:
      "Backend system to manage organizations, candidates, jobs, and vendor/client relationships.",
    responsibilities: [
      "Designed REST APIs for managing organizations, candidates, and job workflows",
      "Implemented authentication and authorization using Spring Security",
      "Designed relational data models using Spring Data JPA",
      "Worked with containerized deployments on Kubernetes"
    ],
    technologies: [
      "Java", "Spring Boot", "Spring Data JPA",
      "Spring Security", "MySQL", "Kubernetes"
    ],
    source: "https://github.com/rexrk"
  },

  {
    name: "ScoutlyMCP Server",
    type: "ai-backend-service",
    description:
      "MCP server that exposes Android SMS data as contextual input to LLMs using ADB integration.",
    responsibilities: [
      "Implemented an MCP-compatible backend server",
      "Integrated Android Debug Bridge (ADB) for SMS extraction",
      "Exposed structured context APIs for LLM consumption",
      "Focused on controlled and secure data access"
    ],
    technologies: [
      "Python", "FastMCP", "ADB", "Claude"
    ],
    source: "https://github.com/rexrk"
  },

  {
    name: "Microservices with Java",
    type: "distributed-system",
    description:
      "Implemented core microservices concepts using Spring Cloud to understand distributed architecture patterns.",
    technologies: [
      "Java", "Spring Boot", "Spring Cloud",
      "Docker", "Kubernetes", "GCP"
    ],
    source: "https://github.com/rexrk/Java_Microservices"
  },

  {
    name: "Movie Booking System - Backend",
    type: "backend-service",
    description:
      "Backend system for a movie booking application handling bookings and availability.",
    technologies: [
      "Java", "Spring Boot", "Docker", "AWS"
    ],
    source: "https://github.com/rexrk"
  },

  {
    name: "Email Sender (Spring Boot + React)",
    type: "backend-service",
    description:
      "Application for sending emails using Spring Boot backend and a lightweight React frontend.",
    technologies: [
      "Java", "Spring Boot", "React",
      "REST APIs", "Java Messaging Service"
    ],
    source: "https://github.com/rexrk/Email-Sender-Spring-React"
  },

  {
    name: "IDPS (Intrusion Detection & Prevention System)",
    type: "security-system",
    description:
      "Security-focused system to detect and prevent intrusion attempts using backend rules.",
    technologies: [
      "Java", "Spring Boot", "Microservices",
      "MySQL", "H2", "REST APIs"
    ],
    source: "https://github.com/rexrk/IDPS-IntrusionDb-Defender"
  },

  {
    name: "React + Spring Boot Todo App",
    type: "full-stack",
    description:
      "Full-stack todo application with RESTful backend and React frontend.",
    technologies: [
      "React", "Spring Boot", "REST APIs",
      "MySQL", "Docker", "AWS"
    ],
    source: "https://github.com/rexrk/React-SpringBoot-TodoWebApp"
  },

  {
    name: "Product Management Application",
    type: "backend-mvc",
    description:
      "Product management application built using Spring MVC with CRUD operations.",
    technologies: [
      "Java", "Spring MVC", "Spring AOP", "JSP"
    ],
    source: "https://github.com/rexrk/Product-Management-App"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  // format JSON for single project
  let json = JSON.stringify(project, null, 2)
    .replace(/\[\n\s+/g, "[ ")
    .replace(/\n\s+\]/g, " ]")
    .replace(/",\n\s+"/g, '", "');

  // syntax highlighting
  json = json
    .replace(/"([^"]+)"\s*:/g, '<span class="json-key">"$1"</span>:')
    .replace(/:\s*"([^"]+)"/g, ': <span class="json-string">"$1"</span>');

  const block = document.createElement("div");
  block.className = "response-box";

  block.innerHTML = `
    <pre class="response-json">${json}</pre>
    <div class="terminal-action">
      <span class="cmd">$</span>
      <a href="${project.source}" target="_blank">
        open source → ${project.name}
      </a>
    </div>
  `;

  container.appendChild(block);
});
