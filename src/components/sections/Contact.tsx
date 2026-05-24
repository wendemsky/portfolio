import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buttonVariants } from "@/components/ui/button";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { meta, socialLinks } from "@/data/meta";
import { cn } from "@/lib/utils";

const iconMap = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Email: Mail };

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-muted/30 overflow-hidden">
      <NetworkBackground />
      <div className="mx-auto max-w-5xl relative">
        <AnimatedSection>
          <SectionHeader
            title="Get in Touch"
            subtitle="I build distributed systems, cloud infrastructure, and AI platforms. If you're working on challenging backend or infrastructure problems, I'd love to connect — open to full-time roles from mid-2026."
          />
          <div className="flex flex-wrap items-center gap-3 mb-16">
            <a
              href={`mailto:${meta.email}`}
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Mail size={16} />
              Send Email
            </a>
            <span className="text-muted-foreground/40 select-none" aria-hidden="true">—</span>
            <div className="flex items-center gap-3">
              {socialLinks
                .filter((l) => l.platform !== "Email")
                .map((link) => {
                  const Icon = iconMap[link.platform as keyof typeof iconMap];
                  return (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className={cn(buttonVariants({ variant: "outline", size: "default" }), "gap-2")}
                    >
                      <Icon size={16} />
                      {link.platform}
                    </a>
                  );
                })}
            </div>
          </div>
          <div className="pt-8 border-t border-border/50">
            <p className="text-xs text-muted-foreground/60">
              Designed and developed by Himanshu Maithani
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
