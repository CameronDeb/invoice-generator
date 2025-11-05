import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'How to Create a Professional Invoice in 2024 - Complete Guide',
  description: 'Learn how to create professional invoices step-by-step. Includes free templates, best practices, and tips to get paid faster. Perfect for freelancers and small businesses.',
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
              Creating professional invoices is essential for getting paid on time. Whether you're a freelancer, 
              consultant, or small business owner, this complete guide will show you exactly how to create 
              invoices that look professional and get results.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What is an Invoice?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              An invoice is a commercial document that itemizes a transaction between a buyer and seller. 
              It serves as a request for payment and includes details about products or services provided, 
              amounts owed, and payment terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Essential Elements Every Invoice Must Have
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Invoice Number:</strong> A unique identifier for tracking and organization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Your Business Information:</strong> Name, address, email, phone number
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Client Information:</strong> Who you're billing and their contact details
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
                    <strong className="text-gray-900">Total Amount Due:</strong> Including taxes and any discounts
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
              Step 1: Choose an Invoice Generator or Template
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The easiest way to create professional invoices is using a free invoice generator. This eliminates 
              the need for complicated software or design skills. You can create invoices in minutes instead of hours.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Alternatively, you can use invoice templates in Word or Excel, but these require more manual work 
              and are harder to customize.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 2: Add Your Business Information
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Include your complete business details at the top of the invoice:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>Business name or your full name</li>
              <li>Business address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Website (optional)</li>
              <li>Tax ID or business registration number (if applicable)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 3: Enter Client Details
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Add your client's information clearly:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>Client name or company name</li>
              <li>Billing address</li>
              <li>Email address</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 4: List Your Services or Products
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Create a detailed, itemized list of what you're billing for. For each item include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li><strong>Description:</strong> Clear explanation of the service or product</li>
              <li><strong>Quantity:</strong> How many units or hours</li>
              <li><strong>Rate:</strong> Price per unit or hourly rate</li>
              <li><strong>Amount:</strong> Total for that line item (quantity × rate)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 5: Calculate Totals
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Add up your invoice totals:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li><strong>Subtotal:</strong> Sum of all line items</li>
              <li><strong>Tax:</strong> Apply applicable sales tax or VAT</li>
              <li><strong>Discounts:</strong> If any early payment discounts apply</li>
              <li><strong>Total Amount Due:</strong> Final amount the client owes</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 6: Add Payment Terms and Notes
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Be crystal clear about payment expectations:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>Payment due date (e.g., "Due within 30 days" or "Net 30")</li>
              <li>Accepted payment methods (bank transfer, credit card, PayPal, etc.)</li>
              <li>Late payment fees (if applicable)</li>
              <li>Thank you message or additional notes</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Step 7: Review and Send
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Before sending your invoice:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>Double-check all numbers and calculations</li>
              <li>Verify client information is correct</li>
              <li>Ensure the invoice number is unique</li>
              <li>Save a copy for your records</li>
              <li>Send as PDF (more professional than Word or Excel)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Best Practices for Professional Invoices
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do's:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Send invoices immediately after completing work</li>
                <li>✅ Use professional, consistent formatting</li>
                <li>✅ Make your invoice easy to read and understand</li>
                <li>✅ Include all necessary tax information</li>
                <li>✅ Save copies of all sent invoices</li>
                <li>✅ Follow up on overdue payments professionally</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Don'ts:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>❌ Don't use handwritten invoices for professional work</li>
                <li>❌ Don't forget to include your contact information</li>
                <li>❌ Don't use vague descriptions for services</li>
                <li>❌ Don't send invoices without proofreading</li>
                <li>❌ Don't forget to specify payment terms</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Common Invoice Types
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Standard Invoice
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The most common type - used for one-time sales or project completion.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Recurring Invoice
            </h3>
            <p className="text-gray-700 leading-relaxed">
              For ongoing services billed monthly or at regular intervals (subscriptions, retainers).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Proforma Invoice
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A preliminary invoice sent before work begins to confirm costs and terms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Credit Note
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Issued when you need to provide a refund or correct an earlier invoice.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Tips to Get Paid Faster
            </h2>

            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Send invoices immediately:</strong> Don't wait days or weeks after completing work
              </li>
              <li>
                <strong>Offer multiple payment options:</strong> Make it easy for clients to pay however they prefer
              </li>
              <li>
                <strong>Set clear payment terms upfront:</strong> Discuss payment expectations before starting work
              </li>
              <li>
                <strong>Consider early payment discounts:</strong> Offer 2-5% off for payment within 7-10 days
              </li>
              <li>
                <strong>Follow up promptly:</strong> Send friendly reminders a few days before and on the due date
              </li>
              <li>
                <strong>Require deposits:</strong> For large projects, ask for 25-50% upfront
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Invoice Numbering Systems
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A good invoice numbering system helps you stay organized. Here are common formats:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li><strong>Sequential:</strong> 001, 002, 003 (simple but reveals volume)</li>
              <li><strong>Date-based:</strong> 20241104-001 (year-month-day-number)</li>
              <li><strong>Client-based:</strong> ACME-001, ACME-002 (includes client identifier)</li>
              <li><strong>Hybrid:</strong> INV-202411-001 (invoice-year/month-sequential)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Legal Requirements for Invoices
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location and business type, invoices may need to include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Business registration number</li>
              <li>Tax identification number (TIN, VAT number, etc.)</li>
              <li>Business license number</li>
              <li>Specific tax breakdowns</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Check your local regulations or consult with an accountant to ensure compliance.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Ready to Create Your Professional Invoice?
              </h3>
              <p className="text-blue-800 text-lg mb-6">
                Use our free invoice generator to create professional invoices in seconds. 
                No signup required, instant PDF download.
              </p>
              <Link 
                href="/invoice"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
              >
                Create Free Invoice Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What's the difference between an invoice and a receipt?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  An invoice is a request for payment sent before or when services are delivered. 
                  A receipt is proof of payment given after payment has been received.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  When should I send an invoice?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Send your invoice immediately upon completing the work or delivering the product. 
                  The sooner you invoice, the sooner you get paid.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What are standard payment terms?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Common payment terms include "Due on Receipt," "Net 15" (payment due in 15 days), 
                  "Net 30" (payment due in 30 days), and "Net 60" (payment due in 60 days).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Can I charge late fees?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, but you must specify late fees in your payment terms before work begins. 
                  Typical late fees are 1-2% per month on overdue balances.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Do I need to keep copies of my invoices?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! Keep copies of all invoices for at least 7 years for tax purposes and business records. 
                  Digital copies are fine.
                </p>
              </div>
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