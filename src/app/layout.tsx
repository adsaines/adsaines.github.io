import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/structures/header";
import '@/styles/globals.css'
import { SettingContextWrapper } from "@/structures/settings-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Saines",
  description: "Senior Full-Stack Engineer specializing in scalable architecture, critical refactoring, and data integration. Expert in React, Typescript, and managing pipeline deployments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link 
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet" 
					/>
				<link 
					rel="icon" 
					href="../../public/favicon.png" 
					/>
			</head>

            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
				<SettingContextWrapper>
					<Header>
						{children}
					</Header>
				</SettingContextWrapper>
            </body>
        </html>
    );
}
