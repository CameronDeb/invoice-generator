import Link from 'next/link';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: '10 Free Invoice Templates for 2024 - Download Professional Designs',
  description: 'Download free professional invoice templates. Perfect for freelancers, consultants, contractors, and small businesses.',
  keywords: 'free invoice template, invoice template download, professional invoice, freelance invoice template',
};

export default function FreeInvoiceTemplates() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            10 Free Invoice Templates for Every Industry
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
            <span>November 4, 2024</span>
            <span>•</span>
            <span>6 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Finding the perfect invoice template can save you hours of work. We have compiled the best free invoice templates for every industry and use case.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-lg text-blue-900 font-semibold mb-2">
                Pro Tip: Skip the Templates!
              </p>
              <p className="text-blue-800">
                Instead of downloading templates and manually filling them out, use our free invoice generator to create professional invoices in seconds.
              </p>
              <Link 
                href="/invoice"
                className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Try the Free Invoice Generator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Why Use Invoice Templates?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Invoice templates provide a professional foundation for your billing. They give you professional appearance, consistent branding, time savings, and all required fields included automatically.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              1. Basic Invoice Template
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700 mb-4">
                Freelancers, consultants, and service providers who need a simple, clean invoice
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Clean, minimalist design
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Easy to customize
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Includes all essential fields
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              2. Professional Services Template
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700 mb-4">
                Consultants, lawyers, accountants, marketing agencies, and professional service providers
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Template vs Generator
            </h2>

            <p className="text-gray-700 leading-relaxed">
              While templates are useful, an invoice generator is faster and eliminates manual calculations. It saves time, reduces errors, and creates professional invoices instantly.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Skip the Template Hassle
              </h3>
              <p className="text-blue-800 text-lg mb-6">
                Create professional invoices in 60 seconds with our free invoice generator. No downloads, no software, no manual calculations.
              </p>
              <Link 
                href="/invoice"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
              >
                Create Your First Invoice Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-blue-600 hover:underline text-lg">
              ← Back to all articles
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}