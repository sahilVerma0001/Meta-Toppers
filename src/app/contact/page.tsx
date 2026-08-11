import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[32px] border border-[#cdeeff] bg-white p-8 shadow-[0_24px_80px_rgba(11,111,168,0.05)] sm:p-10">
            <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-5xl">
              Let&apos;s talk about your next growth chapter.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Whether you need a sharper positioning, a premium digital experience, or a better growth system, we’re ready to help.
            </p>
            <Link href="mailto:hello@metatoppers.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b6fa8] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#085c8b]">
              hello@metatoppers.com
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-[32px] border border-[#cdeeff] bg-[#f2fbff] p-8 sm:p-10">
            <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Availability</p>
            <p className="mt-3 text-base leading-8 text-zinc-600">
              We take on a limited number of projects each season so every engagement receives the attention it deserves.
            </p>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3 rounded-[20px] border border-[#cdeeff] bg-white p-4 shadow-sm">
                <Mail size={18} className="mt-0.5 text-[#0b6fa8]" />
                <div>
                  <p className="font-medium text-zinc-950">Email</p>
                  <p className="text-sm text-zinc-600">hello@metatoppers.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[20px] border border-[#cdeeff] bg-white p-4 shadow-sm">
                <Phone size={18} className="mt-0.5 text-[#0b6fa8]" />
                <div>
                  <p className="font-medium text-zinc-950">Phone</p>
                  <p className="text-sm text-zinc-600">+1 (800) 555-0142</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[20px] border border-[#cdeeff] bg-white p-4 shadow-sm">
                <MapPin size={18} className="mt-0.5 text-[#0b6fa8]" />
                <div>
                  <p className="font-medium text-zinc-950">Location</p>
                  <p className="text-sm text-zinc-600">Remote-first, working with founders worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
