import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Game testing QA career - Gameloft & Quantic Lab",
    location: "London, UK",
    description:
      "Reached a lead QA position in 5 years. I worked on 20+ games for 3 mobile platforms(when windows phone was a thing) AAA games for PC and console.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2016 - Dec 2020",
  },
  {
    title: "QA manual and automation engineer",
    location: "London, UK",
    description:
      "Transitioned to a QA engineer role. All my work was to switch between manual and automation testing, mainly web apps, maintaining and/or creating automation frameworks.Used different languages and frameworks depending on the project and team, but lately I've been focusing on Playwright with TypeScript.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - Nov 2023",
  },
  {
    title: "Freelancer & Udemy Instructor",
    location: "London, UK",
    description:
      "Currently I'm working on creating a complete software testing bootcamp course on Udemy offering over 15h of video content. Using all the knowledge I've gathered over the years to help others get into the industry, I've made 3 Next.js projects to help students practice their skills, go from manual testing to setting up an automation framework. More info on my Github.",
    icon: React.createElement(FaReact),
    date: "Dec 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Eventio",
    description:
      "Full-stack Blitz.js app. It's a platform for creating and joining events.",
    tags: ["Next.js", "Blitz.js", "Prisma", "Mantine UI", "Typescript", "Zod"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Data analytics dashboard",
    description:
      "Project from Jonas's Schmedtmann's course. It's a dashboard for a fictional company. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Supabase"],
    imageUrl: rmtdevImg,
  },
  {
    title: "E-learning platform",
    description:
      "As I've previously worked as a software tester, I have created this e-learning platform with live payment integration and fully featured course on software testing.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Stripe", "Prisma"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Manual & automation testing",
  "Automation framework development for web(Playwright) & mobile(Appium)",
  "API testing",
  "Database testing",
  "Test planning and strategy development",
  "Test case creation and execution",
  "Performance & load testing with k6 & Gatling",
  "CI/CD using Github Actions",
  "Docker & Kubernetes",
  "Web scraping using Python & Scrapy",
] as const;
