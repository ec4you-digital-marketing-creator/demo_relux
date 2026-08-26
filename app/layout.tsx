import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, DM_Sans, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_URL } from "@/app/ui/baceurl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Relux Electric | EV Charging Station Franchise in India",
  description:
    "Join Relux Electric, India's No.1 EV Charging Station Network Provider. We offer EV franchise opportunities and end-to-end charging infrastructure solutions across India.",
  keywords: [
    "EV Charging Station Network Provider",
    "EV charging station franchise",
    "electric vehicle charging India",
    "Relux EV",
    "low investment EV business",
    "sustainable energy solutions",
    "EV charging franchise",
    "EV charging station franchise in India",
    "electric vehicle charging franchise opportunity",
    "start EV charging station business",
    "EV charging franchise in Tamil Nadu",
    "electric charging station companies",
    "EV charging station companies",
    "electric vehicle charging stations business opportunities",
    "electric vehicle charging station franchise",
    "EV charging installation companies",
    "how to start a charging station business",
    "electric charging station investment",
    "how to start an EV charging business",
    "electric vehicle charging stations investment",
    "how to start an EV charging station business",
    "best EV franchise in India",
    "best EV charging franchise in India",
    "best EV charging station franchise in India",
    "best EV charging station franchise cost in India",
    "EV charging station franchise cost in India",
    "EV charging station franchise cost",
    "best EV manufacturers in India",
    "best EV battery manufacturers in India",
    "best EV charger manufacturers in India",
    "best EV parts manufacturers in India",
    "largest EV manufacturer in India",
    "top 5 EV manufacturers",
    "leading EV companies in India",
    "world’s largest EV manufacturer",
    "top 10 EV manufacturers in India"
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Relux Electric EV Charging Station Franchise in India",
    description:
      "Start your EV charging station franchise with Relux Electric. Electric car charging station franchise in India with low investment and high-profit potential.",
    url: `${SITE_URL}/`,
    siteName: "Relux Electric",
    images: [
      {
        url: "https://reluxelectric.com/assets/hero_franchise.png",
        width: 1200,
        height: 630,
        alt: "Relux Electric EV Charging Station Franchise in India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relux Electric EV Charging Station Franchise in India",
    description:
      "Start your EV charging station franchise with Relux Electric. Electric car charging station franchise in India with low investment and high-profit potential.",
    images: ["https://reluxelectric.com/assets/hero_franchise.png"],
    creator: "@reluxelectric",
    site: "@reluxelectric",
  },
  verification: {
    google: "0FtLFyX0EBjDfEpgcmJ8QguEoC4JFLW0ehPFpeZcYAE",
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-title": "Relux Electric EV Charging Station Franchise in India",
    "application-name": "Relux Electric EV Charging Station Franchise in India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${dmSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preload" href="/images/relux-electric-tamilnadu-banner.webp" as="image" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CDC35ZMGSP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDC35ZMGSP');
          `}
        </Script>

        {/* Microsoft Clarity - lazyOnload to prevent mobile INP delays */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x7svvu0heh");
          `}
        </Script>

        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !(function (f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function () {
                n.callMethod
                  ? n.callMethod.apply(n, arguments)
                  : n.queue.push(arguments);
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = "2.0";
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            })(
              window,
              document,
              "script",
              "https://connect.facebook.net/en_US/fbevents.js"
            );
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col pt-24 bg-black">
        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Relux Electric",
                "alternateName": [
                  "Relux Electric EV Charging Station Franchise",
                  "Relux Electric India"
                ],
                "url": SITE_URL
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Relux Electric",
                "legalName": "Relux Electric India Private Limited",
                "url": SITE_URL,
                "logo": `${SITE_URL}/assets/hero_franchise.png`,
                "description": "India's leading EV Charging Station Network Provider & Franchise Operator.",
                "telephone": "+91-9884866993",
                "email": "enquiry@reluxelectric.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "No:16/8, PRV Towers, Ground floor, Grand Southern Trunk Rd, Ramapuram, Guindy",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "600032",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9884866993",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Tamil", "Hindi"]
                },
                "sameAs": [
                  "https://www.facebook.com/reluxelectric",
                  "https://www.instagram.com/reluxelectric/",
                  "https://www.linkedin.com/company/relux-electric/",
                  "https://www.youtube.com/@reluxelectric7550",
                  "https://x.com/reluxelectric"
                ],
                "knowsAbout": [
                  "Electric Vehicle Charging Infrastructure",
                  "EV Charging Station Franchise",
                  "DC Fast Chargers",
                  "OCPP Charging Protocol",
                  "Clean Energy & E-Mobility"
                ]
              }
            ])
          }}
        />
        <Navbar />
        <main suppressHydrationWarning className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

