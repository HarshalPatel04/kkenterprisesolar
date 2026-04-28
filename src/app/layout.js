import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from "react-hot-toast";
import localFont from 'next/font/local'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    default: "KK Enterprise | Solar Energy Solutions in Ahmedabad",
    template: "%s | KK Enterprise",
  }, description:
    "Leading solar energy solutions for residential and commercial projects.",
  keywords: [
    "Best Solar Company in Ahmedabad",
    "Best Solar Installation Company in Ahmedabad",
    "Solar Panel Ahmedabad",
    "Solar Installation Gujarat",
    "Solar Installation Ahmedabad",
    "Solar Installation Surat",
    "Solar Installation Vadodara",
    "Solar Installation Rajkot",
    "Solar Installation Gandhinagar",
    "Solar Installation Bhavnagar",
    "Solar Installation Junagadh",
    "Solar Installation Mehsana",
    "Solar Installation Anand",
    "Solar Installation Amreli",
    "Solar Panel Ahmedabad",
    "Solar Company Gujarat",
    "Residential Solar Installation",
    "Commercial Solar Installation",
    "Solar EPC Company",
    "Solar Maintenance Services",
  ],
  metadataBase: new URL("https://kkenterprisesolar.com"),
  openGraph: {
    title: "KK Enterprise | Solar Energy Solutions",
    description:
      "Trusted solar energy partner for residential and commercial solar projects.",
    url: "https://kkenterprisesolar.com",
    siteName: "KK Enterprise",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <Toaster position="top-right" />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}