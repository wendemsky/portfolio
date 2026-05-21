"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { buttonVariants } from "@/components/ui/button";
import { meta, socialLinks } from "@/data/meta";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { cn } from "@/lib/utils";

const iconMap = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Email: Mail };

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <NetworkBackground />
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{meta.name}</h1>
          <p className="font-mono text-sm text-muted-foreground tracking-wide mb-8">
            {meta.tagline}
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            {meta.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={meta.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.platform as keyof typeof iconMap];
              return (
                <a
                  key={link.platform}
                  href={link.href}
                  target={link.platform !== "Email" ? "_blank" : undefined}
                  rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={link.ariaLabel}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
