"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Principal Engineer",
    company: "TechFlow",
    period: "2022 - Present",
    description:
      "Leading the transition from monolithic architecture to a distributed microservices ecosystem using Go and gRPC. Reduced latency by 40% across core payment pathways.",
  },
  {
    role: "Senior Backend Dev",
    company: "CloudMatrix",
    period: "2019 - 2022",
    description:
      "Developed high-availability .NET systems processing 50k+ requests per second. Implemented robust CI/CD pipelines decreasing deployment cycles by 60%.",
  },
  {
    role: "Software Engineer",
    company: "InnovateAI",
    period: "2017 - 2019",
    description:
      "Built real-time data visualization dashboards with Next.js and WebSockets. Spearheaded the internal UI component library adoption.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const Experience = () => {
  return (
    <Section className="bg-surface-container/20 overflow-hidden">
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="headline-lg mb-4">Journey.</h2>
        <p className="body-lg text-primary/60 max-w-xl">
          Professional highlights and contributions to the tech ecosystem.
        </p>
      </motion.div>

      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            variants={itemVariants}
            className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-8 md:p-12 bg-white/50 hover:bg-white transition-all duration-500 rounded-[var(--radius-container)] border border-outline/5 hover:border-outline/10 hover:shadow-lg"
          >
            <div className="flex flex-col gap-2">
              <span className="label-sm uppercase tracking-widest text-secondary font-bold">
                {exp.period}
              </span>
              <h3 className="headline-md">{exp.role}</h3>
              <span className="body-md opacity-60">@ {exp.company}</span>
            </div>
            <div>
              <p className="body-lg leading-relaxed text-primary/80">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
