'use client';

import { InvoiceData } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { Download } from 'lucide-react';
import { generatePDF } from './PDFGenerator';

interface InvoicePreviewProps {
  invoiceData: InvoiceData;
}

export default function InvoicePreview({ invoiceData }: InvoicePreviewProps) {
  const handleDownloadPDF = () => {
    generatePDF(invoiceData);
  };

  return (
    <div className="sticky top-8">
      <div className="bg-white rounded-lg shadow-lg p-8" id="invoice-preview">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-2">INVOICE</h1>
            <p className="text-gray-600">#{invoiceData.invoiceNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Date</p>
            <p className="font-semibold">{new Date(invoiceData.date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">FROM</p>
            <div className="text-gray-800">
              <p className="font-bold text-lg">{invoiceData.from.name || 'Your Name'}</p>
              <p className="text-sm">{invoiceData.from.email}</p>
              <p className="text-sm">{invoiceData.from.phone}</p>
              <p className="text-sm whitespace-pre-line">{invoiceData.from.address}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">BILL TO</p>
            <div className="text-gray-800">
              <p className="font-bold text-lg">{invoiceData.to.name || 'Client Name'}</p>
              <p className="text-sm">{invoiceData.to.email}</p>
              <p className="text-sm whitespace-pre-line">{invoiceData.to.address}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 text-sm font-semibold text-gray-700">DESCRIPTION</th>
                <th className="text-center py-3 text-sm font-semibold text-gray-700">QTY</th>
                <th className="text-right py-3 text-sm font-semibold text-gray-700">RATE</th>
                <th className="text-right py-3 text-sm font-semibold text-gray-700">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-3 text-sm">{item.description || 'Service/Product'}</td>
                  <td className="text-center py-3 text-sm">{item.quantity}</td>
                  <td className="text-right py-3 text-sm">{formatCurrency(item.rate)}</td>
                  <td className="text-right py-3 text-sm font-semibold">{formatCurrency(item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between py-2 text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{formatCurrency(invoiceData.subtotal)}</span>
            </div>
            <div className="flex justify-between py-2 text-sm">
              <span className="text-gray-600">Tax (10%)</span>
              <span className="font-semibold">{formatCurrency(invoiceData.tax)}</span>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-300">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg text-blue-600">{formatCurrency(invoiceData.total)}</span>
            </div>
          </div>
        </div>

        {invoiceData.notes && (
          <div className="border-t pt-6">
            <p className="text-sm font-semibold text-gray-600 mb-2">NOTES</p>
            <p className="text-sm text-gray-700 whitespace-pre-line">{invoiceData.notes}</p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-xs text-gray-400">Created with InvoiceQuick - Free Invoice Generator</p>
        </div>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
      >
        <Download className="w-5 h-5" />
        Download PDF Invoice
      </button>

      <div className="mt-4 text-center text-sm text-gray-500">
        <p>💡 Want to remove the watermark and save templates?</p>
        <button className="text-blue-600 hover:underline mt-1">
          Upgrade to Pro - $9/month
        </button>
      </div>
    </div>
  );
}