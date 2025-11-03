import { Link } from "@tanstack/react-router";
import { afrifoodsProfile } from "@/constants/resource";

const Hero = () => (
  <section className="px-4 py-24 md:px-8 md:py-32">
    <div className="container mx-auto">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl">
          {afrifoodsProfile.companyName}
        </h1>
        <p className="mb-4 text-muted-foreground text-xl md:text-2xl">
          {afrifoodsProfile.vision}
        </p>
        <p className="mb-8 text-lg text-muted-foreground">
          {afrifoodsProfile.mission}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90 focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
            to="/"
          >
            Contact Us
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
            to="/about"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
