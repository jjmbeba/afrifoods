import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { afrifoodsProfile } from "@/constants/resource";

const SampleProjects = () => {
  const { sampleProjects } = afrifoodsProfile;

  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Sample Projects
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A selection of our past projects showcasing our expertise and
              impact
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sampleProjects.map((project) => (
              <div
                className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md"
                key={`${project.title}-${project.client}`}
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Briefcase className="size-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-semibold text-lg">
                      {project.title}
                    </h3>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Building2 className="size-4 shrink-0" />
                        <span>
                          <span className="font-medium text-foreground">
                            Client:
                          </span>{" "}
                          {project.client}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4 shrink-0" />
                        <span>
                          <span className="font-medium text-foreground">
                            Period:
                          </span>{" "}
                          {project.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4 shrink-0" />
                        <span>
                          <span className="font-medium text-foreground">
                            Location:
                          </span>{" "}
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleProjects;
