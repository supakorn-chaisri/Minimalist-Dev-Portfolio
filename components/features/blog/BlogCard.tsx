"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
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

export const BlogCard = ({ title, excerpt, date, slug }: BlogCardProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Link href={`/blog/${slug}`} className="block">
        <Card className="flex flex-col gap-4 p-8 md:p-12 hover:border-secondary/20 transition-all group">
          <div className="flex justify-between items-center">
            <span className="label-sm uppercase tracking-widest text-primary/40">
              {date}
            </span>
            <ArrowRight 
              size={20} 
              className="text-secondary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" 
            />
          </div>
          
          <div>
            <h3 className="headline-md mb-4 group-hover:text-secondary transition-colors">
              {title}
            </h3>
            <p className="body-lg text-primary/60 line-clamp-2">
              {excerpt}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
