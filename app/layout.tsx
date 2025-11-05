import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InvoiceQuick - Free Invoice Generator",
  description: "Create professional invoices in seconds. Free invoice generator with PDF download. No signup required. Perfect for freelancers, contractors, and small businesses.",
  keywords: "free invoice generator, invoice template, create invoice, invoice maker, professional invoice, PDF invoice, freelance invoice",
  authors: [{ name: "InvoiceQuick" }],
  openGraph: {
    title: "InvoiceQuick - Free Invoice Generator",
    description: "Create professional invoices in seconds. Free, fast, and easy to use.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceQuick - Free Invoice Generator",
    description: "Create professional invoices in seconds. Free invoice generator with PDF download.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Replace G-XXXXXXXXXX with your actual GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R2T6WCNT2J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R2T6WCNT2J');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-blue-600">
                InvoiceQuick
              </a>
              <div className="flex gap-6">
                <a href="/" className="text-gray-600 hover:text-blue-600 transition">
                  Home
                </a>
                <a href="/invoice" className="text-gray-600 hover:text-blue-600 transition">
                  Create Invoice
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">InvoiceQuick</h3>
                <p className="text-sm">
                  Free professional invoice generator for freelancers and small businesses.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/invoice" className="hover:text-white transition">Create Invoice</a></li>
                  <li><a href="#" className="hover:text-white transition">Templates</a></li>
                  <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">How to Create Invoice</a></li>
                  <li><a href="#" className="hover:text-white transition">Invoice Templates</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2024 InvoiceQuick. All rights reserved. Free invoice generator for professionals.</p>
              <p className="mt-2 text-xs text-gray-500">
                Keywords: free invoice generator, invoice template, create invoice online, invoice maker, professional invoice, PDF invoice
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}