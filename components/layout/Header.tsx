"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { primaryNav, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="EcoWise Water Management"
            width={220}
            height={147}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-800 transition-colors hover:text-leaf-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-navy-800 hover:text-leaf-700"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button href="/contact#assessment-form" size="sm">
            No Cost Assessment
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy-800 hover:bg-leaf-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="rounded-lg px-3 py-3 text-sm font-medium text-navy-800 hover:bg-leaf-50"
            >
              {siteConfig.phone}
            </a>
            <Button href="/contact#assessment-form" className="mt-2" onClick={() => setOpen(false)}>
              No Cost Assessment
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
