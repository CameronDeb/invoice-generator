import Link from 'next/link';

export const metadata = {
  title: 'How to Create an Invoice in 2024 - Free Guide',
  description: 'Learn how to create professional invoices step by step. Free invoice templates and tips for freelancers and small businesses.',
};

export default function HowToCreateInvoice() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Create an Invoice in 2024
          </h1>
          
          <p className="text-gray-600 mb-8">
            A complete guide to creating professional invoices for your freelance business or small company.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2>What is an Invoice?</h2>
            <p>
              An invoice is a document sent by a seller to a buyer that lists the products or services 
              provided and the amount owed. It's essential for getting paid and maintaining financial records.
            </p>

            <h2>Essential Elements of an Invoice</h2>
            <ul>
              <li><strong>Invoice number</strong> - A unique identifier for tracking</li>
              <li><strong>Your business information</strong> - Name, address, contact details</li>
              <li><strong>Client information</strong> - Who you're billing</li>
              <li><strong>Date issued</strong> - When the invoice was created</li>
              <li><strong>Payment due date</strong> - When payment is expected</li>
              <li><strong>Itemized list</strong> - Services or products with prices</li>
              <li><strong>Total amount due</strong> - Including any taxes</li>
              <li><strong>Payment terms</strong> - How and when to pay</li>
            </ul>

            <h2>How to Create an Invoice (Step by Step)</h2>
            
            <h3>Step 1: Use an Invoice Generator</h3>
            <p>
              The easiest way to create professional invoices is using a free invoice generator. 
              This eliminates the need for complicated software or design skills.
            </p>

            <h3>Step 2: Add Your Business Details</h3>
            <p>
              Include your business name, address, email, and phone number. This helps clients 
              know who the invoice is from and how to contact you.
            </p>

            <h3>Step 3: Add Client Information</h3>
            <p>
              Enter your client's name, company name (if applicable), and contact information.
            </p>

            <h3>Step 4: List Your Services</h3>
            <p>
              Create a detailed list of services or products provided. Include quantity, rate, 
              and total for each line item.
            </p>

            <h3>Step 5: Add Payment Terms</h3>
            <p>
              Specify when payment is due (e.g., "Net 30" means payment within 30 days) and 
              accepted payment methods.
            </p>

            <h3>Step 6: Download and Send</h3>
            <p>
              Download your invoice as a PDF and send it to your client via email.
            </p>

            <h2>Tips for Getting Paid Faster</h2>
            <ul>
              <li>Send invoices immediately after completing work</li>
              <li>Make payment terms clear upfront</li>
              <li>Offer multiple payment methods</li>
              <li>Follow up on overdue invoices professionally</li>
              <li>Consider offering early payment discounts</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Ready to Create Your Invoice?
              </h3>
              <p className="text-blue-800 mb-4">
                Use our free invoice generator to create professional invoices in seconds.
              </p>
              <Link 
                href="/invoice"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Create Free Invoice
              </Link>
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}