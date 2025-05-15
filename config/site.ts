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
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  links: {
    github: "https://github.com/tolacomplex",
    facebook: "https://web.facebook.com/Ouentola",
    telegram: "@tola_ouen",
    linkendin: "https://www.linkedin.com/in/ouen-tola-292041339/",
    vercel: "https://vercel.com/tolacomplexs-projects/front-end-dev/deployments"
  },
};
