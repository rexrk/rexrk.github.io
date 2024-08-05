const skills = [
    {
        "title": "Languages & Frameworks",
        "technologies": [
            "Java Core & Advanced",
            "Object-Oriented Programming",
            {
                "Spring Framework": [
                    "Web",
                    "WebMvc",
                    "Data JPA",
                    "Data JDBC",
                    "ORM",
                    "JMS",
                    "Spring Boot",
                    "Cloud",
                    "Test"
                ]
            }
        ]
    }
    ,
    {
        "title": "Development Tools & Practices",
        "technologies": [
            "Data Structures & Algorithms (DSA)",
            "RESTful API Design",
            "Lombok",
            "Actuator",
            "HATEOAS",
            "DevTools",
            "Microservices",
            "Distributed Tracing",
            "Zipkin",
            "Eureka",
            "Maven",
            "Gradle",
            "Spring Security",
            "Spring AOP",
            "Spring MVC",
            "JUnit",
            "Mockito",
            "Open-source contributions"
        ]
    },
    {
        "title": "Cloud & DevOps",
        "technologies": [
            "Docker",
            "Kubernetes",
            "AWS",
            "GCP"
        ]
    },
    {
        "title": "Frontend",
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js"
        ]
    },
    {
        "title": "Version Control",
        "technologies": [
            "Git",
            "GitHub"
        ]
    },
    {
        "title": "Database Management",
        "technologies": [
            "MySQL",
            "H2 Database"
        ]
    },
    {
        "title": "IDEs",
        "technologies": [
            "IntelliJ IDEA",
            "VS Code",
            "Eclipse"
        ]
    }
    
];

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillBox = document.createElement('div');
    skillBox.className = 'backBlack-skill';
    
    skillBox.innerHTML = `
        <h2>${skill.title}</h2>
        <pre>${JSON.stringify(skill, null, 2)}</pre>
    `;
    
    skillsContainer.appendChild(skillBox);
});

