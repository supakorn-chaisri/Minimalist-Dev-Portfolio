"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="p-8 flex flex-col gap-2 hover:border-secondary/20 transition-all">
        <span className="label-sm uppercase tracking-widest text-primary/40">
          {label}
        </span>
        <span className="display-xl text-[32px] md:text-[48px] font-bold">
          {value}
        </span>
      </Card>
    </motion.div>
  );
};
