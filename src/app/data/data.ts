export const portfolio = [
  {
    title: "Pokeranked (API broken)",
    img: {
      imgUrl: "/assets/pokeranked.webp",
      alt: "Pokeranked website screenshot",
    },
    stack: ["React", "TypeScript"],
    links: {
      website: "https://pokeranked.firebaseapp.com/",
      github: "https://github.com/YensVanHout/pokeranked",
    },
  },
  {
    title: "Todo list",
    img: { imgUrl: "/assets/todolist.webp", alt: "Todolist app screenshot" },
    stack: ["React", "TypeScript", "Vite"],
    links: {
      github: "https://github.com/YensVanHout/todo_list",
    },
  },
  {
    title: "Discord Bot",
    img: { imgUrl: "/assets/discord.webp", alt: "Discord logo" },
    stack: ["TypeScript", "DiscordJS"],
    links: {
      github: "https://github.com/YensVanHout/BickyBot_JS",
    },
  },
  {
    title: "LOTR Quiz App",
    img: {
      imgUrl: "/assets/lotr.webp",
      alt: "Lord of the Rings app screenshot",
    },
    stack: ["Express", "JavaScript", "EJS"],
    links: {
      github: "https://github.com/YensVanHout/ITProject-Ring.dev",
    },
  },
];

export const timeline = [
  {
    year: "2018 - 2019",
    title: "Student Encora - Webdesign",
    duration: "2 years",
    details:
      "I started this course because I knew I wanted to create for the web. When I started this course I was an absolute beginner. During this time I learned to create websites using HTML, CSS and JavaScript. I also learned how to make responsive websites during this time.",
  },
  {
    year: "2019 - 2020",
    title: "Student AP Hogeschool - Network engineer",
    duration: "1 year",
    details:
      "My study in Network Engineering provided a solid foundation in core IT infrastructure concepts. I gained practical exposure to essential areas, including TCP/IP networking, IP addressing, and configuring network devices. Crucially, I have hands-on experience with server setups, configuring services like DNS and DHCP in Linux and Windows Server environments. This experience included managing basic security and user access permissions. But I felt like I enjoyed the programming aspect more than the network engineering aspect.",
  },
  {
    year: "2020 - 2022",
    title: "Student AP Hogeschool - Programming",
    duration: "2 years",
    details:
      "My journey at AP Hogeschool was quite the rollercoaster. From learning C# to how to use frameworks such as ReactJS and VueJS. I also have learned how to make mobile apps using React Native. Using WordPress is also one of the skills I gathered during this time. For my internship I joined the Inuits BVBA team as a software developer. This was an amazing experience, I learned so much from the people around me during this time. I helped with the frontend for a digital asset management system. Within this project I helped with the filter functionality.",
  },
  {
    year: "2023 - 2023",
    title: "Odoo developer",
    duration: "1 year",
    details:
      "I undertook intensive training focused on developing for Odoo, a leading open-source ERP platform. This study provided hands-on experience in customizing and extending business applications. My training covered the core Odoo framework, including its object-relational mapping (ORM) and API. I practiced developing custom modules using Python and refining user interfaces with XML and JavaScript. This has given me a foundational understanding of the ERP lifecycle, data modeling, and integrating new features into existing business processes. I am prepared to begin contributing to Odoo development projects.",
  },
  {
    year: "2025 - 2025",
    title: "VDAB - Full Stack Developer",
    duration: "1 year",
    details:
      "In 2025 I started my Java course at VDAB. I learned the basics of Java and how to use it to create console applications. I also learned how to use Spring Boot and JPA to create web applications. During this time I was part of a Scrum team, where we developed an application for warehouses to help with picking orders and processing incoming deliveries.",
  },
  {
    year: "2025 - Present",
    title: "Freelance Developer",
    duration: "Present",
    details:
      "I have looking for jobs as a freelance developer. I have worked on projects using various technologies such as Java, Spring Boot, JPA, ReactJS and VueJS.",
  },
];

export const skills = {
  skills: [
    {
      name: "HTML/CSS/JS/TS",
      skill: 80,
      subtitle: "Ecosystems",
      ecosystems: [
        { name: "VueJS", skill: 65 },
        { name: "ReactJS", skill: 75 },
      ],
    },
    { name: "Go", subtitle: false, skill: 40 },
    {
      name: "Java",
      skill: 80,
      subtitle: "Ecosystems",
      ecosystems: [
        { name: "Spring Boot", skill: 75 },
        { name: "JPA", altText: "Hibernate", skill: 70 },
        { name: "Spring Security", skill: 60 },
        { name: "JUnit", skill: 65 },
        { name: "Mockito", skill: 60 },
      ],
    },
    {
      name: "Other Skills",
      subtitle: false,
      categories: [
        {
          title: "Data & Persistence",
          ecosystems: [
            { name: "MongoDB", skill: 70 },
            { name: "PostgreSQL/MySQL/MariaDB", skill: 65 },
          ],
        },
        {
          title: "Operating Systems",
          ecosystems: [
            { name: "Linux", skill: 75 },
            { name: "Windows", skill: 80 },
          ],
        },
        {
          title: "System Integration & Deployment",
          ecosystems: [
            { name: "Jenkins", skill: 65 },
            { name: "Integration Testing", skill: 55 },
            { name: "Maven/Gradle", skill: 75 },
            { name: "Git", skill: 65 },
            { name: "Docker", skill: 40 },
            { name: "Kubernetes (K8s)", skill: 30 },
            { name: "AWS/Azure/GCP Basics", skill: 45 },
            { name: "RabbitMQ", skill: 35 },
          ],
        },

        {
          title: "Hard skills",
          ecosystems: [
            { name: "RESTful API Design", skill: false },
            { name: "Scrum", skill: false },
          ],
        },
        {
          title: "Design Tools",
          ecosystems: [
            { name: "Figma", skill: 60 },
            { name: "Affinity Suite", skill: 60 },
            { name: "Adobe Suite", skill: 55 },
          ],
        },
      ],
      skill: false,
    },
    {
      name: "Soft skills",
      subtitle: false,
      ecosystems: [
        { name: "Problem Solving", skill: false },
        { name: "Structured Organization", skill: false },
        { name: "Adaptability & Learning", skill: false },
        { name: "Attention to Detail", skill: false },
      ],
    },
  ],
};

export const currentlyLearning = "Java";
