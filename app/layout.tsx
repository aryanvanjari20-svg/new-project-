import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revive — AI Revenue Recovery Agent",
  description: "Detect revenue at risk, diagnose root cause, and execute bounded recovery workflows.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0b] text-white selection:bg-white/20">
        {children}
      </body>
    </html>
  );
}
