import { Building2, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { afrifoodsProfile } from "@/constants/resource";

const AboutHero = () => (
  <section className="px-4 py-16 md:px-8 md:py-24">
    <div className="container mx-auto">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <Badge className="mb-4" variant="outline">
            <Building2 className="mr-2 size-4" />
            {afrifoodsProfile.registration.type}
          </Badge>
          <h1 className="mb-6 font-bold text-4xl md:text-5xl">
            {afrifoodsProfile.companyName}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{afrifoodsProfile.registration.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>{afrifoodsProfile.registration.date}</span>
            </div>
          </div>
        </div>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            {afrifoodsProfile.about.description}
          </p>
          <p className="leading-relaxed">{afrifoodsProfile.about.structure}</p>
          <p className="leading-relaxed">{afrifoodsProfile.about.coreFocus}</p>
          <p className="leading-relaxed">
            {afrifoodsProfile.about.specificInterventions}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
