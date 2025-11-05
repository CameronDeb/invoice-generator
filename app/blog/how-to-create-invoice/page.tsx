import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'How to Create a Professional Invoice in 2024 - Complete Guide',
  description: 'Learn how to create professional invoices step-by-step. Includes free templates, best practices, and tips to get paid faster.',
  keywords: 'how to create invoice, invoice guide, professional invoice, invoice template, freelance invoice',
};

export default function HowToCreateInvoice() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Create a Professional Invoice in 2024
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
            <span>November 4, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Creating professional invoices is essential for getting paid on time. This complete guide shows you exactly how to create invoices that look professional and get results.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What is an Invoice?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              An invoice is a commercial document that itemizes a transaction between a buyer and seller. It serves as a request for payment and includes details about products or services provided, amounts owed, and payment terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Essential Elements Every Invoice Must Have
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Invoice Number:</strong> A unique identifier for tracking
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Your Business Information:</strong> Name, address, email, phone
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Client Information:</strong> Who you are billing
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Invoice Date:</strong> When the invoice was created
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Payment Due Date:</strong> When payment is expected
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Itemized Services:</strong> Detailed list with quantities and prices
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Total Amount Due:</strong> Including taxes
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Payment Terms:</strong> How and when to pay
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Step-by-Step: How to Create an Invoice
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 1: Choose an Invoice Generator
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The easiest way to create professional invoices is using a free invoice generator. This eliminates the need for complicated software or design skills.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 2: Add Your Business Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Include your complete business details at the top of the invoice: business name, address, email, phone number, and website.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 3: Enter Client Details
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Add your client information: name or company name, billing address, and email address.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 4: List Your Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Create a detailed itemized list of what you are billing for. Include description, quantity, rate, and total amount for each item.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 5: Add Payment Terms
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Be clear about payment expectations: due date, accepted payment methods, and any late fees.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Tips to Get Paid Faster
            </h2>

            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>Send invoices immediately after completing work</li>
              <li>Offer multiple payment options</li>
              <li>Set clear payment terms upfront</li>
              <li>Consider early payment discounts</li>
              <li>Follow up promptly on overdue invoices</li>
              <li>Require deposits for large projects</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Ready to Create Your Professional Invoice?
              </h3>
              <p className="text-blue-800 text-lg mb-6">
                Use our free invoice generator to create professional invoices in seconds. No signup required, instant PDF download.
              </p>
              <Link 
                href="/invoice"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
              >
                Create Free Invoice Now
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