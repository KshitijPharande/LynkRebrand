import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Lynk Digital | Social Media Marketing & Branding Agency",
    template: "%s | Lynk Digital",
  },
  description:
    "Transform your brand's presence with Lynk Digital. Expert social media marketing, organic community growth, strategic branding, and digital strategy services.",
  keywords: [
    "social media marketing",
    "brand development",
    "digital marketing",
    "content strategy",
    "organic engagement",
    "web design",
    "UI/UX design",
  ],
  authors: [{ name: "Lynk Digital" }],
  creator: "Lynk Digital",
  publisher: "Lynk Digital",
  metadataBase: new URL("https://lynkdigital.co.in"),
  openGraph: {
    title: "Lynk Digital | Transform Your Digital Presence",
    description:
      "Transform your digital presence with expert web design, UI/UX, and digital marketing services.",
    url: "https://lynkdigital.co.in",
    siteName: "Lynk Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynk Digital | Transform Your Digital Presence",
    description:
      "Transform your digital presence with expert web design, UI/UX, and digital marketing services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#2D3561" />
        <link rel="icon" href="/lynk-logo.webp" type="image/webp" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
