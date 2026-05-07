"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, HelpCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for auth logic
    router.push("/admin/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <Section containerClassName="max-w-md px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-12 flex flex-col gap-8 shadow-2xl shadow-primary/5">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="headline-md">Admin Access</h1>
              <p className="body-md text-primary/40">
                Secure gateway for DevPortfolio
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <Input 
                label="Username or Email" 
                placeholder="developer@portfolio.com"
                required
              />
              <Input 
                label="Password" 
                type="password" 
                placeholder="••••••••"
                required
              />
              
              <Button type="submit" variant="primary" className="w-full mt-2">
                Sign In
              </Button>
            </form>

            <div className="flex justify-center">
              <Link 
                href="#" 
                className="label-sm text-secondary hover:underline underline-offset-4"
              >
                Forgot credentials?
              </Link>
            </div>

            <div className="pt-8 border-t border-outline/10 flex flex-col gap-4">
              <p className="label-sm text-center text-primary/20 leading-relaxed">
                © 2024 Developer Portfolio. Built with precision and technical excellence.
              </p>
              <div className="flex justify-center gap-6">
                <Link href="#" className="flex items-center gap-2 label-sm text-primary/40 hover:text-primary transition-colors">
                  <HelpCircle size={14} />
                  Help
                </Link>
                <Link href="#" className="flex items-center gap-2 label-sm text-primary/40 hover:text-primary transition-colors">
                  <Shield size={14} />
                  Privacy
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
