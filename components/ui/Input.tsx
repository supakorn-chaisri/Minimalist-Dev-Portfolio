"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="label-sm uppercase tracking-widest text-primary/40">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-3 bg-surface-container/50 border border-outline/10 rounded-standard",
          "focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20",
          "placeholder:text-primary/20 body-md transition-all",
          error && "border-error focus:border-error focus:ring-error/20",
          className
        )}
        {...props}
      />
      {error && (
        <span className="label-sm text-error">
          {error}
        </span>
      )}
    </div>
  );
};
