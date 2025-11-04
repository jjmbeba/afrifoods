# Afrifoods Limited Website

Official website for Afrifoods Limited - a business development company providing sustainable business and technical solutions to enhance value chains productivity, connectivity, financing and access to markets.

## About Afrifoods Limited

Afrifoods Limited is a business development company registered under the company acts of Kenya in December 2015. The company focuses on providing both business and technical solutions that enhance value chains productivity, connectivity, financing and access to markets, with tailored interventions towards enhanced resilience to climate change, sustainable business development models and economic empowerment of youth and women.

**Vision:** Reputable service provider of both sustainable business development and technical solutions

**Mission:** To enhance capacities of entrepreneurs and actors within their business ecosystem through provision of both business development and technical development solutions for enhanced productivity and sustainable integration.

### Contact Information

- **CEO:** Dr. Jimmy Mutunga
- **Website:** www.afrifoodskenya.com
- **Email:** info@afrifoodskenya.com, ceo@afrifoodskenya.com
- **Mobile:** +254722957416

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended package manager and runtime)

### Installation

Install dependencies:

```bash
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`

### Building For Production

Build the application for production:

```bash
bun run build
```

### Preview Production Build

Preview the production build locally:

```bash
bun run serve
```

### Testing

Run tests using Vitest:

```bash
bun run test
```

## Tech Stack

- **Framework:** [TanStack Router](https://tanstack.com/router) (file-based routing)
- **UI Library:** [React](https://react.dev/) 19.2
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Testing:** [Vitest](https://vitest.dev/)
- **Code Quality:** [Biome](https://biomejs.dev/) (formatter & linter)

## Project Structure

```
src/
├── components/
│   ├── features/
│   │   ├── about/          # About page components
│   │   ├── common/         # Shared components (navbar, footer)
│   │   └── home/           # Home page components
│   └── ui/                 # Shadcn UI components
├── constants/
│   └── resource.ts         # Company profile data
├── routes/
│   ├── __root.tsx          # Root layout
│   ├── index.tsx           # Home page
│   └── about.tsx           # About page
└── styles.css              # Global styles and Tailwind config
```

## Adding UI Components

This project uses Shadcn UI. To add new components:

```bash
pnpx shadcn@latest add [component-name]
```

For example:

```bash
pnpx shadcn@latest add button
pnpx shadcn@latest add card
```

## Routing

This project uses TanStack Router with file-based routing. Routes are managed as files in `src/routes`.

### Adding a Route

Create a new file in `src/routes/` directory:

```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/your-route")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Your Route Content</div>;
}
```

### Navigation

Use the `Link` component for SPA navigation:

```tsx
import { Link } from "@tanstack/react-router";

<Link to="/about">About</Link>
```

The root layout is located in `src/routes/__root.tsx` and includes the navbar and footer components.

## Data Management

Company profile data is stored in `src/constants/resource.ts` and exported as `afrifoodsProfile`. Components import this data directly:

```tsx
import { afrifoodsProfile } from "@/constants/resource";
```

## Styling

This project uses Tailwind CSS v4 with custom design tokens. Global styles and theme configuration are in `src/styles.css`.

### Customization

- Color scheme: Defined in CSS variables (supports light/dark mode)
- Typography: Uses Outfit font family
- Spacing: Tailwind default spacing scale
- Shadows: Custom shadow scale defined in CSS variables

## Scripts

- `dev` - Start development server (port 3000)
- `build` - Build for production
- `serve` - Preview production build
- `test` - Run tests with Vitest
- `prepare` - Husky git hooks setup

## Learn More

- [TanStack Router Documentation](https://tanstack.com/router)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com/docs/components)
- [React Documentation](https://react.dev)
