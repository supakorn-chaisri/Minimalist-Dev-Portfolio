"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Edit2, MoreVertical } from "lucide-react";

interface ArticleRowProps {
  title: string;
  category: string;
  readTime: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const ArticleRow = ({ title, category, readTime }: ArticleRowProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-surface-container/50 transition-colors">
        <div className="flex flex-col gap-1">
          <h4 className="headline-md text-lg md:text-xl group-hover:text-secondary transition-colors">
            {title}
          </h4>
          <div className="flex items-center gap-3">
            <span className="label-sm px-2 py-0.5 bg-primary/5 rounded-full text-primary/60">
              {category}
            </span>
            <span className="label-sm text-primary/40">
              {readTime}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 self-end md:self-center">
          <button className="p-2 hover:bg-secondary/10 text-primary/40 hover:text-secondary rounded-lg transition-all">
            <Edit2 size={18} />
          </button>
          <button className="p-2 hover:bg-primary/5 text-primary/40 rounded-lg transition-all">
            <MoreVertical size={18} />
          </button>
        </div>
      </Card>
    </motion.div>
  );
};
