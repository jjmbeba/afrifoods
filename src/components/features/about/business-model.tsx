import { Building2, Network, Users } from "lucide-react";
import { afrifoodsProfile } from "@/constants/resource";

const BusinessModel = () => {
  const { businessModel } = afrifoodsProfile;

  return (
    <section className="bg-muted px-4 py-16 md:px-8 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Our Business Model
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Understanding our approach to creating sustainable business value
            </p>
          </div>
          <div className="space-y-8">
            <div className="rounded-lg border bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Model Type</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {businessModel.type}
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Partners</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {businessModel.partners}
              </p>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Network className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Our Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {businessModel.approach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
