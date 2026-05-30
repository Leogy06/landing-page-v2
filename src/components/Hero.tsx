import Image from "next/image";
import { getHero } from "@/lib/sanity/queries/hero";
import { urlFor } from "@/utils/sanity/sanityImage";
export const Hero = async () => {
  const hero = await getHero();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={urlFor(hero.image).width(1200).url()}
            alt="Venue"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          {/* Eyebrow */}
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] uppercase text-amber-300">
            Weddings · Conferences · Celebrations
          </p>

          {/* Headline */}
          <h1 className="font-serif max-w-4xl text-5xl font-light leading-tight text-white sm:text-6xl xl:text-7xl">
            {hero?.heading ??
              "Your Most Memorable Moments Deserve the Perfect Stage"}
          </h1>

          {/* Divider ornament */}
          <div className="my-8 flex items-center gap-3">
            <span className="h-px w-12 bg-amber-400/60" />
            <span className="text-amber-400 text-lg">✦</span>
            <span className="h-px w-12 bg-amber-400/60" />
          </div>

          {/* Subheading */}
          <p className="max-w-xl text-base text-white/75 leading-relaxed sm:text-lg">
            {hero?.subheading ??
              "An elegant venue for weddings, birthdays, corporate events, and private gatherings — crafted to exceed expectations."}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="/book"
              className="inline-block rounded-none border border-amber-400 bg-amber-400 px-10 py-4 text-sm font-semibold tracking-widest uppercase text-black transition-all duration-300 hover:bg-transparent hover:text-amber-300">
              {hero?.ctaText ?? "Book a Viewing"}
            </a>
            <a
              href="/venues"
              className="inline-block rounded-none border border-white/50 px-10 py-4 text-sm font-semibold tracking-widest uppercase text-white/90 transition-all duration-300 hover:border-white hover:text-white">
              Explore Venues
            </a>
          </div>

          {/* Availability pill */}
          <div className="mt-6 flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available bookings for 2025 &amp; 2026
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────── */}
      <section className="bg-stone-900 py-6 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { icon: "🎉", stat: "500+", label: "Events Hosted" },
            { icon: "🍽️", stat: "In-House", label: "Catering" },
            { icon: "🚗", stat: "Free", label: "Parking" },
            { icon: "👥", stat: "Up to 300", label: "Capacity" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-1">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-amber-400 text-sm font-semibold tracking-wide">
                {item.stat}
              </span>
              <span className="text-white/50 text-xs tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
