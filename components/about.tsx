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
        <span className="font-medium">game testing</span>, with a self-taught
        mindset, I've decided to further my career and move into{" "}
        <span className="font-medium">software QA</span>. I enjoy the
        problem-solving aspect and the idea that in order for a person to be
        happy and fullfilled, progress must be present in whatever they do.
      </p>
      <p className="mb-3 font-bold underline">
        Currently I'm developing my own Udemy course called 'Practical software
        testing' in which I take beginners from zero to hero in the software
        testing field. From basics on manual QA with a practical React app as
        test example. I showcase the following:
      </p>
      <ul className="pl-5 space-y-2">
        <li className="text-base leading-6">
          Test strategy, plan and test case development on an e-learning
          platform as example
        </li>
        <li className="text-base leading-6">API testing & automation</li>
        <li className="text-base leading-6">SQL and database testing</li>
        <li className="text-base leading-6">Playwright automation</li>
        <li className="text-base leading-6">Performance testing with K6</li>
        <li className="text-base leading-6">
          Git, Github and Github actions for CI/CD and AWS deployment
        </li>
        <li className="text-base leading-6">
          Basics of security and OWASP Top 10 vulnerabities
        </li>
        <li className="text-base leading-6">Basics of Docker & Kubernetes</li>
        <li className="text-base leading-6 pb-12">
          Mobile automation using Maestro
        </li>
      </ul>
      <p className="pb-12">
        I am looking, preferably, for a{" "}
        <span className="font-medium">full-time position or contracting</span>{" "}
        as an{" "}
        <span className="font-bold underline ">
          SDET, QA automation or manual tester.
        </span>
      </p>
      <p>
        <span className="italic">When I'm not testing/coding</span>, I enjoy
        spending time outdoors, engaging in hikes, runs, and I love all kinds of
        sports and physical exercises together with a team, Spartan Race type. I
        have aspirations to one day get a ✈️ license and learn to sail⛵.
      </p>
    </motion.section>
  );
}
