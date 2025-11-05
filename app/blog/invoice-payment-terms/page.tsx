import Link from 'next/link';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Invoice Payment Terms Guide 2024 - Net 30, Net 60, Due on Receipt',
  description: 'Complete guide to invoice payment terms. Learn about Net 30, Net 60, and how to choose the right payment terms to get paid faster.',
  keywords: 'invoice payment terms, net 30, net 60, payment terms freelance, invoice due date',
};

export default function InvoicePaymentTerms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Invoice Payment Terms: Complete Guide
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
            <span>November 4, 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Understanding invoice payment terms is crucial for getting paid on time. This guide covers everything you need to know about choosing the right payment terms.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-yellow-900 font-semibold mb-2">
                    Key Takeaway
                  </p>
                  <p className="text-yellow-800">
                    The most common payment term is Net 30 (payment due within 30 days). However, faster terms like Net 15 can significantly improve your cash flow.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Are Invoice Payment Terms?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Invoice payment terms specify when payment is due and what payment methods are acceptable. Clear payment terms help prevent delays and misunderstandings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Common Payment Terms
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Due on Receipt
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is expected immediately when the invoice is received.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Small transactions, one-time services, new clients
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 15
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 15 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Businesses needing fast cash flow
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 30 - MOST COMMON
            </h3>
            <div className="bg-blue-50 rounded-lg p-6 my-6 border-2 border-blue-200">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 30 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why it is popular:</strong> This is the industry standard for B2B transactions.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Most professional services, B2B transactions, established relationships
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 60 and Net 90
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Large enterprise clients, government contracts, very large projects
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Warning:</strong> Only agree to these terms if you have strong cash reserves.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Choose Payment Terms
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Consider these factors:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Your cash flow needs</li>
              <li>Industry standards</li>
              <li>Client size and type</li>
              <li>Project size</li>
              <li>Client payment history</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Best Practices
            </h2>

            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>Put payment terms in writing on every invoice</li>
              <li>Discuss terms upfront before starting work</li>
              <li>Be specific with exact dates or number of days</li>
              <li>Include late fees if applicable</li>
              <li>Offer multiple payment methods</li>
              <li>Send reminders before the due date</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Create Invoices with Clear Payment Terms
              </h3>
              <p className="text-blue-800 text-lg mb-6">
                Use our free invoice generator to create invoices with professional payment terms. Automatic due date calculations included.
              </p>
              <Link 
                href="/invoice"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
              >
                Create Invoice with Payment Terms
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