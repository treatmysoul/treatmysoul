import Image from "next/image";

const heroImageSrc = "/images/wellness/rishikesh-hero.png";

export function HomeHeroVisual() {
  return (
    <div className="relative isolate overflow-hidden rounded-[1.85rem] border border-[rgba(255,255,255,0.3)] bg-[var(--deep-green)] shadow-[0_28px_70px_rgba(29,41,36,0.16)]">
      <div className="relative min-h-[20rem] sm:min-h-[24rem] lg:min-h-[29rem]">
        <Image
          src={heroImageSrc}
          alt="Wellness retreat setting overlooking the Himalayan foothills and river near Rishikesh"
          fill
          priority
          sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, (min-width: 640px) 84vw, 100vw"
          className="object-cover object-[68%_center] sm:object-[66%_center]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,236,224,0.05),rgba(18,35,29,0.08)_68%,rgba(13,24,20,0.2)_100%)]" />

        <div className="absolute bottom-4 left-4 right-auto sm:bottom-6 sm:left-6">
          <div className="rounded-[1.15rem] border border-[rgba(82,98,86,0.16)] bg-[rgba(248,244,234,0.9)] px-4 py-3 shadow-[0_14px_34px_rgba(17,35,29,0.12)]">
            <h2 className="display-font text-[1.35rem] leading-none tracking-[-0.04em] text-[var(--deep-green)] sm:text-[1.5rem]">
              Rishikesh, India
            </h2>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[0.72rem]">
              Yoga · Meditation · Spirituality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
