import { createFileRoute } from "@tanstack/react-router";
import About from "@/components/features/home/about";
import CoreValues from "@/components/features/home/core-values";
import CTA from "@/components/features/home/cta";
import Hero from "@/components/features/home/hero";
import Impact from "@/components/features/home/impact";
import Partners from "@/components/features/home/partners";
import Services from "@/components/features/home/services";

export const Route = createFileRoute("/")({
  component: App,
  head: () => ({
    meta: [
      {
        title: "Home Page | Afrifoods Limited",
      },
    ],
  }),
});

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Impact />
      <CoreValues />
      <Partners />
      <CTA />
    </main>
  );
}
