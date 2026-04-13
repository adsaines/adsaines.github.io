import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/structures/header";
import '@/styles/globals.css'
import { SettingContextWrapper } from "@/structures/settings-context";
import textPreview from '@/images/og-image.jpg'

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
			{/* https://ogp.me/ => for facebook, and hopefully texting preview blocks*/}
			<meta property="og:title" content="Alex Saines' dev page" />
			<meta property="og:description" content="A set of information that begins to describe me. You can always see my resume and professional lessons (story_time). You can also investigate several hidden journeys by visiting the settings." />
			<meta property="og:type" content="web page" />
			<meta property="og:image" content={textPreview.src} />
			<meta property="og:image:alt" content="Me and my second kiddo on a windy day." />
			<meta property="og:url" content="https://adsaines.github.io/" />
			<meta property="og:site_name" content="GitHub IO" />

			<link 
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
				rel="stylesheet" 
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
