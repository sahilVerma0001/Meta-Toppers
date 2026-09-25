"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, type ReactNode } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { servicesData } from "@/data/services/index";

import { industriesData } from "@/data/industries/index";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    subLinks: servicesData.map(s => ({ href: `/services/${s.slug}`, label: s.title, icon: s.icon }))
  },
  { href: "/website", label: "Our Work" },
  { href: "/about", label: "About" },
  {
    href: "/industries",
    label: "Industries",
    subLinks: industriesData.map(i => ({ href: `/industries/${i.slug}`, label: i.title, icon: i.icon }))
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function MobileNavAccordion({ link, pathname, closeMenu }: { link: any; pathname: string; closeMenu: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname.startsWith(link.href);

  return (
    <div className="flex flex-col gap-2 border-b border-zinc-100 pb-2 mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2"
      >
        <span className={`block text-lg font-medium ${isActive ? "text-[#0b6fa8]" : "text-zinc-700"}`}>
          {link.label}
        </span>
        <ChevronDown size={20} className={`text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="mt-1 flex flex-col gap-1 pb-4">
          <Link href={link.href} onClick={closeMenu} className="flex items-center gap-3 rounded-xl p-3 bg-blue-50/50 mb-2 font-bold text-sm text-[#0b6fa8]">
            View all {link.label.toLowerCase()}
          </Link>
          {link.subLinks.map((sub: any) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={closeMenu}
              className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-zinc-50"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500">
                {sub.icon && <sub.icon size={16} />}
              </div>
              <span className="text-sm font-medium text-zinc-700">{sub.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7fbff] text-zinc-900">
      {/* Mobile Nav Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-zinc-950/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header className={`sticky top-0 z-40 transition-all duration-300 ${isMobileMenuOpen
          ? "bg-white"
          : scrolled
            ? "border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/MetaToppers-bg.png"
              alt="Meta Toppers logo"
              width={42}
              height={42}
              priority
              className="h-10 w-10 object-contain"
            />
            <span className="text-sm font-semibold tracking-[0.24em] text-slate-800 uppercase">
              Meta Toppers
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              if (link.subLinks) {
                return (
                  <div key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      className={`nav-link-animated relative flex items-center gap-1 transition-colors pb-1 ${isActive ? "text-[#0b6fa8] font-semibold" : "text-zinc-600 hover:text-zinc-950"}`}
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown Menu */}
                    {/* Desktop Mega Menu */}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 hidden pt-4 group-hover:block w-[600px]">
                      <div className="rounded-[1.25rem] border border-zinc-100 bg-white p-4 shadow-xl">
                        <div className="grid grid-cols-2 gap-1">
                          {link.subLinks.map((sub: any) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="group/item flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-zinc-50"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover/item:bg-[#0b6fa8] group-hover/item:text-white">
                                {sub.icon && <sub.icon size={18} />}
                              </div>
                              <span className="text-sm font-semibold text-zinc-900 group-hover/item:text-[#0b6fa8]">{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 border-t border-zinc-100 pt-4">
                          <Link href={link.href} className="flex items-center justify-between rounded-xl bg-zinc-50 p-4 transition-colors hover:bg-zinc-100">
                            <span className="text-[13px] font-semibold text-zinc-900">View all {link.label.toLowerCase()}</span>
                            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0b6fa8]">
                              Explore <ArrowRight size={14} />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link-animated relative transition-colors pb-1 ${isActive ? "text-[#0b6fa8] font-semibold" : "text-zinc-600 hover:text-zinc-950"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-interactive hidden sm:inline-flex rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm"
            >
              Book a call
            </Link>

            <button
              className="flex items-center justify-center rounded-full bg-[#f2fbff] p-2 text-[#0b6fa8] md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full w-full max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain border-t border-zinc-100 border-b border-zinc-200/70 bg-white px-6 pt-6 pb-24 shadow-xl md:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                if (link.subLinks) {
                  return (
                    <MobileNavAccordion
                      key={link.href}
                      link={link}
                      pathname={pathname}
                      closeMenu={() => setIsMobileMenuOpen(false)}
                    />
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium ${isActive ? "text-[#0b6fa8]" : "text-zinc-700"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0b6fa8] px-6 py-3.5 text-base font-semibold text-white shadow-sm"
              >
                Book a strategy call
              </Link>
            </nav>
          </div>
        )}
      </header>

      {children}

      <SiteFooter />
    </div>
  );
}
