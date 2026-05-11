import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/shared/SiteChrome";

const barlowCondensed = Barlow_Condensed({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Josh Hatchard - UI/UX Designer",
	description: "Portfolio of Josh Hatchard - designing and coding clean, user-centred digital products from end to end.",
	icons: {
		icon: "/favicon.png",
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
				<main className="mx-auto w-full max-w-7xl px-12 py-0 md:px-16 lg:px-24">
					<SiteChrome>{children}</SiteChrome>
				</main>
			</body>
		</html>
	);
}
