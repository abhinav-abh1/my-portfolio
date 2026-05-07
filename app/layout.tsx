import type { Metadata } from "next";
import { Exo_2, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import CursorTracker from "@/components/CursorTracker";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Abhinav A | Full Stack Developer",
  description: "Futuristic Space Ship Portfolio — MCA Graduate | Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${orbitron.variable} ${exo2.variable} ${jetBrainsMono.variable}`}>
      <body className="bg-void text-text-primary antialiased">
        <Background />
        <CursorTracker />
        {children}
      </body>
    </html>
  );
}