import { createFileRoute } from "@tanstack/react-router";
import AboutHero from "@/components/features/about/about-hero";
import BusinessModel from "@/components/features/about/business-model";
import CountiesOperation from "@/components/features/about/counties-operation";
import EngagementSummary from "@/components/features/about/engagement-summary";
import ExpansionPlans from "@/components/features/about/expansion-plans";
import KeyStaff from "@/components/features/about/key-staff";
import SampleClients from "@/components/features/about/sample-clients";
import SampleProjects from "@/components/features/about/sample-projects";
import VisionMission from "@/components/features/about/vision-mission";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "About Us | Afrifoods Limited",
      },
      {
        name: "description",
        content:
          "Learn about Afrifoods Limited - a business development company providing sustainable business and technical solutions to enhance value chains productivity, connectivity, financing and access to markets.",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main>
      <AboutHero />
      <VisionMission />
      <EngagementSummary />
      <BusinessModel />
      <KeyStaff />
      <ExpansionPlans />
      <SampleProjects />
      <CountiesOperation />
      <SampleClients />
    </main>
  );
}
