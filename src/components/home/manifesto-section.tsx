import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/shared/section-shell";

export function ManifestoSection() {
  return (
    <SectionShell tone="leaf">
      <Reveal preset="scale">
        <div className="story-gradient overflow-hidden rounded-[36px] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <Badge>Approach</Badge>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">
            A clearer way to build healthier habits every day
          </h2>
          <p className="mt-8 max-w-3xl text-pretty text-lg leading-9 text-[#45605a] sm:text-xl">
            Better routines start with practical decisions: taking care of your
            energy, understanding what supports you and choosing options that
            fit your lifestyle more naturally.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
