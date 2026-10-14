import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junior Web Developer | Portfolio",
  description: "Portfolio showcasing web development projects, technical skills, and contact information.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
