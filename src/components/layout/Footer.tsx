import { meta } from "@/data/meta";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-5 flex flex-col items-center gap-1">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {meta.name}
        </p>
        <p className="text-xs text-muted-foreground/60">
          Designed and developed by Himanshu Maithani
        </p>
      </div>
    </footer>
  );
}
