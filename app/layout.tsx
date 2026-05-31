import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShowNav } from "@/components/shared/ShowNav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClickSpark from "@/components/shared/ClickSpark";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://joshhatchard.com"),
  title: "Josh Hatchard - UI/UX Designer & Developer",
  description:
    "Portfolio of Josh Hatchard - designing and coding clean, user-centred digital products from end to end. UX case studies and creative design work.",
  keywords: [
    "UI designer",
    "UX designer",
    "product designer",
    "web designer",
    "Sydney designer",
    "design portfolio",
  ],
  authors: [
    {
      name: "Josh Hatchard",
      url: "https://joshhatchard.com",
    },
  ],
  creator: "Josh Hatchard",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://joshhatchard.com",
    siteName: "Josh Hatchard",
    title: "Josh Hatchard - UI/UX Designer & Developer",
    description:
      "Portfolio of Josh Hatchard - designing and coding clean, user-centred digital products from end to end.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Josh Hatchard Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Hatchard - UI/UX Designer & Developer",
    description:
      "Portfolio of Josh Hatchard - designing and coding clean, user-centred digital products.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/faviconv2.svg",
    shortcut: "/faviconv2.svg",
    apple: "/faviconv2.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Josh Hatchard",
    url: "https://joshhatchard.com",
    jobTitle: "UI/UX Designer & Frontend Developer",
    image: "https://joshhatchard.com/og-image.png",
    sameAs: [
      "https://www.linkedin.com/in/joshhatchard",
      "https://github.com/joshhatchard",
    ],
    knowsAbout: [
      "Product Design",
      "User Experience",
      "UI Design",
      "Web Development",
      "Frontend Development",
      "React",
      "TypeScript",
      "Figma",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          suppressHydrationWarning
        />
      </head>
      <body className={inter.className}>
        <ClickSpark
          sparkColor="var(--color-primary)"
          sparkSize={14}
          sparkRadius={28}
          sparkCount={4}
          duration={300}
          easing="ease-out"
          extraScale={1.1}
        >
          <main
            id="main-content"
            className="relative z-10 mx-auto w-full max-w-7xl px-8 py-0 xs:px-12 md:px-16 lg:px-24"
          >
            <ShowNav>{children}</ShowNav>
          </main>
        </ClickSpark>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
