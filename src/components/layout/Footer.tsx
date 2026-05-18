import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { meta, socialLinks } from "@/data/meta";

const iconMap = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Email: Mail };

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {meta.name}
        </p>
        <div className="flex items-center gap-4">
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
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
