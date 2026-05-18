import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeader title="About" />
          <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Software Engineer currently pursuing a Master of Computing (Computer
              Science) at the National University of Singapore, while working as a Technology
              Solutions Intern at SATS Ltd.
            </p>
            <p>
              With 2+ years of experience at Fidelity Investments and Samsung R&D, I&apos;ve built
              production backend services, data pipelines, and full-stack applications. My work
              spans microservices architecture (Spring Boot, FastAPI, Node.js), data engineering
              (Python, PySpark), and AI-integrated systems using multi-agent frameworks across AWS,
              Azure, and GKE.
            </p>
            <p>
              I&apos;m particularly interested in distributed systems, backend infrastructure, and
              applied AI — and open to full-time opportunities from mid-2026.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
