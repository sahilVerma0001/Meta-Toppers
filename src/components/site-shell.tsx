"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/website", label: "Website" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7fbff] text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-[#f7fbff]/85 backdrop-blur-xl">
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
                  className={`relative transition pb-1 border-b-2 ${isActive ? "text-[#0b6fa8] font-semibold border-[#0b6fa8]" : "text-zinc-600 hover:text-zinc-950 border-transparent"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
          <div className="absolute left-0 top-full w-full border-b border-zinc-200/70 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-xl md:hidden">
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

      <footer id="contact" className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8">
        <div className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Let's talk</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl">
                Ready to raise the standard of your growth?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
                We take on a limited number of engagements each quarter so every partnership gets the focus it deserves.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#085c8b]"
            >
              hello@metatoppers.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
