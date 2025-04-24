export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfolio",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Skill",
      href: "/skill",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/tolacomplex",
    facebook: "https://web.facebook.com/Ouentola",
    telegram: "@tola_ouen"
  },
};
