import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex rounded-lg bg-white p-2">
            <Image
              src="/logo.png"
              alt="EcoWise Water Management"
              width={220}
              height={147}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Helping Utah properties reduce water costs and capture conservation incentives.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Company</h3>
          <ul className="mt-4 space-y-3">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/60 hover:text-leaf-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Get Started</h3>
          <ul className="mt-4 space-y-3">
            {footerNav.get_started.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/60 hover:text-leaf-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-leaf-400" />
              <a href={siteConfig.phoneHref} className="hover:text-leaf-300">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-leaf-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-leaf-300">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-leaf-400" />
              {siteConfig.address.full}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} EcoWise Water Management. All rights reserved.</p>
          <p>Utah water conservation consulting</p>
        </Container>
      </div>
    </footer>
  );
}
