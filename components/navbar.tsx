"use client";
import {
  Navbar as NavbarPortfolio,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, FacebookIcon, TelegramIcon } from "@/components/icons";
import { Avatar } from "@heroui/avatar";
import React from "react";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const pathname = usePathname();
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skill" },
    { label: "Project", href: "/project" },
  ];
  return (
    <header>
      <NavbarPortfolio
        onMenuOpenChange={setIsOpenMenu}
        className="fixed"
      >
        {/* Mobile menu toggle */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isOpenMenu ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* Profile Avatar */}
        <NavbarBrand className="flex justify-start relative right-[10px] sm:right-[200px] md:right-[280px] lg:right-[350px]">
          <Link href="/">
            <Avatar
              isBordered
              color="success"
              radius="full"
              title="profile"
              src="ouentola.jpg"
            />
          </Link>
        </NavbarBrand>

        {/* Desktop nav links */}
        <NavbarContent className="hidden sm:flex gap-6 justify-center">
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="foreground" href="/skill">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="foreground" href="/project">
              Project
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Social Icons + Theme Switch */}
        <NavbarContent className="flex gap-6 justify-center lg:relative lg:left-[200px]">
          <NavbarItem isActive className="flex gap-6">
            <Link isExternal href={siteConfig.links.github} title="Github">
              <GithubIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.facebook} title="Facebook">
              <FacebookIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.telegram} title="Telegram">
              <TelegramIcon className="text-default-500 relative top-[2px]" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
        {/* Mobile Menu */}
        <NavbarMenu>
          {items.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="w-full font-bold capitalize"
                color={pathname === item.href ? "primary" : "foreground"}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarPortfolio>
    </header>
  );
};
