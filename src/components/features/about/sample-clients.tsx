import { Building2, Globe, Handshake, Landmark } from "lucide-react";
import { afrifoodsProfile } from "@/constants/resource";

const SampleClients = () => {
  const { sampleClients } = afrifoodsProfile;

  const clientCategories = [
    {
      icon: Globe,
      title: "Multilateral Agencies",
      clients: sampleClients.multilateralAgencies,
    },
    {
      icon: Building2,
      title: "International Organizations",
      clients: sampleClients.international,
    },
    {
      icon: Handshake,
      title: "Non-Government Organizations",
      clients: sampleClients.nonGovernment,
    },
    {
      icon: Landmark,
      title: "Public Sector",
      clients: sampleClients.publicSector,
    },
  ];

  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">Our Clients</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We work with a diverse range of partners across different sectors
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {clientCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  className="rounded-lg border bg-card p-6"
                  key={category.title}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.clients.map((client) => (
                      <li
                        className="flex items-center gap-2 text-muted-foreground"
                        key={client}
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleClients;
