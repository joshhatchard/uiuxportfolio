import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShowNav } from "@/components/shared/ShowNav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClickSpark from "@/components/shared/ClickSpark";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Hatchard - UI/UX Designer",
  description:
    "Portfolio of Josh Hatchard - designing and coding clean, user-centred digital products from end to end.",
  icons: {
    icon: "/faviconv2.svg",
    shortcut: "/faviconv2.svg",
    apple: "/faviconv2.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          <main className="relative z-10 mx-auto w-full max-w-7xl px-8 py-0 xs:px-12 md:px-16 lg:px-24">
            <ShowNav>{children}</ShowNav>
          </main>
        </ClickSpark>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
