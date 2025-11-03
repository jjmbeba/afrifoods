import { afrifoodsProfile } from "@/constants/resource";

const CTA = () => (
  <section className="bg-primary px-4 py-16 md:px-8 md:py-24" id="contact">
    <div className="container mx-auto">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 font-bold text-3xl text-primary-foreground md:text-4xl">
          Get In Touch
        </h2>
        <p className="mb-8 text-lg text-primary-foreground/90">
          Let's work together to enhance your business capacity and create
          sustainable value chains
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-8 py-3 font-medium text-primary text-sm transition-colors hover:bg-primary-foreground/90 focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
            href={`mailto:${afrifoodsProfile.contact.email[0]}`}
          >
            Email Us
          </a>
          <a
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 bg-transparent px-8 py-3 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
            href={`tel:${afrifoodsProfile.contact.mobile}`}
          >
            Call Us
          </a>
        </div>
        <div className="mt-8 space-y-2 text-primary-foreground/90 text-sm">
          <p>
            <span className="font-medium">Email:</span>{" "}
            {afrifoodsProfile.contact.email[0]}
          </p>
          <p>
            <span className="font-medium">Phone:</span>{" "}
            {afrifoodsProfile.contact.mobile}
          </p>
          <p>
            <span className="font-medium">Website:</span>{" "}
            {afrifoodsProfile.contact.website}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
