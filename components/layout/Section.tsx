import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export const Section = ({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(
        "py-[var(--section-padding-mobile)] md:py-[var(--section-padding-desktop)] flex justify-center w-full",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full max-w-[1200px] px-[var(--gutter,24px)]",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};
