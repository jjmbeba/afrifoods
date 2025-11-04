import { GraduationCap, User } from "lucide-react";
import { afrifoodsProfile } from "@/constants/resource";

const KeyStaff = () => {
  const { keyStaff } = afrifoodsProfile;

  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Our Key Staff
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet our team of experienced specialists dedicated to driving
              business development and technical solutions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyStaff.map((staff) => (
              <div
                className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md"
                key={staff.name}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <User className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{staff.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {staff.role}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <GraduationCap className="mt-1 size-4 shrink-0 text-muted-foreground" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {staff.qualifications}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyStaff;
