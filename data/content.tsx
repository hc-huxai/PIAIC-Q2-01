import logo from "@/app/assets/img/panaverse-logo.png";
import { StaticImageData } from "next/image";

interface ContentType {
  type:
    | "h1"
    | "h2"
    | "image"
    | "link-lg"
    | "link-sm"
    | "paragraph"
    | "links-sm"
    | "links-lg";
  content?: string;
  image?: StaticImageData;
  link?: string;
  links?: string[];
}

export const content: ContentType[][] = [
  [
    {
      type: "h1",
      content:
        "Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar",
    },
    { type: "image", image: logo },
  ],
  [
    {
      type: "h2",
      content:
        "The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technologies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.",
    },
    {
      type: "link-lg",
      content:
        "Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar",
    },
    { type: "link-sm", content: "This document on Google Docs" },
    {
      type: "paragraph",
      content:
        "The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.",
    },
    {
      type: "paragraph",
      content:
        "Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.",
    },
  ],
  [
    { type: "h2", content: "The Program in a Nutshell: Earn While You Learn" },
    {
      type: "paragraph",
      content:
        "In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.",
    },
  ],
  [
    {
      type: "h2",
      content: "Program of Studies",
    },
    {
      type: "paragraph",
      content:
        "This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.",
    },
  ],
  [
    {
      type: "h2",
      content: "Core Courses (Common in All Specializations)",
    },
    {
      type: "paragraph",
      content:
        "Every participant of the program will start by completing the following two core courses:",
    },
    {
      type: "links-sm",
      links: [
        "Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript",
        "Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      ],
    },
  ],
  [
    {
      type: "h2",
      content: "Specialized Track",
    },
    {
      type: "paragraph",
      content:
        "After completing the first two quarters the participants will select one or more specializations consisting of two courses each:",
    },
    {
      type: "links-sm",
      links: [
        "Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        "Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
      ],
    },
  ],
  [
    {
      type: "h2",
      content: "Artificial Intelligence (AI) and Deep Learning Specialization",
    },
    {
      type: "paragraph",
      content:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    },
    {
      type: "links-sm",
      links: [
        "Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        "Quarter IV AI-361: Deep Learning and MLOps",
      ],
    },
  ],
  [
    {
      type: "h2",
      content: "Cloud-Native Computing Specialization",
    },
    {
      type: "paragraph",
      content:
        "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    },
    {
      type: "links-sm",
      links: [
        "Quarter III CN-351: Certified Kubernetes Application Developer (CKAD)",
        "Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
      ],
    },
  ],
  [
    {
      type: "h2",
      content: "Ambient Computing and IoT Specialization",
    },
    {
      type: "paragraph",
      content:
        "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.",
    },
    {
      type: "links-sm",
      links: [
        "Quarter III AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        "Quarter IV AC-361: Embedded Programming using C and Rust",
      ],
    },
  ],
  [
    {
      type: "h2",
      content: "The Outcome for Participants of the Program",
    },
    {
      type: "paragraph",
      content:
        "The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.",
    },
    {
      type: "links-sm",
      links: [
        "Top 5 'Metaverse' jobs that will rule the future of tech industry",
        "Blockchain Developer Salary - Jun 2022",
        "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
        "The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet's Uncharted Waters",
        "How To Become Metaverse Developer: Scope, Skills, and Salary",
      ],
    },
  ],
  [
    {
      type: "h2",
      content: "Relevant Information Links",
    },
    {
      type: "links-sm",
      links: [
        "Admission Website",
        "Facebook Group",
        "Youtube Live Channel",
        "Twitter",
        "Github Repo",
      ],
    },
  ],
];
