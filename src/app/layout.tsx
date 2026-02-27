import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "DAWNO - Modern SA-MP PAWN Editor",
    description: "Performance focused PAWN editor for SA-MP and Open.mp developers. Built with Next.js, Electron, and Monaco Editor.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className="scroll-smooth">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
