"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  demoUrl?: string;
  sourceUrl?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const ProjectCard = ({ title, description, demoUrl, sourceUrl }: ProjectCardProps) => {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="flex flex-col h-full gap-6 p-8 md:p-10 group">
        <div className="flex-grow">
          <h3 className="headline-md mb-4">{title}</h3>
          <p className="body-md text-primary/70 leading-relaxed">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-6 mt-auto pt-6 border-t border-outline/10">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 label-sm uppercase tracking-widest text-secondary hover:underline underline-offset-4 transition-all"
            >
              <ExternalLink size={16} />
              View Demo
            </a>
          )}
          {sourceUrl && (
            <a 
              href={sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 label-sm uppercase tracking-widest text-primary/60 hover:text-primary transition-all"
            >
              <Code size={16} />
              Source
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
