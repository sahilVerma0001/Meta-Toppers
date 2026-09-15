import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import type { SVGProps } from "react";

function Facebook(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function Instagram(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
}
function XIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4l16 16M20 4L4 20" /></svg>;
}
function Linkedin(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
}
function WhatsApp(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>;
}

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/website" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: WhatsApp, href: "https://wa.me/919351673834", label: "WhatsApp" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/metatoppersofficial/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61573895978819", label: "Facebook" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-gradient-to-b from-white to-[#f7fbff]">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-10 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_1fr]">

          {/* Brand + Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/MetaToppers-bg.png"
                alt="Meta Toppers logo"
                width={42}
                height={42}
                className="h-10 w-10 object-contain"
              />
              <span className="text-sm font-semibold tracking-[0.24em] text-slate-800 uppercase">
                Meta Toppers
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-600 max-w-sm">
              We build websites and marketing systems that turn your visitors into paying clients — not just impress them.
            </p>
            <div className="flex gap-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2fbff] text-zinc-400 transition-all duration-300 hover:bg-[#0b6fa8] hover:text-white hover:-translate-y-0.5"
                >
                  <span className="sr-only">{item.label}</span>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.15em] text-zinc-950 uppercase">Quick Links</h3>
            <ul role="list" className="mt-5 space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-zinc-600 transition-colors hover:text-[#0b6fa8]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.15em] text-zinc-950 uppercase">Get In Touch</h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f2fbff] text-[#0b6fa8]">
                  <MapPin size={16} />
                </div>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Mansarover Plaza, Madhyam Marg, Mansarovar, Jaipur, Rajasthan 302020
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f2fbff] text-[#0b6fa8]">
                  <Phone size={16} />
                </div>
                <div className="text-sm text-zinc-600">
                  <a href="tel:+919799917630" className="transition-colors hover:text-[#0b6fa8]">+91 97999 17630</a>
                  <span className="mx-2 text-zinc-300">|</span>
                  <a href="tel:+919351673834" className="transition-colors hover:text-[#0b6fa8]">+91 93516 73834</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f2fbff] text-[#0b6fa8]">
                  <Mail size={16} />
                </div>
                <a href="mailto:metatoppers@gmail.com" className="text-sm text-zinc-600 transition-colors hover:text-[#0b6fa8]">
                  metatoppers@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/70 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Meta Toppers. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link href="#" className="transition-colors hover:text-[#0b6fa8]">Privacy Policy</Link>
            <Link href="#" className="transition-colors hover:text-[#0b6fa8]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
