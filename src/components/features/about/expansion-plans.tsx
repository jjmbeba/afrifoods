import { Globe, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { afrifoodsProfile } from "@/constants/resource";

const ExpansionPlans = () => {
  const { expansionPlans } = afrifoodsProfile;

  return (
    <section className="bg-muted px-4 py-16 md:px-8 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Expansion Plans
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our vision for regional growth and expanded market reach
            </p>
          </div>
          <div className="space-y-8">
            <div className="rounded-lg border bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Rationale</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {expansionPlans.rationale}
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">
                  Target Countries for Expansion
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {expansionPlans.targetCountries.map((country) => (
                  <Badge
                    className="px-4 py-1.5 text-sm"
                    key={country}
                    variant="outline"
                  >
                    {country}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpansionPlans;
