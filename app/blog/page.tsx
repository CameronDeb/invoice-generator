import Link from 'next/link';
import { FileText, Clock, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Invoice Tips & Templates - Free Resources for Freelancers | InvoiceQuick Blog',
  description: 'Learn how to create professional invoices, manage payments, and grow your freelance business with our free guides and templates.',
};

const blogPosts = [
  {
    slug: 'how-to-create-invoice',
    title: 'How to Create a Professional Invoice in 2024',
    description: 'Complete step-by-step guide to creating invoices that get you paid faster.',
    date: 'November 4, 2024',
    readTime: '8 min read',
    icon: FileText,
  },
  {
    slug: 'free-invoice-templates',
    title: '10 Free Invoice Templates for Every Industry',
    description: 'Download professional invoice templates for freelancers, consultants, and small businesses.',
    date: 'November 4, 2024',
    readTime: '6 min read',
    icon: TrendingUp,
  },
  {
    slug: 'invoice-payment-terms',
    title: 'Invoice Payment Terms: Complete Guide for Freelancers',
    description: 'Learn about Net 30, Net 60, and other payment terms to get paid on time.',
    date: 'November 4, 2024',
    readTime: '7 min read',
    icon: Clock,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Invoice Tips & Resources
          </h1>
          <p className="text-xl text-gray-600">
            Free guides, templates, and tips to help you get paid faster
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
              >
                <IconComponent className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Invoice?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Use our free invoice generator - no signup required
          </p>
          <Link
            href="/invoice"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Create Free Invoice
          </Link>
        </div>
      </div>
    </div>
  );
}