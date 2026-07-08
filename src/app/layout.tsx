import type { Metadata } from "next";
import { Cinzel, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteName, siteUrl } from "./config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "Dotaciones Sariss diseña y confecciona ropa para dotación empresarial en Colombia: hoodies, chalecos, chaquetas, blusas, vestidos y cobijas corporativas personalizables con la mejor calidad y precios competitivos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dotaciones Sariss | Dotación empresarial y uniformes corporativos",
    template: "%s | Dotaciones Sariss",
  },
  description,
  keywords: [
    "dotación empresarial",
    "uniformes corporativos",
    "dotación Colombia",
    "confección de uniformes",
    "hoodies empresariales",
    "chalecos de trabajo",
    "chaquetas corporativas",
    "vestidos empresariales",
    "ropa de trabajo personalizada",
    "Dotaciones Sariss",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName,
    title: "Dotaciones Sariss | Dotación empresarial y uniformes corporativos",
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dotaciones Sariss - Diseño y confección de dotación empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dotaciones Sariss | Dotación empresarial y uniformes corporativos",
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans">
        {children}
      </body>
    </html>
  );
}
