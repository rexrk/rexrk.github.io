const skills = {
  languages: ["Java", "Python"],

  frameworks: {
    spring: [
      "Spring Boot", "Spring MVC", "Spring Data JPA",
      "Spring Security", "Spring Cloud", "Spring AOP", "Spring Test"
    ]
  },

  backend_practices: [
    "REST API Design", "Microservices Architecture",
    "Distributed Systems", "Service-to-Service Communication",
    "Configuration Management", "API Gateway Integration"
  ],

  security: [
    "OAuth2", "JWT", "mTLS",
    "Role-Based Access Control", "Secure API Design"
  ],

  databases: ["MySQL", "H2", "MongoDB", "Redis"],

  cloud_devops: ["Docker", "Kubernetes", "AWS", "GCP", "Utho", "Runpod"],

  testing: ["JUnit", "Mockito", "Integration Testing", "Test containers"],

  observability: ["Spring Boot Actuator", "Distributed Tracing", "Zipkin"],

  build_tools: ["Maven", "Gradle"],

  version_control: ["Git", "GitHub", "GitLab", "Bitbucket"],

  frontend_exposure: ["HTML", "CSS", "JavaScript", "Basic React.js"]
};

// compact JSON formatting
let json = JSON.stringify(skills, null, 2)
  .replace(/\[\n\s+/g, "[ ")
  .replace(/\n\s+\]/g, " ]")
  .replace(/",\n\s+"/g, '", "');

// syntax highlighting (keys + strings only)
json = json
  // keys
  .replace(/"([^"]+)"\s*:/g, '<span class="json-key">"$1"</span>:')
  // string values
  .replace(/:\s*"([^"]+)"/g, ': <span class="json-string">"$1"</span>');

const container = document.getElementById("skills-container");

container.innerHTML = `
  <div class="response-box">
    <div class="response-header">Response Body</div>
    <pre class="response-json">${json}</pre>
  </div>
`;
