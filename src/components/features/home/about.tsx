import { afrifoodsProfile } from "@/constants/resource";

const About = () => (
  <section className="px-4 py-16 md:px-8 md:py-24" id="about">
    <div className="container mx-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center font-bold text-3xl md:text-4xl">
          About Us
        </h2>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            {afrifoodsProfile.about.description}
          </p>
          <p className="leading-relaxed">{afrifoodsProfile.about.structure}</p>
          <p className="leading-relaxed">{afrifoodsProfile.about.coreFocus}</p>
          <p className="leading-relaxed">
            {afrifoodsProfile.about.specificInterventions}
          </p>
          <div className="mt-8 rounded-lg border bg-card p-6">
            <p className="text-muted-foreground text-sm">
              <span className="font-medium text-foreground">
                Registered in:
              </span>{" "}
              {afrifoodsProfile.registration.location},{" "}
              {afrifoodsProfile.registration.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
