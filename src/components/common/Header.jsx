import { Link } from "next-view-transitions";
import React, { useState } from "react";
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
  const [openMenu, setOpenMenu] = useState(false)
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
    <>
      <div className={` ${openMenu ? "translate-y-0" : "-translate-y-full"}  overflow-hidden fixed w-full h-svh inset-0 z-1000 px-6 pt-18 flex flex-col justify-between bg-[#f2f2f2] md:hidden transition-all duration-500`}>
        <div className="">
          {navItems.map((group, index) => (
            <div key={index} className="">
              {group.map((item) => (
                <Link
                onClick={()=>setOpenMenu(false)}
                  key={item.title}
                  href={item.href}
                  className={`block group mb-5 w-fit ${pathname === item.href && "pointer-events-none"}`}
                >
                  <HoverLink text={item.title} className="text-xl" />
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="space-y-6 mb-8">
          <div className="w-full h-44 overflow-hidden">
            <img className=" cover" src="https://framerusercontent.com/images/InuUf1oKyWrFPvFVsswebSw22SM.jpg?scale-down-to=1024" alt="" />
          </div>
          <div className="w-full ">
            <img className=" w-full" src="	https://framerusercontent.com/images/BlkjXbIDaBz9LJlBh6RYmdtQM7w.svg" alt="" />
          </div>
        </div>
      </div>
      <header className={`header opacity-0 container  w-full absolute! h-fit! inset-0 z-1000 border-b border-[#0f12191a] px-6 md:px-10 pb-3.5 py-6 max-sm:bg-[#f2f2f2] ${pathname.startsWith("/news/") ? "bg-[#f2f2f2]" : "bg-transparent"}`}>
        <nav className="grid grid-cols-2 md:grid-cols-4  items-start">

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

          <div onClick={()=>setOpenMenu(!openMenu)} className=" flex justify-end md:hidden">
            <button className="uppercase text-xs">
              {openMenu ? "Close" : "Menu"}
            </button>
          </div>

          {navItems.map((group, index) => (
            <div key={index} className="space-y-2  hidden md:block">
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

        </nav>
      </header>
    </>

  );
};

export default Header;