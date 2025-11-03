import { Link } from "@tanstack/react-router";
import { Menu, SproutIcon } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Logo = () => (
  <Link className="flex items-center gap-3" to="/">
    <SproutIcon />
    <span className="font-bold text-xl">Afrifoods</span>
  </Link>
);

const Navbar = () => {
  const { isMobile } = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-3 md:px-8">
      <Logo />
      {isMobile ? (
        <Sheet onOpenChange={setIsMobileMenuOpen} open={isMobileMenuOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md p-2 font-medium text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
            tabIndex={0}
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]" side="right">
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.to}>
                  <NavLink
                    className="py-2 text-lg"
                    onClick={handleCloseMobileMenu}
                    title={link.title}
                    to={link.to}
                  />
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex-wrap">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.to}>
                <NavigationMenuLink asChild>
                  <NavLink title={link.title} to={link.to} />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </nav>
  );
};

type NavLinkProps = {
  to: string;
  title?: string;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({ to, title, className, onClick }: NavLinkProps) => (
  <Link
    activeProps={{
      className: "text-primary font-bold",
    }}
    className={cn(navigationMenuTriggerStyle(), className)}
    onClick={onClick}
    to={to}
  >
    {title || to}
  </Link>
);

export default Navbar;
