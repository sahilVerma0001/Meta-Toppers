"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { SiteFooter } from "./site-footer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/website", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

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

      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen
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
          <div className="absolute left-0 top-full w-full border-t border-zinc-100 border-b border-zinc-200/70 bg-white px-6 py-6 shadow-xl md:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
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
