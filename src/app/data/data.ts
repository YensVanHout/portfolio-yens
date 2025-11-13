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
    year: "2019 - 2022",
    title: "Student AP Hogeschool - Programming",
    duration: "3 years",
    details:
      "My journey at AP Hogeschool was quite the rollercoaster. From learning C# to how to use frameworks such as ReactJS and VueJS. I also have learned how to make mobile apps using React Native. Using WordPress is also one of the skills I gathered during this time. For my internship I joined the Inuits BVBA team as a software developer. This was an amazing experience, I learned so much from the people around me during this time. I helped with the frontend for a digital asset management system. Within this project I helped with the filter functionality.",
  },
  {
    year: "2025 - 2025",
    title: "Java course at VDAB",
    duration: "1 year",
    details:
      "In 2025 I started my Java course at VDAB. I learned the basics of Java and how to use it to create console applications. I also learned how to use Spring Boot and JPA to create web applications. During this time I was part of a Scrum team, where we developed an application for warehouses to help with picking orders and processing incoming deliveries.",
  },
];

export const skills = {
  skills: [
    {
      name: "HTML/CSS/JS/TS",
      skill: 80,
      ecosystems: [
        { name: "VueJS", skill: 65 },
        { name: "ReactJS", skill: 75 },
      ],
    },
    { name: "Go", skill: 40 },
    {
      name: "Java",
      skill: 80,
      ecosystems: [
        { name: "Spring Boot", skill: 75 },
        { name: "JPA", altText: "Hibernate", skill: 70 },
        { name: "JUnit", skill: 65 },
        { name: "Mockito", skill: 60 },
        { name: "Jenkins", skill: 65 },
      ],
    },
    {
      name: "Other Skills",
      categories: [
        {
          title: "Operating Systems",
          ecosystems: [
            { name: "Linux", skill: 75 },
            { name: "Windows", skill: 80 },
          ],
        },
        {
          title: "Tools",
          ecosystems: [
            { name: "Git", skill: 65 },
            { name: "Docker", skill: 40 },
          ],
        },
        {
          title: "Hard skills",
          ecosystems: [
            { name: "Scrum", skill: false },
            { name: "Agile", skill: false },
            { name: "Kanban", skill: false },
          ],
        },
      ],
      skill: false,
    },
  ],
};

export const currentlyLearning = "Java";
