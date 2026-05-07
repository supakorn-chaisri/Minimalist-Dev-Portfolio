"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <Section className="min-h-[90vh] flex items-center pt-32 md:pt-0">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-sm uppercase tracking-[0.3em] text-secondary mb-6 block">
            Alex Rivera — Senior Architect
          </span>
          <h1 className="display-xl mb-8 leading-tight">
            Building the future, one line of code at a time.
          </h1>
          <p className="body-lg text-primary/60 mb-12 max-w-2xl">
            Senior Full-stack Engineer specializing in high-performance
            distributed systems and elegant user interfaces. Architecting
            solutions with precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">View Works</Button>
            <Button variant="ghost" size="lg">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
