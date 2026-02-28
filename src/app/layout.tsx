import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nContext";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "DAWNO - Modern PAWN Editor",
    description: "Modern, performance-oriented PAWN code editor designed for SA-MP and open.mp developers. Built with Next.js, Electron, and Monaco Editor.",
    icons: {
        icon: "/assets/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className="scroll-smooth">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-white bg-brand-dark`}>
                <I18nProvider>
                    {children}
                </I18nProvider>
            </body>
        </html>
    );
}
