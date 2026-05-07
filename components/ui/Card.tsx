import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card = ({
  children,
  className,
  glass = true,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-container)] p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl",
        glass ? "glassmorphism" : "bg-white border border-outline/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
