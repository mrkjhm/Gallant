"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavLinks } from "../constant/NavLinks";
import Container from "../Ui/Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      // 🔒 HARD LOCK
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      // 🛑 stop lenis
      (window as any).lenis?.stop();
    } else {
      // 🔓 UNLOCK
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";

      (window as any).lenis?.start();
    }
  }, [menuOpen]);

  // useEffect(() => {
  //   const preventScroll = (e: Event) => {
  //     if (menuOpen) e.preventDefault();
  //   };

  //   if (menuOpen) {
  //     window.addEventListener("wheel", preventScroll, { passive: false });
  //     window.addEventListener("touchmove", preventScroll, { passive: false });
  //   }

  //   return () => {
  //     window.removeEventListener("wheel", preventScroll);
  //     window.removeEventListener("touchmove", preventScroll);
  //   };
  // }, [menuOpen]);

  return (
    <section className="bg-white">
      <Container className="flex justify-between h-20 items-center">
        <Link href="/">
          <Image
            src="/GKlogo.png"
            alt="GK Logo"
            width={125}
            height={95}
            className="w-full h-auto"
          />
        </Link>
        <div className="lg:flex hidden gap-10">
          <div className="flex gap-20 uppercase font-semibold text-gray-700">
            {NavLinks.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg transition-colors
        ${active ? "text-[#FF0100] " : "text-gray-700 hover:text-black"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <Link href="/contact-us">
          <button className="cursor-pointer lg:flex hidden px-3 py-2 text-white rounded-lg bg-[#cfa853]">
            <p>Get Started</p>
          </button>
        </Link>

        <button className="lg:hidden flex items-center gap-3">
          <Link href="/contact-us">
            <div className=" text-white px-3 py-2 rounded-lg bg-[#cfa853]">
              <p>Get Started</p>
            </div>
          </Link>

          <i className="ri-menu-line text-lg" onClick={toggleMenu}></i>
        </button>

        <div className="fixed z-60 flex-1">
          <div
            className={`fixed inset-0 bg-black/50  transition-opacity duration-500 ${
              menuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          ></div>
          <aside
            className={`h-screen bg-white fixed top-0 z-50 right-0 w-1/2 shadow-lg transition-all duration-500 ease-in-out ${
              menuOpen
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "translate-x-full opacity-100 pointer-events-none"
            }`}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-sm"
              aria-label="Close menu"
            >
              <i className="ri-close-large-line transition-transform duration-300 rotate-180"></i>
            </button>
            <div>
              <div className="p-10">
                <div className=" flex flex-col gap-5  text-gray-700">
                  {NavLinks.map((item, index) => {
                    const active = isActive(item.href);

                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={toggleMenu}
                        className={`px-3 py-2 rounded-lg transition-colors
        ${
          active
            ? "bg-[#FF0100] text-white font-semibold"
            : "text-gray-700 hover:text-black"
        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
