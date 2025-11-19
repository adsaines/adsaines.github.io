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
  title: "Alex Saines's site that proves he's awesome.",
  description: "Seriously, I'm awesome. I can code in a fullstack environment from reports trolling databases on the bottom to an expanding modal informing table displays on the front end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <link 
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet">  
                </link>
				<SettingContextWrapper>
				<Header>
					{children}
				</Header>
				</SettingContextWrapper>
            </body>
        </html>
    );
}
