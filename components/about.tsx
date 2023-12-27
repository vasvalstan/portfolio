"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After multiple years of experience in{" "}
        <span className="font-medium">games testing, manual QA, and automation</span>, with a self-taught mindset, 
        I've decided to further my career and move into{" "}
        <span className="font-medium">web development</span>.{" "} Enjoy the
        problem-solving aspect and love the{" "}
        feeling of figuring out a solution to a problem.    
      </p>
      <p>
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a <span className="font-bold underline">full-stack developer.</span>
        </p>
      <p>
        <span className="italic">When I'm not coding</span>,  I enjoy spending time outdoors, engaging in hikes, runs, and I love all kinds of sports and physical exercises together with a team, Spartan Race type.{" "}
        I have aspirations to one day get a ✈️ license and learn to sail⛵.
      </p>
    </motion.section>
  );
}
