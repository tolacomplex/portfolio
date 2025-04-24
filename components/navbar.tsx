import {
  Navbar as NavbarPortfolio,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  FacebookIcon,
  TelegramIcon,
  SearchIcon,
  Profile,
} from "@/components/icons";
import { Avatar } from "@heroui/avatar";
export const Navbar = () => {
  return (
    <header className="bg-gradient-to-tr from-[#52c0c4] to-[#12EB8E]">
      {/* Navbar portfolion project */}
      <NavbarPortfolio maxWidth="xl" position="sticky">
        {/* Navbar menu  */}
        <NavbarContent
          className="basis-1/5 sm:basis-full mr-[-40px]"
          justify="start"
        >
          <NavbarMenuToggle className="sm:hidden pr-0"></NavbarMenuToggle>
        </NavbarContent>
        {/* Profile portfolio */}
        <NavbarBrand className="gap-3 max-w-fit ml-[-10px]">
          <Avatar title="profile" src="ouentola.jpg" />
        </NavbarBrand>
        <NavbarContent className="basis-1/5 sm:basis-full p-0">
          <div className="hidden sm:flex sm:gap-6 md:flex md:gap-6 lg:flex lg:gap-7 gap-7 lg:items-start">
            <NavbarItem isActive>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link color="foreground" href="/about">
                About
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link color="foreground" href="/skill">
                Skills
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link color="foreground" href="/project">
                Project
              </Link>
            </NavbarItem>
          </div>
        </NavbarContent>
        {/* Icon navbar display */}
        <NavbarContent className="basis-1/5 sm:basis-full">
          <NavbarItem
            isActive
            className="lg:flex lg:gap-7 md:flex md:gap-7 sm:flex sm:gap-7 flex gap-6 lg:ml-[-50px]"
          >
            {/* Github icon navbar display on header */}
            <Link isExternal href={siteConfig.links.github} title="Github">
              {<GithubIcon className="text-default-500" />}
            </Link>
            {/* Github icon navbar display on header */}
            <Link isExternal href={siteConfig.links.facebook} title="Facebook">
              {<FacebookIcon className="text-default-500" />}
            </Link>
            {/* Github icon navbar display on header */}
            <Link isExternal href={siteConfig.links.telegram} title="Telegram">
              {<TelegramIcon className="text-default-500 relative top-[2px]" />}
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </NavbarPortfolio>
    </header>
  );
};
