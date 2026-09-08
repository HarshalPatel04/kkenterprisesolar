import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from "react-hot-toast";
import localFont from 'next/font/local'
import { FloatingToggle } from './page';
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      <body className="font-sans bg-white text-gray-900 overflow-x-hidden">

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KMQQGKL7');
      `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMQQGKL7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Toaster position="top-right" />
        <Navbar />
        <main className="pt-16">{children}</main>
        <FloatingToggle />
        <Footer />
        <Analytics />
        <SpeedInsights />
<<<<<<< HEAD
=======

>>>>>>> 60ef174f094b5bf1b7411d44e6bf457454942147
      </body>
    </html>
  );
}