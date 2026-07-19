import type { Project } from "@/types"

export const projects: Project[] = [
  {
    name: "Rakaat Counter",
    techStack: ["Android", "React Native", "Mobile"],
    dateRange: "2025 – Present",
    description:
      "A personal Android application to help Muslims count their prayer rakaats accurately. Achieved over 5,000 downloads on the Google Play Store.",
    bullets: [
      "Published on Google Play Store with 5,000+ organic downloads.",
      "Intuitive UI designed for ease of use during prayer.",
      "Lightweight and offline-first — no internet required.",
    ],
    url: "https://play.google.com/store/apps/details?id=com.hnj.rakaat.counter&hl=en",
    downloads: "5k+",
  },
  {
    name: "AuctionMethod",
    techStack: ["React.JS", "React Native", "GraphQL", "MongoDB", "OpenSearch"],
    dateRange: "02/2023 – 03/2026",
    description:
      "SaaS product developed for AuctionMethod, providing intuitive & reliable software for auction managers.",
    bullets: [
      "Enables users to place bids seamlessly through a user-friendly interface.",
      "Highly scalable application, ensuring performance under heavy traffic.",
      "Admin panel includes invoicing capabilities, streamlining auction management.",
      "Features a React Native companion app, enhancing user accessibility on mobile devices.",
      "Supports user management and real-time functionality for a dynamic bidding experience.",
      "Utilizes Route53 to programmatically generate websites for new clients.",
      "Incorporates OpenAI and OpenSearch to create vector embeddings for advanced item search.",
    ],
    url: "https://www.auctionmethod.com/",
  },
  {
    name: "In-Hand Botanics",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.JS",
      "Node.js",
      "React Native",
      "ResNet",
      "Stripe",
      "SendBird",
    ],
    dateRange: "09/2022 – 06/2023",
    description:
      "Final year project leveraging multiple technologies to enhance agricultural and botanical functionalities.",
    bullets: [
      "Empowers farmers and botanists with intelligent botanical services.",
      "Plant Disease Detection using ResNet, enabling early diagnosis.",
      "Plant Recommendation System powered by Random Forest for optimized plant selection.",
      "Shop functionality integrated with Stripe Payment, ensuring secure transactions.",
      "Real-time chat between users and botanists via SendBird SDK.",
      "Augmented Reality (AR) for plant visualization, enhancing user experience.",
    ],
    url: "https://github.com/haidernawaz99/plantdoctor",
  },
  {
    name: "ETL Pipeline for Bike Store (DWH)",
    techStack: ["SSIS", "SSMS", "Visual Studio", "Power BI", "SQL"],
    dateRange: "09/2021 – 06/2022",
    description:
      "Semester project implementing data warehousing techniques for efficient data management.",
    bullets: [
      "Developed an OLAP system from an OLTP system for efficient data analysis.",
      "Extracted, transformed, and loaded (ETL) data using SSIS in SSMS and Visual Studio.",
      "Performed data analysis and visualization using Power BI.",
    ],
  },
  {
    name: "CI/CD using DevOps Tools",
    techStack: ["Jenkins", "Apache Tomcat", "GitHub", "Ant", "JUnit"],
    dateRange: "09/2021 – 06/2022",
    description:
      "Semester project showcasing CI/CD practices, emphasizing automation and deployment efficiency.",
    bullets: [
      "Created a CI/CD pipeline to automate deployment and integration.",
      "Configured Jenkins on Apache Tomcat for continuous integration.",
      "Integrated Jenkins with GitHub, Ant, and JUnit to streamline development and testing.",
    ],
  },
]
