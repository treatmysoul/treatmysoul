"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/lib/site-data";

type NavChild = {
  label: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`h-3 w-3 text-[var(--muted)] transition-transform duration-150 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
    >
      <path
        d="M3 4.5 6 7.5 9 4.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DesktopNavItem({
  item,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  if (!item.children?.length && item.href) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium text-[var(--foreground)] transition hover:text-[var(--deep-green)]"
      >
        {item.label}
      </Link>
    );
  }

  const menuId = `${item.label.toLowerCase().replace(/\s+/g, "-")}-desktop-menu`;

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocusCapture={onOpen}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 rounded-full px-1 py-1 text-sm font-medium text-[var(--foreground)] transition hover:text-[var(--deep-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={onToggle}
      >
        <span>{item.label}</span>
        <ChevronDownIcon open={isOpen} />
      </button>

      <div
        id={menuId}
        className={`menu-panel absolute left-0 top-full z-[80] mt-4 w-[22rem] rounded-[1.5rem] p-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {item.children?.map((child) =>
          child.href ? (
            <Link
              key={child.label}
              href={child.href}
              className="block rounded-[1rem] px-4 py-3 transition hover:bg-[rgba(31,59,51,0.05)]"
            >
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {child.label}
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {child.description}
              </p>
            </Link>
          ) : (
            <div
              key={child.label}
              className="rounded-[1rem] px-4 py-3 text-sm text-[var(--muted)]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-[var(--foreground)]">
                  {child.label}
                </p>
                {child.comingSoon ? (
                  <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[11px]">
                    Coming later
                  </span>
                ) : null}
              </div>
              <p className="mt-1 leading-6">{child.description}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  if (!item.children?.length && item.href) {
    return (
      <Link
        href={item.href}
        className="block rounded-[1rem] px-4 py-4 text-base font-medium text-[var(--foreground)] transition hover:bg-[rgba(31,59,51,0.05)]"
      >
        {item.label}
      </Link>
    );
  }

  const menuId = `${item.label.toLowerCase().replace(/\s+/g, "-")}-mobile-menu`;

  return (
    <div className="rounded-[1rem] border border-[var(--line)] bg-[#F8F4EA]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 rounded-[1rem] px-4 py-4 text-left text-base font-medium text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={onToggle}
      >
        <span>{item.label}</span>
        <ChevronDownIcon open={isOpen} />
      </button>

      <div
        id={menuId}
        className={`space-y-1 border-t border-[var(--line)] px-3 py-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {item.children?.map((child) =>
          child.href ? (
            <Link
              key={child.label}
              href={child.href}
              className="block rounded-[0.9rem] px-3 py-3 transition hover:bg-[rgba(31,59,51,0.05)]"
            >
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {child.label}
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {child.description}
              </p>
            </Link>
          ) : (
            <div key={child.label} className="rounded-[0.9rem] px-3 py-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {child.label}
                </p>
                {child.comingSoon ? (
                  <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[11px] text-[var(--muted)]">
                    Coming later
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {child.description}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileMenus((menus) =>
      menus.includes(label)
        ? menus.filter((menu) => menu !== label)
        : [...menus, label],
    );
  };

  return (
    <header className="sticky top-0 z-[70] border-b border-[var(--line)] bg-[rgba(246,241,232,0.82)] backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="shrink-0">
          <span className="display-font text-3xl tracking-[-0.05em] text-[var(--deep-green)]">
            TreatMySoul
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              isOpen={openDesktopMenu === item.label}
              onOpen={() => setOpenDesktopMenu(item.label)}
              onClose={() => setOpenDesktopMenu((open) => (open === item.label ? null : open))}
              onToggle={() =>
                setOpenDesktopMenu((open) => (open === item.label ? null : item.label))
              }
            />
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/retreats"
            className="inline-flex items-center rounded-full border border-[var(--line-strong)] bg-[rgba(255,255,255,0.72)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--deep-green)] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
          >
            Explore Retreats
          </Link>
        </div>

        <div className="relative md:hidden">
          <button
            type="button"
            className="flex items-center rounded-full border border-[var(--line-strong)] bg-[rgba(255,255,255,0.72)] px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--deep-green)]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <div
            id="mobile-primary-menu"
            className={`menu-panel absolute right-0 top-full z-[80] mt-3 w-[min(24rem,calc(100vw-3rem))] rounded-[1.5rem] p-3 ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <nav className="space-y-2" aria-label="Mobile Primary">
              {primaryNav.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  isOpen={openMobileMenus.includes(item.label)}
                  onToggle={() => toggleMobileSubmenu(item.label)}
                />
              ))}
              <Link
                href="/retreats"
                className="mt-2 block rounded-[1rem] bg-[var(--deep-green)] px-4 py-4 text-center text-sm font-semibold text-white"
              >
                Explore Retreats
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
