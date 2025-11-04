import { Globe, GraduationCap, Handshake, MapPin, Users } from "lucide-react";
import { afrifoodsProfile } from "@/constants/resource";

const EngagementSummary = () => {
  const { engagementSummary } = afrifoodsProfile;

  const metrics = [
    {
      icon: Users,
      label: "Total Headcount",
      value: engagementSummary.totalHeadcount,
    },
    {
      icon: Handshake,
      label: "Donors Supported",
      value: `${engagementSummary.donorsSupportedSince2015} since 2015`,
    },
    {
      icon: MapPin,
      label: "County Presence",
      value: engagementSummary.countyPresence,
    },
    {
      icon: Globe,
      label: "Regional Footprint",
      value: engagementSummary.regionalFootprint,
    },
    {
      icon: GraduationCap,
      label: "Staff Qualifications",
      value: engagementSummary.staffQualifications,
    },
  ];

  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Our Engagement Summary
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Key metrics showcasing our reach and impact across Kenya and
              beyond
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md"
                  key={metric.label}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-lg">{metric.label}</h3>
                  <p className="font-bold text-2xl text-muted-foreground">
                    {metric.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSummary;
