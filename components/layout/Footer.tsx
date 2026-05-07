import React from "react";
import { Section } from "./Section";
import Link from "next/link";
import { Mail, Code, X, Briefcase } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-outline/10 mt-auto">
      <Section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="headline-lg mb-6">Let's build something iconic.</h2>
            <p className="body-lg text-primary/60 mb-8 max-w-md">
              Open for select freelance projects and architectural consulting.
            </p>
            <a
              href="mailto:hello@devportfolio.com"
              className="headline-md font-bold text-secondary hover:underline underline-offset-8"
            >
              hello@devportfolio.com
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-6">
              <Link href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Briefcase size={24} />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors" aria-label="GitHub">
                <Code size={24} />
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors" aria-label="X (Twitter)">
                <X size={24} />
              </Link>
            </div>
            <div className="flex gap-8 text-primary/40 label-sm uppercase">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <span>© 2026 ALEX RIVERA</span>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};
