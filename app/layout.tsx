import { Poppins, Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import FloatingYuuki from "./components/FloatingYuuki";
import Footer from "./components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Nik Alyaa Portfolio",
  description: "A dreamy portfolio full of magic ✨",
  openGraph: {
    title: "Nik Alyaa Portfolio",
    description: "A dreamy portfolio full of magic ✨",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Yuuki Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
        }}
        className={`${poppins.variable} ${quicksand.variable} ${playfair.variable} antialiased !font-sans`}
      >
        <ClientLayout>{children}</ClientLayout>
        <FloatingYuuki />
        <Footer/>
      </body>
    </html>
  );
}
