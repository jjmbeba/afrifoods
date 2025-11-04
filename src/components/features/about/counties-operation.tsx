import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { afrifoodsProfile } from "@/constants/resource";

const CountiesOperation = () => {
  const { countiesOfOperation } = afrifoodsProfile;

  return (
    <section className="bg-muted px-4 py-16 md:px-8 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Counties of Operation
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We have established a strong presence across multiple counties in
              Kenya
            </p>
          </div>
          <div className="rounded-lg border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">
                {countiesOfOperation.length} Counties
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {countiesOfOperation.map((county) => (
                <Badge
                  className="px-4 py-1.5 text-sm"
                  key={county}
                  variant="outline"
                >
                  {county}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountiesOperation;
