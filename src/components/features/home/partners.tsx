import { afrifoodsProfile } from "@/constants/resource";

const Partners = () => (
  <section className="px-4 py-16 md:px-8 md:py-24" id="partners">
    <div className="container mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-bold text-3xl md:text-4xl">
          Our Partners & Donors
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Trusted by leading multilateral agencies, international organizations,
          and government institutions
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {afrifoodsProfile.donorsAndPartners.map((partner) => (
          <div
            className="rounded-lg border bg-card p-4 text-center font-medium text-sm transition-colors hover:bg-accent"
            key={partner}
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
