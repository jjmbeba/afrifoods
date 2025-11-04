import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { afrifoodsProfile } from "@/constants/resource";

const Hero = () => (
  // <section className="px-4 py-24 md:px-8 md:py-32">
  //   <div className="container mx-auto">
  //     <div className="mx-auto max-w-4xl text-center">
  //       <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl">
  //         {afrifoodsProfile.companyName}
  //       </h1>
  //       <p className="mb-4 text-muted-foreground text-xl md:text-2xl">
  //         {afrifoodsProfile.vision}
  //       </p>
  //       <p className="mb-8 text-lg text-muted-foreground">
  //         {afrifoodsProfile.mission}
  //       </p>
  //       <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
  //         <Link
  //           className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90 focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
  //           to="/"
  //         >
  //           Contact Us
  //         </Link>
  //         <Link
  //           className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
  //           to="/about"
  //         >
  //           Learn More
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  <section className="px-4 py-32 md:px-8">
    <div className="container">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge variant="outline">
            {afrifoodsProfile.registration.type}
            <ArrowUpRight className="ml-2 size-4" />
          </Badge>
          <h1 className="my-6 text-pretty font-bold text-4xl lg:text-6xl">
            {afrifoodsProfile.companyName}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {afrifoodsProfile.vision}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button asChild className="w-full sm:w-auto">
              <a href="mailto:info@afrifoodskenya.com">Contact Us</a>
            </Button>

            <Button asChild className="w-full sm:w-auto" variant="outline">
              <Link to="/about">
                Learn More
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="h-96 w-full rounded-md bg-muted-foreground object-cover" />
      </div>
    </div>
  </section>
);

export default Hero;
