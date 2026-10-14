import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "@fontsource-variable/nunito";
import "@fontsource-variable/unbounded";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { AuthModal } from "@/components/auth/AuthModal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { branches } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} в Астане`,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.fullName,
    title: `${site.fullName} в Астане`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff1f2",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: site.fullName,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: branches[0].address,
    addressLocality: site.city,
    addressCountry: "KZ",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "16:00" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <AuthProvider>
          <a
            href="#main"
            className="sr-only rounded-full bg-white px-5 py-3 font-bold text-ink shadow-lift focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
          >
            Перейти к содержимому
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <AuthModal />
        </AuthProvider>
      </body>
    </html>
  );
}
