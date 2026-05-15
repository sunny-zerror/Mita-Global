"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LenisScroll from "@/components/common/LenisScroll";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ViewTransitions } from "next-view-transitions";
import GlobalImgReveal from "../animation/GlobalImgReveal";
import GlobalTextReveal from "../animation/GlobalTextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function SiteLayout({ children }) {
  const pathname = usePathname();


  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) {
        window.lenis.resize();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith("/news/")) gsap.to("body", { backgroundColor: "#0f1219", });
    else {
      gsap.to("body", { backgroundColor: "#5a6b73", });
    }
  }, [pathname])
  
  return (
    <ViewTransitions>
      <LenisScroll>

        <GlobalImgReveal />
        <GlobalTextReveal />
        <div className="w-screen pointer-events-none h-screen fixed  z-100000">
          <div className="border-5 border-[#acbbc2] w-full h-full"></div>
        </div>

        <header>
          <Header />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </LenisScroll>
    </ViewTransitions>

  );
}
