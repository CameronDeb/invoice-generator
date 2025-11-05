import Link from 'next/link';
import { Zap, Shield, Download } from 'lucide-react';

export const metadata = {
  title: 'Free Invoice Generator - Create Professional Invoices Online | InvoiceQuick',
  description: 'Create professional invoices in seconds. Free invoice generator with PDF download. No signup required. Perfect for freelancers, contractors, and small businesses.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Free Invoice Generator
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Create professional invoices in seconds. No signup required.
            Download as PDF instantly.
          </p>
          <Link 
            href="/invoice"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Create Invoice Now - It&apos;s Free
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            ✓ No registration ✓ No credit card ✓ Instant download
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Zap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Create and download invoices in under 60 seconds.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
            <p className="text-gray-600">Completely free invoice generator. No hidden fees.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Download className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">PDF Download</h3>
            <p className="text-gray-600">Download professional PDF invoices instantly.</p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Use Our Free Invoice Generator?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Creating professional invoices shouldn&apos;t be complicated or expensive. Our free invoice generator 
              helps freelancers, contractors, and small business owners create polished, professional invoices 
              in minutes without any design skills or expensive software.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Perfect for Freelancers and Small Businesses
            </h3>
            <p>
              Whether you&apos;re a freelance designer, consultant, contractor, or running a small business, 
              you need to send invoices to get paid. Our invoice maker simplifies the entire process.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/invoice"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InvoiceQuick. Free invoice generator for professionals.</p>
        </div>
      </footer>
    </div>
  );
}