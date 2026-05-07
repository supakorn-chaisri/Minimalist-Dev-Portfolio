"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/features/portfolio/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FluxEngine Core",
    description: "A low-latency distributed event streaming engine capable of processing millions of events per second with sub-millisecond persistence.",
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Nova Dashboard",
    description: "Advanced analytics platform featuring real-time data orchestration and customizable micro-frontend architecture.",
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Prism CLI",
    description: "Blazing fast command-line interface for multi-cloud resource orchestration and configuration management.",
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Cognito AI",
    description: "Lightweight computer vision model optimized for edge devices, providing real-time object classification.",
    demoUrl: "#",
    sourceUrl: "#"
  }
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

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Section>
          <motion.div 
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-xl mb-6">Portfolio</h1>
            <p className="body-lg text-primary/60 max-w-2xl">
              A collection of high-performance applications, distributed systems, and open-source contributions crafted with technical precision.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                description={project.description}
                demoUrl={project.demoUrl}
                sourceUrl={project.sourceUrl}
              />
            ))}
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
