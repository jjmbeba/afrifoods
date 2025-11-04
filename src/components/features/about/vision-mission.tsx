import { Eye, Target } from "lucide-react";
import { afrifoodsProfile } from "@/constants/resource";

const VisionMission = () => (
  <section className="bg-muted px-4 py-16 md:px-8 md:py-24">
    <div className="container mx-auto">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-bold text-3xl md:text-4xl">
          Our Vision & Mission
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl">Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {afrifoodsProfile.vision}
            </p>
          </div>
          <div className="rounded-lg border bg-card p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl">Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {afrifoodsProfile.mission}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisionMission;
