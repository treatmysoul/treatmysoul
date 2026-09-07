import Image from "next/image";
import Link from "next/link";

type RetreatCategoryCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  priority?: boolean;
};

export function RetreatCategoryCard({
  title,
  description,
  image,
  alt,
  href,
  priority = false,
}: RetreatCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-[1.75rem] border border-[var(--line)] bg-[rgba(255,251,246,0.78)] p-4 transition duration-200 hover:-translate-y-1 hover:border-[var(--line-strong)] hover:bg-[rgba(255,255,255,0.9)] md:p-5"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[rgba(228,220,206,0.55)]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 23rem, (min-width: 768px) calc((100vw - 6rem) / 2), 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-1 pb-1 pt-5">
        <h3 className="display-font text-3xl tracking-[-0.04em] text-[var(--deep-green)]">
          {title}
        </h3>
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">
          {description}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--deep-green)] transition group-hover:text-[#173027]">
          <span>Explore</span>
          <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}
