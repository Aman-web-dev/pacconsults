"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Instagram, Youtube, Linkedin, Rss } from "lucide-react"; // Rss for TikTok, as TikTok icon is not directly available in lucide-react

export function PublicNav() {
  const pathname = usePathname() || "";

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/book-a-call", label: "Book a Call" },
    { href: "/become-a-affiliate", label: "Affiliate" },
    { href: "/blogs", label: "Blogs" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/phillythebroker/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://youtube.com/@pacconsults?si=vDMICM32uagz8_LD",
      icon: Youtube,
      label: "YouTube",
    },
    {
      href: "https://www.linkedin.com/in/phillip-crawford?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.tiktok.com/@p.a.cconsulting",
      icon: Rss,
      label: "TikTok",
    }, // Using Rss as a placeholder for TikTok
  ];

  // hide the public admin/login button when we're inside the admin area
  const hideAdmin = pathname.includes("/admin");

  return (
    <nav className={`bg-none text-white ${!hideAdmin && "p-3"}`}>
      {hideAdmin ? null : (
        <div className="container mx-auto m-4 flex justify-between items-center">
             <Link href="/" className="text-2xl font-bold flex items-center">
          <Image
            src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/16380205/992846_34707.png"
            alt="PAC Consultants Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="hidden sm:inline">PAC Consultants</span>
        </Link>
          <div className="space-x-4">
            {/* Main Navigation Links */}
            <div className="space-x-4 hidden md:flex">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`text-white hover:bg-gray-700 ${
                      pathname === link.href ? "bg-gray-700" : ""
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="flex space-x-3 mr-4 mt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>

              <Link href="/login" passHref>
                <Button
                  variant="secondary"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
