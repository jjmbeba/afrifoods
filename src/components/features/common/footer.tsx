import { afrifoodsProfile } from "@/constants/resource";

type MenuItem = {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
};

type FooterProps = {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
};

const Footer = ({
  tagline = afrifoodsProfile.vision,
  menuItems = [
    {
      title: "Services",
      links: [
        { text: "Business Mentorship", url: "#services" },
        { text: "Market & Finance Linkage", url: "#services" },
        { text: "Food Safety Solutions", url: "#services" },
      ],
    },
    {
      title: "Company",
      links: [{ text: "About Us", url: "#about" }],
    },
    {
      title: "Contact",
      links: [
        {
          text: "Email Us",
          url: `mailto:${afrifoodsProfile.contact.email[0]}`,
        },
        { text: "Call Us", url: `tel:${afrifoodsProfile.contact.mobile}` },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} ${afrifoodsProfile.companyName}. All rights reserved.`,
  bottomLinks = [
    { text: "Terms and Conditions", url: "#terms" },
    { text: "Privacy Policy", url: "#privacy" },
  ],
}: FooterProps) => (
  <section className="px-4 py-32 md:px-8">
    <div className="container">
      <footer>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2 mb-8 lg:mb-0">
            <h2 className="mt-4 font-bold text-2xl">
              {afrifoodsProfile.companyName}
            </h2>
            <p className="mt-2 text-muted-foreground">{tagline}</p>
            <div className="mt-6 space-y-2 text-muted-foreground text-sm">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  className="underline hover:text-primary"
                  href={`mailto:${afrifoodsProfile.contact.email[0]}`}
                >
                  {afrifoodsProfile.contact.email[0]}
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a
                  className="underline hover:text-primary"
                  href={`tel:${afrifoodsProfile.contact.mobile}`}
                >
                  {afrifoodsProfile.contact.mobile}
                </a>
              </p>
              <p>
                <span className="font-medium">Website:</span>{" "}
                <a
                  className="underline hover:text-primary"
                  href={`https://${afrifoodsProfile.contact.website}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {afrifoodsProfile.contact.website}
                </a>
              </p>
              <p className="mt-4 text-xs">
                <span className="font-medium">Location:</span>{" "}
                {afrifoodsProfile.registration.location}
              </p>
            </div>
          </div>
          {menuItems.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-muted-foreground">
                {section.links.map((link) => (
                  <li className="font-medium hover:text-primary" key={link.url}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 font-medium text-muted-foreground text-sm md:flex-row md:items-center">
          <p>{copyright}</p>
          <ul className="flex gap-4">
            {bottomLinks.map((link) => (
              <li className="underline hover:text-primary" key={link.url}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  </section>
);

export default Footer;
