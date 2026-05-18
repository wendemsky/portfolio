import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buttonVariants } from "@/components/ui/button";
import { meta, socialLinks } from "@/data/meta";
import { cn } from "@/lib/utils";

const iconMap = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Email: Mail };

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader
            title="Get in Touch"
            subtitle="Open to full-time opportunities from mid-2026. Feel free to reach out."
          />
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${meta.email}`}
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              <Mail size={16} />
              Send Email
            </a>
            <div className="flex items-center gap-5">
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
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon size={18} />
                      {link.platform}
                    </a>
                  );
                })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
