import Link from 'next/link';
import { ArrowRight, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Invoice Payment Terms Guide 2024 - Net 30, Net 60, Due on Receipt',
  description: 'Complete guide to invoice payment terms. Learn about Net 30, Net 60, due on receipt, and how to choose the right payment terms to get paid faster.',
  keywords: 'invoice payment terms, net 30, net 60, payment terms freelance, invoice due date, payment conditions',
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
            Invoice Payment Terms: Complete Guide for Freelancers
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
            <span>November 4, 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Understanding invoice payment terms is crucial for getting paid on time. Whether you're a 
              freelancer, consultant, or small business owner, choosing the right payment terms can significantly 
              impact your cash flow and client relationships.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-yellow-900 font-semibold mb-2">
                    Key Takeaway
                  </p>
                  <p className="text-yellow-800">
                    The most common payment term is "Net 30" (payment due within 30 days). However, 
                    faster payment terms like "Due on Receipt" or "Net 15" can significantly improve 
                    your cash flow.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Are Invoice Payment Terms?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Invoice payment terms are the conditions under which a seller will complete a sale. They 
              specify when payment is due and what payment methods are acceptable. Clear payment terms 
              help prevent payment delays and misunderstandings with clients.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Common Invoice Payment Terms Explained
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Due on Receipt (Immediate Payment)
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is expected immediately when the invoice is received.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Small transactions</li>
                <li>One-time service providers</li>
                <li>New clients with no payment history</li>
                <li>Cash-on-delivery services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Pros:</strong> Fastest payment, best cash flow
              </p>
              <p className="text-gray-700">
                <strong>Cons:</strong> May discourage some clients, not standard for B2B
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 7 (Payment Due in 7 Days)
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 7 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Quick turnaround projects</li>
                <li>Businesses needing fast cash flow</li>
                <li>Small to medium-sized invoices</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Pros:</strong> Quick payment, reasonable timeline
              </p>
              <p className="text-gray-700">
                <strong>Cons:</strong> Requires prompt client action
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 10 (Payment Due in 10 Days)
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 10 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Businesses with good client relationships</li>
                <li>Time-sensitive projects</li>
                <li>Consultants and freelancers</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Pros:</strong> Balances speed with client flexibility
              </p>
              <p className="text-gray-700">
                <strong>Cons:</strong> Still requires fast client processing
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 15 (Payment Due in 15 Days)
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 15 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Freelancers wanting faster payment than Net 30</li>
                <li>Medium-sized projects</li>
                <li>Professional services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Pros:</strong> Faster than standard terms, reasonable for clients
              </p>
              <p className="text-gray-700">
                <strong>Cons:</strong> May not work for larger corporate clients
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 30 (Payment Due in 30 Days) - MOST COMMON
            </h3>
            <div className="bg-blue-50 rounded-lg p-6 my-6 border-2 border-blue-200">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 30 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why it's popular:</strong> This is the industry standard for B2B transactions and 
                what most businesses expect.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Most professional services</li>
                <li>B2B transactions</li>
                <li>Established client relationships</li>
                <li>Larger projects and contracts</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Pros:</strong> Widely accepted, gives clients time to process
              </p>
              <p className="text-gray-700">
                <strong>Cons:</strong> Longest wait for payment among common terms
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 45 (Payment Due in 45 Days)
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 45 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Large corporate clients</li>
                <li>Government contracts</li>
                <li>When negotiated as part of contract</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Pros:</strong> May be necessary for certain clients
              </p>
              <p className="text-gray-700">
                <strong>Cons:</strong> Significant cash flow impact
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 60 (Payment Due in 60 Days)
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 60 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Large enterprise clients</li>
                <li>Government agencies</li>
                <li>Very large contracts</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Pros:</strong> May be required by certain clients
              </p>
              <p className="text-gray-700">
                <strong>Cons:</strong> Significant cash flow challenges, 2-month wait
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Net 90 (Payment Due in 90 Days)
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is due within 90 days of the invoice date.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Very large projects (typically $50k+)</li>
                <li>Major corporate clients</li>
                <li>International contracts</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Warning:</strong> Only agree to Net 90 if you have strong cash reserves and the 
                client is extremely trustworthy.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Advanced Payment Terms
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2/10 Net 30 (Early Payment Discount)
            </h3>
            <div className="bg-green-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Client gets a 2% discount if they pay within 10 days, 
                otherwise full payment is due in 30 days.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Example:</strong> $1,000 invoice
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pay within 10 days: $980 (save $20)</li>
                <li>Pay within 30 days: $1,000 (full amount)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>When to use:</strong> When you want to incentivize faster payment
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              50% Deposit, 50% on Completion
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Client pays half upfront before work begins, and the 
                remaining half upon project completion.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Large projects</li>
                <li>New clients</li>
                <li>Custom work or products</li>
                <li>Projects with significant upfront costs</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Pros:</strong> Protects cash flow, reduces risk
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Milestone Payments
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Payment is split across project phases or milestones.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Example:</strong> $10,000 project
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>25% ($2,500) - Contract signing</li>
                <li>25% ($2,500) - Design approval</li>
                <li>25% ($2,500) - Development complete</li>
                <li>25% ($2,500) - Final delivery</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Retainer Agreement
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 mb-4">
                <strong>What it means:</strong> Client pays a fixed monthly fee for ongoing services.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Payment terms:</strong> Usually due on the 1st of each month
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ongoing consulting</li>
                <li>Monthly maintenance</li>
                <li>Regular services (bookkeeping, marketing, etc.)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How to Choose the Right Payment Terms
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Consider these factors when setting your payment terms:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">1. Your Cash Flow Needs</h4>
                <p className="text-gray-700">
                  If you need money quickly for business expenses, choose shorter terms like Net 15 
                  or Due on Receipt. If you have strong reserves, Net 30 is fine.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">2. Industry Standards</h4>
                <p className="text-gray-700">
                  Research what's standard in your industry. Net 30 is common for most professional 
                  services, but some industries (like creative work) often use 50% deposits.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">3. Client Size and Type</h4>
                <p className="text-gray-700">
                  Large corporations usually require Net 30, 60, or even 90. Small businesses and 
                  individuals are often flexible with shorter terms.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">4. Project Size</h4>
                <p className="text-gray-700">
                  Larger projects often warrant milestone payments or deposits to protect both parties. 
                  Small projects can use simpler terms.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">5. Client History</h4>
                <p className="text-gray-700">
                  New clients: Consider deposits or shorter terms. Established clients with good 
                  payment history: Standard terms are fine.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Best Practices for Payment Terms
            </h2>

            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Put it in writing:</strong> Always include payment terms in your contract 
                and on every invoice
              </li>
              <li>
                <strong>Discuss upfront:</strong> Talk about payment expectations before starting work
              </li>
              <li>
                <strong>Be specific:</strong> State exact dates or number of days, not vague terms like "soon"
              </li>
              <li>
                <strong>Include late fees:</strong> Specify penalties for late payment (typically 1-2% per month)
              </li>
              <li>
                <strong>Offer multiple payment methods:</strong> Make it easy for clients to pay you
              </li>
              <li>
                <strong>Send reminders:</strong> Follow up before and on the due date
              </li>
              <li>
                <strong>Be consistent:</strong> Use the same terms for similar clients and projects
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What to Include in Your Payment Terms Section
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Your invoice should clearly state:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Payment due date (specific date or "Net X days")</li>
              <li>Accepted payment methods (bank transfer, credit card, PayPal, check, etc.)</li>
              <li>Where to send payment (account details, payment links, etc.)</li>
              <li>Late payment fees (if applicable)</li>
              <li>Currency (if working internationally)</li>
              <li>Early payment discounts (if offering)</li>
            </ul>

            <div className="bg-gray-100 rounded-lg p-6 my-8 font-mono text-sm">
              <p className="font-bold mb-4">Example Payment Terms Section:</p>
              <p className="mb-2">Payment Terms: Net 30</p>
              <p className="mb-2">Payment Due: December 4, 2024</p>
              <p className="mb-2">Late Fee: 1.5% per month on overdue balance</p>
              <p className="mb-2">Accepted Methods: Bank transfer, Credit Card, PayPal</p>
              <p>Early Payment Discount: 2% if paid within 10 days</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Dealing with Late Payments
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              When clients miss payment deadlines:
            </p>

            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Day 1-7 overdue:</strong> Send a friendly reminder email. Sometimes clients 
                simply forget or the invoice got lost.
              </li>
              <li>
                <strong>Day 7-14 overdue:</strong> Send a more direct follow-up. Include the original 
                invoice and emphasize the due date has passed.
              </li>
              <li>
                <strong>Day 14-30 overdue:</strong> Make a phone call. Be professional but firm about 
                needing payment.
              </li>
              <li>
                <strong>30+ days overdue:</strong> Send a formal demand letter. Mention late fees if 
                applicable. Consider pausing work on any ongoing projects.
              </li>
              <li>
                <strong>60+ days overdue:</strong> Consider collections or legal action for significant 
                amounts.
              </li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Create Professional Invoices with Clear Payment Terms
              </h3>
              <p className="text-blue-800 text-lg mb-6">
                Use our free invoice generator to create invoices with professional payment terms. 
                Automatic due date calculations and professional formatting included.
              </p>
              <Link 
                href="/invoice"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
              >
                Create Invoice with Payment Terms
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What's the difference between Net 30 and 30 days?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  They mean the same thing - payment is due 30 days after the invoice date. "Net 30" 
                  is simply the industry-standard terminology.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Can I change payment terms for different clients?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, you can offer different terms based on client size, relationship, project type, 
                  or other factors. Just be consistent within each client relationship.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Are late fees legal?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, in most jurisdictions you can charge reasonable late fees (typically 1-2% per month), 
                  but you must specify this in your contract or payment terms before providing services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Should I require deposits for all projects?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Deposits are recommended for: new clients, large projects (over $5,000), custom work, 
                  or projects with significant upfront costs. For small projects with established clients, 
                  they may not be necessary.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What if a client asks for Net 90 but I need money faster?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Try to negotiate shorter terms (Net 30 or 45), or ask for milestone payments. If the 
                  client insists on Net 90, you might need to factor that into your pricing or consider 
                  if the project is worth the cash flow impact.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Recommended Payment Terms by Business Type
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold text-gray-900">Freelance Writers/Designers:</p>
                <p className="text-gray-700">Net 15 or Net 30, or 50% upfront for new clients</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold text-gray-900">Consultants:</p>
                <p className="text-gray-700">Net 30, or monthly retainer (due on 1st of month)</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold text-gray-900">Contractors (Construction, etc.):</p>
                <p className="text-gray-700">Milestone payments: 25-50% deposit, progress payments, final payment on completion</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold text-gray-900">Photographers/Videographers:</p>
                <p className="text-gray-700">50% deposit, 50% before delivery of final files</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold text-gray-900">Software Developers:</p>
                <p className="text-gray-700">Milestone payments (25% per major milestone), or monthly retainer</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-bold text-gray-900">Service Providers (Cleaning, etc.):</p>
                <p className="text-gray-700">Due on Receipt or Net 7 for one-time services, monthly billing for recurring</p>
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