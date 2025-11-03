import { afrifoodsProfile } from "@/constants/resource";

const Impact = () => (
  <section className="px-4 py-16 md:px-8 md:py-24" id="impact">
    <div className="container mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-bold text-3xl md:text-4xl">Our Impact</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Measurable results that demonstrate our commitment to sustainable
          business development
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {afrifoodsProfile.impact.map((item) => (
          <div
            className="rounded-lg border bg-card p-6 text-center"
            key={item.metric}
          >
            <div className="mb-2 font-bold text-3xl text-primary md:text-4xl">
              {item.value}
            </div>
            <h3 className="mb-2 font-semibold text-lg">{item.metric}</h3>
            {item.details && (
              <p className="text-muted-foreground text-sm">{item.details}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-lg border bg-muted p-6 text-center">
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">Counties Served:</span>{" "}
          {afrifoodsProfile.engagementSummary.countyPresence} counties across{" "}
          {afrifoodsProfile.engagementSummary.regionalFootprint} regions
        </p>
      </div>
    </div>
  </section>
);

export default Impact;
