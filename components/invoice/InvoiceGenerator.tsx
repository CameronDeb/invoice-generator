'use client';

import { useState } from 'react';
import { InvoiceData } from '@/lib/types';
import { generateInvoiceNumber } from '@/lib/utils';
import InvoiceForm from './InvoiceForm';
import InvoicePreview from './InvoicePreview';

export default function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: generateInvoiceNumber(),
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    from: {
      name: '',
      email: '',
      address: '',
      phone: '',
    },
    to: {
      name: '',
      email: '',
      address: '',
    },
    items: [
      {
        id: '1',
        description: '',
        quantity: 1,
        rate: 0,
        amount: 0,
      },
    ],
    notes: 'Thank you for your business!',
    subtotal: 0,
    tax: 0,
    total: 0,
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Create Your Invoice</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <InvoiceForm invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
          <InvoicePreview invoiceData={invoiceData} />
        </div>
      </div>
    </div>
  );
}