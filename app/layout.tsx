import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";

const barlowCondensed = Barlow_Condensed({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portfolio Prototype",
	description: "Low-fidelity UI/UX portfolio prototype",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={barlowCondensed.className}>
				<NavBar />
				<main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
					{children}
				</main>
			</body>
		</html>
	);
}
