import { Link } from "next-view-transitions";
import React from "react";

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
  return (
    <header className=" container bg-transparent! w-full absolute! h-fit! inset-0 z-1000 border-b border-[#0f12191a] px-10 pb-3.5 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4  items-start">

        <div className=" w-full">
          <Link href="/">
            <img
              className="w-24 brightness-0 object-contain"
              src="/logo.avif"
              alt="Mita Logo"
              loading="eager"
            />
          </Link>
        </div>

        {navItems.map((group, index) => (
          <div key={index} className="space-y-1">
            {group.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block w-fit"
              >
                <p className="text-sm relative uppercase group flex items-center overflow-hidden cursor-pointer transition-all duration-300 hover:pl-3 hover:gap-x-1">
                  <span className="absolute -left-2 group-hover:left-0 size-1.5  transition-all duration-300 bg-[#0f1219]" />
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        ))}

      </div>
    </header>
  );
};

export default Header;