"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary/90",
    ghost: "bg-transparent border border-outline/20 text-primary hover:bg-primary/5",
  };

  const sizes = {
    md: "px-6 py-3 label-sm uppercase tracking-widest",
    lg: "px-8 py-4 body-md font-semibold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-[var(--radius-standard)] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
