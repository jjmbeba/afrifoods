import {
  Briefcase,
  Building2,
  Code,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { afrifoodsProfile } from "@/constants/resource";

const serviceIcons: Record<string, typeof Briefcase> = {
  "Organizational and brand development": Building2,
  "Development of ICT based business solutions": Code,
  "Project cycle management": Target,
  "Linkage to Market and finance": Handshake,
  "Provision of Food safety and food security solutions": ShieldCheck,
  "Business mentorship and coaching": Users,
  "Human resource development": Briefcase,
  "Apprenticeship; Incubation and job placement": GraduationCap,
};

const Services = () => (
  <section className="bg-muted px-4 py-16 md:px-8 md:py-24" id="services">
    <div className="container mx-auto">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-bold text-3xl md:text-4xl">Our Services</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Comprehensive business and technical solutions to enhance your value
          chain productivity and market access
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {afrifoodsProfile.services.map((service) => {
          const Icon = serviceIcons[service] ?? Briefcase;
          return (
            <div
              className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md"
              key={service}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-lg">{service}</h3>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
