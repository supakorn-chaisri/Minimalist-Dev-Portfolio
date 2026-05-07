"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { BlogCard } from "@/components/features/blog/BlogCard";
import { motion } from "framer-motion";

const articles = [
  {
    title: "The Architecture of Performance: Optimizing React at Scale",
    excerpt: "An in-depth exploration of memory management, render cycles, and the subtle art of keeping web applications responsive under heavy computational load.",
    date: "Mar 24, 2024",
    slug: "architecture-of-performance",
  },
  {
    title: "Hardware-as-Software: A New Design Paradigm",
    excerpt: "Why the next generation of digital interfaces will feel more like physical tools than abstract screens. Exploring tactile UI and tonal depth.",
    date: "Feb 12, 2024",
    slug: "hardware-as-software-paradigm",
  },
  {
    title: "Minimalism as a Performance Metric",
    excerpt: "How removing visual clutter directly correlates to user task success rates and system perceived latency in modern enterprise applications.",
    date: "Jan 05, 2024",
    slug: "minimalism-performance-metric",
  },
  {
    title: "Shadows and Depth in 2D Space",
    excerpt: "Moving beyond the drop shadow. A guide to using tonal gradients and background blurs to create professional heirarchy without noise.",
    date: "Dec 18, 2023",
    slug: "shadows-and-depth",
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

export default function BlogPage() {
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
            <h1 className="display-xl mb-6">Writings</h1>
            <p className="body-lg text-primary/60 max-w-2xl">
              Thoughts on engineering, design systems, and the future of web architecture.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-8 max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {articles.map((article) => (
              <BlogCard 
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                slug={article.slug}
              />
            ))}
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
