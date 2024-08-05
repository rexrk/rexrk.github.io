const projects = [
    {
        "title": "Microservices with Java",
        "description": "Designed and implemented various microservices concepts using Spring Cloud. Gained hands-on experience with different aspects of microservices architecture.",
        "technologies": "Java, Spring Boot, Spring Cloud, Docker, Kubernetes, Google Cloud Platform",
        "link": "https://github.com/rexrk/Java_Microservices"
    }
    ,
    {
        "title": "Movie Booking System - Backend",
        "description": "Designed and implemented the backend system for a movie booking application. Utilized Java and Spring Boot for development, Docker for containerization, and AWS for deployment and cloud services.",
        "technologies": "Java, Spring Boot, Docker, AWS",
        "link": "https://github.com/rexrk"
    }
    
    ,
    {
        "title": "Email Sender with Spring Boot and React",
        "description": "Developed an application for sending emails using Spring Boot for the backend and React for the frontend.",
        "technologies": "Java, Spring Boot, React, Rest API, Java Messaging Service",
        "link": "https://github.com/rexrk/Email-Sender-Spring-React"
    }
    ,
    {
        "title": "IDPS Intrusion Detection and Prevention System",
        "description": "Developed an Intrusion Detection and Prevention System (IDPS) to enhance security by detecting and preventing potential threats.",
        "technologies": "Java, Spring Boot, Microservices, MySql, H2, Rest API",
        "link": "https://github.com/rexrk/IDPS-IntrusionDb-Defender"
    }
    ,
    {
        "title": "React-SpringBoot Todo Web App",
        "description": "Developed a full-stack Todo Web Application using React for the frontend and Spring Boot for the backend. The application allows users to manage their tasks efficiently.",
        "technologies": "React, Spring Boot, RESTful APIs, MySql, Docker, AWS>",
        "link": "https://github.com/rexrk/React-SpringBoot-TodoWebApp"
    }
    ,
    {
        "title": "Product Management App",
        "description": "Developed a product management application using the Spring Framework with MVC architecture. This application allows users to manage product listings, including CRUD operations.",
        "technologies": "Java, JSP, Spring Framework, Spring MVC, Spring AOP",
        "link": "https://github.com/rexrk/Product-Management-App"
    }
    
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectBox = document.createElement('div');
    projectBox.className = 'backBlack';
    
    projectBox.innerHTML = `
        <h2>${project.title}</h2>
        <pre>${JSON.stringify(project, null, 2)}</pre>
        <a href="${project.link}">View Source Code</a>
    `;
    
    projectsContainer.appendChild(projectBox);
});