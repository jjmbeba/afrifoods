import { Button } from "@/components/ui/button";
import { afrifoodsProfile } from "@/constants/resource";

const AboutHero = () => (
  <section className="px-4 py-16 md:px-8 md:py-24">
    <div className="container">
      <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
        <h1 className="font-semibold text-5xl">About Us</h1>
        <p className="max-w-xl text-left text-muted-foreground">
          {afrifoodsProfile.about.description}
        </p>
      </div>
      <div className="grid gap-7 lg:grid-cols-3">
        <img
          alt="About Us"
          className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          height={620}
          src="/about-hero.webp"
          width={1000}
        />
        <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
          <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
            <div>
              <p className="mb-2 font-semibold text-lg">Afrifoods Limited</p>
              <p className="text-muted-foreground">
                {afrifoodsProfile.about.description}
              </p>
            </div>
            <Button asChild className="mr-auto" variant="outline">
              <a href={`mailto:${afrifoodsProfile.contact.email[0] ?? ""}`}>
                Get in touch
              </a>
            </Button>
          </div>
          <img
            alt="About Us"
            className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            height={620}
            src="/hero.webp"
            width={1000}
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
