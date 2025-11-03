import { Heart, Leaf, Lightbulb, Scale, Users } from "lucide-react";
import { afrifoodsProfile } from "@/constants/resource";

const valueIcons: Record<string, typeof Heart> = {
  "Customer Satisfaction": Heart,
  "Staff Improvement": Users,
  Innovation: Lightbulb,
  "Sustainable Environmental (ENVIRONMENTAL SUSTAINABILITY)": Leaf,
  Gender: Scale,
};

const CoreValues = () => (
  <section className="bg-muted px-4 py-16 md:px-8 md:py-24">
    <div className="container mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-bold text-3xl md:text-4xl">Our Core Values</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          The principles that guide our work and define our commitment to
          excellence
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {afrifoodsProfile.coreValues.map((value) => {
          const Icon = valueIcons[value.name] ?? Heart;
          return (
            <div className="rounded-lg border bg-card p-6" key={value.name}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{value.name}</h3>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CoreValues;
