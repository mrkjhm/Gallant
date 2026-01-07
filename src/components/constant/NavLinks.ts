type RemixIcon =
  | "ri-home-4-line"
  | "ri-contacts-line"
  | "ri-info-i"
  | "ri-chat-settings-line";

interface NavLinks {
  name: string;
  href: string;
  icon: RemixIcon;
}

export const NavLinks: NavLinks[] = [
  { name: "Home", href: "/", icon: "ri-home-4-line" },
  { name: "About", href: "/about", icon: "ri-info-i" },
  { name: "Services", href: "/services", icon: "ri-chat-settings-line" },
  { name: "Contact", href: "/contact-us", icon: "ri-contacts-line" },
];
