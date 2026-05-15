import { Link } from "next-view-transitions";
import React from "react";
import HoverLink from "./HoverLink";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navItems = [
  [
    { title: "About", href: "/about" },
    { title: "Mita Realty", href: "/mita-reality" },
  ],
  [
    { title: "Marquee Projects", href: "/marquee-projects" },
    { title: "Mita Energy", href: "/mita-energy" },
  ],
  [
    { title: "Contact Us", href: "/contact" },
    { title: "Mita Steel", href: "/mita-steel" },
  ],
];

const Header = () => {
  const pathname = usePathname()

  useGSAP(() => {
    if (pathname === "/") {
      gsap.set(".header", { opacity: 0 });

      gsap.to("header", {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        delay: 3
      })
    } else {
      gsap.to(".header", { opacity: 1, duration: 0.5, ease: "power3.out", });
    }
  }, [pathname]);

  return (
    <header className={`header opacity-0 container  w-full absolute! h-fit! inset-0 z-1000 border-b border-[#0f12191a] px-10 pb-3.5 py-6 ${pathname.startsWith("/news/") ? "bg-[#f2f2f2]" : "bg-transparent"}`}>
      <div className="grid grid-cols-2 md:grid-cols-4  items-start">

        <div className={` ${pathname === "/" && "pointer-events-none"} w-full`}>
          <Link href="/">
            <img
              className="w-24 hover:opacity-65 transition-all duration-300 brightness-0 object-contain"
              src="/logo.avif"
              alt="Mita Logo"
              loading="eager"
            />
          </Link>
        </div>

        {navItems.map((group, index) => (
          <div key={index} className="space-y-2">
            {group.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`block group w-fit ${pathname === item.href && "pointer-events-none"}`}
              >
                <HoverLink text={item.title} />
              </Link>
            ))}
          </div>
        ))}

      </div>
    </header>
  );
};

export default Header;