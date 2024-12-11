import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@styles/globals.css";
import ParentProvider from "./Provider";
import dynamic from "next/dynamic";

const inter = Inter({  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lema AI",
  description: "lema ai assessment",
  icons: {
    icon: "https://cdn.prod.website-files.com/65e5d53252183f23144a7235/65f80f9e8c109b5c815e8b34_32%20logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Styling = dynamic(() => import("@components/StylingComponent"));
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <Styling />
      <body className={`${inter.className} text-dark-500`}>
        <ParentProvider>{children}</ParentProvider>
      </body>
    </html>
  );
}
