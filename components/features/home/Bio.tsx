"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export const Bio = () => {
  return (
    <Section className="bg-surface-container/30 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="headline-lg mb-8">Precision System Design.</h2>
          <div className="space-y-6 text-primary/70">
            <p className="body-lg">
              As a seasoned developer, I bridge the gap between complex backend
              infrastructure and pixel-perfect frontends. My philosophy centers
              on "Hardware-as-Software"—ensuring every interaction feels as
              tactile and responsive as a physical device.
            </p>
            <p className="body-lg">
              With over 8 years of experience, I've led engineering teams at
              scale, focusing on Go-based microservices, .NET enterprise
              solutions, and React-based design systems.
            </p>
          </div>
        </motion.div>

        <div className="relative h-[400px] md:h-[600px] w-full">
          <motion.div
            className="absolute top-0 right-0 w-[85%] h-[85%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="w-full h-full flex items-center justify-center p-0 overflow-hidden">
              <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                <span className="label-sm text-primary/20">System Architecture Viz</span>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            className="absolute bottom-0 left-0 w-[60%] h-[40%]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "backOut" }}
          >
            <Card glass className="w-full h-full flex flex-col justify-center gap-2">
              <span className="headline-md text-secondary">8+ Years</span>
              <span className="label-sm uppercase tracking-widest opacity-50">Experience</span>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
