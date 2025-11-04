import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { afrifoodsProfile } from "@/constants/resource";

const Hero = () => (
  <section className="px-4 py-24 md:px-8 md:py-32">
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
        <img
          alt="Afrifoods Limited"
          className="max-h-96 w-full rounded-md bg-muted-foreground object-cover"
          height={500}
          src="/hero.webp"
          width={500}
        />
      </div>
    </div>
  </section>
);

export default Hero;
