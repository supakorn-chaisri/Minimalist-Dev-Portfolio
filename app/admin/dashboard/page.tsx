"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { StatCard } from "@/components/features/admin/StatCard";
import { ArticleRow } from "@/components/features/admin/ArticleRow";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Articles", value: "42" },
  { label: "Total Views", value: "12.8k" },
  { label: "Drafts", value: "5" },
  { label: "Avg. Read Time", value: "6m" },
];

const articles = [
  {
    title: "The Future of Concurrent Rendering in React 19",
    category: "Front-end",
    readTime: "8 min read",
  },
  {
    title: "Architecting Scalable Microservices with Rust",
    category: "Systems",
    readTime: "12 min read",
  },
  {
    title: "Understanding the V8 Engine Optimization Pipeline",
    category: "JavaScript",
    readTime: "15 min read",
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

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Section>
          <motion.div 
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-xl mb-4">Article Management</h1>
            <p className="body-lg text-primary/60 max-w-2xl">
              Maintain and oversee your technical writing. Monitor engagement metrics and publish new insights to your developer community.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-md">Recent Articles</h2>
            <motion.div 
              className="flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {articles.map((article) => (
                <ArticleRow key={article.title} {...article} />
              ))}
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
