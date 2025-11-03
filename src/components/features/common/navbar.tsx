import { Link } from "@tanstack/react-router";
import { SproutIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Logo = () => (
  <Link className="flex items-center gap-3" to="/">
    <SproutIcon />
    <span className="font-bold text-xl">Afrifoods</span>
  </Link>
);

const Navbar = () => {
  const { isMobile } = useIsMobile();

  return (
    <nav className="flex items-center justify-between px-8 py-3">
      <Logo />
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink title="Home" to="/" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink title="About" to="/about" />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

type NavLinkProps = {
  to: string;
  title?: string;
};

const NavLink = ({ to, title }: NavLinkProps) => (
  <Link
    activeProps={{
      className: "text-primary font-bold",
    }}
    className={navigationMenuTriggerStyle()}
    to={to}
  >
    {title || to}
  </Link>
);

export default Navbar;
