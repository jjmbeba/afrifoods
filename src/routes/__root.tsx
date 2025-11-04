import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Footer from "@/components/features/common/footer";
import Navbar from "@/components/features/common/navbar";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Afrifoods Limited",
        content:
          "Afrifoods Limited is a business development company registered under the company acts of Kenya in December 2015.",
      },
      {
        name: "description",
        content:
          "Afrifoods Limited is a business development company registered under the company acts of Kenya in December 2015.",
      },
      {
        name: "keywords",
        content: "Afrifoods Limited, business development, company, Kenya",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
