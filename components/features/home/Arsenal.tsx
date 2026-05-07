"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Server, 
  Zap 
} from "lucide-react";

const skills = [
  {
    title: "Backend",
    description: "Go, .NET Core, Node.js",
    icon: <Server className="text-secondary" size={32} />,
  },
  {
    title: "Frontend",
    description: "Next.js, React, Tailwind",
    icon: <Globe className="text-secondary" size={32} />,
  },
  {
    title: "Architecture",
    description: "Microservices, gRPC, Event-driven",
    icon: <Cpu className="text-secondary" size={32} />,
  },
  {
    title: "DevOps",
    description: "Docker, Kubernetes, CI/CD",
    icon: <Zap className="text-secondary" size={32} />,
  },
  {
    title: "UI/UX",
    description: "Design Systems, Framer Motion",
    icon: <Layers className="text-secondary" size={32} />,
  },
  {
    title: "Cloud",
    description: "AWS, Azure, GCP",
    icon: <Code2 className="text-secondary" size={32} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Arsenal = () => {
  return (
    <Section>
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="headline-lg mb-4">Technical Arsenal.</h2>
        <p className="body-lg text-primary/60 max-w-xl">
          Selected tools and frameworks for modern software delivery.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.title} variants={itemVariants}>
            <Card className="flex flex-col h-full gap-6 p-10 group">
              <div className="p-4 bg-secondary/5 rounded-2xl w-fit group-hover:bg-secondary/10 transition-colors">
                {skill.icon}
              </div>
              <div>
                <h3 className="headline-md mb-2">{skill.title}</h3>
                <p className="body-md text-primary/60">{skill.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
