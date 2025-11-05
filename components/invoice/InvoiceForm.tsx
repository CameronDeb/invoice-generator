'use client';

import { InvoiceData, InvoiceItem } from '@/lib/types';
import { Plus, Trash2 } from 'lucide-react';

interface InvoiceFormProps {
  invoiceData: InvoiceData;
  setInvoiceData: (data: InvoiceData) => void;
}

export default function InvoiceForm({ invoiceData, setInvoiceData }: InvoiceFormProps) {
  const updateField = (section: 'from' | 'to', field: string, value: string) => {
    setInvoiceData({
      ...invoiceData,
      [section]: {
        ...invoiceData[section],
        [field]: value,
      },
    });
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    const updatedItems = invoiceData.items.map((item) => {
      if (item.id === id) {
        const updated = { ...item, [field]: value };
        if (field === 'quantity' || field === 'rate') {
          updated.amount = updated.quantity * updated.rate;
        }
        return updated;
      }
      return item;
    });

    const subtotal = updatedItems.reduce((sum, item) => sum + item.amount, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    setInvoiceData({
      ...invoiceData,
      items: updatedItems,
      subtotal,
      tax,
      total,
    });
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [
        ...invoiceData.items,
        {
          id: Date.now().toString(),
          description: '',
          quantity: 1,
          rate: 0,
          amount: 0,
        },
      ],
    });
  };

  const removeItem = (id: string) => {
    if (invoiceData.items.length === 1) return;
    
    const updatedItems = invoiceData.items.filter((item) => item.id !== id);
    const subtotal = updatedItems.reduce((sum, item) => sum + item.amount, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    setInvoiceData({
      ...invoiceData,
      items: updatedItems,
      subtotal,
      tax,
      total,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Invoice Details</h2>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Invoice Number</label>
          <input
            type="text"
            value={invoiceData.invoiceNumber}
            onChange={(e) => setInvoiceData({ ...invoiceData, invoiceNumber: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            value={invoiceData.date}
            onChange={(e) => setInvoiceData({ ...invoiceData, date: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">From (Your Details)</h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name / Business Name"
            value={invoiceData.from.name}
            onChange={(e) => updateField('from', 'name', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={invoiceData.from.email}
            onChange={(e) => updateField('from', 'email', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone"
            value={invoiceData.from.phone}
            onChange={(e) => updateField('from', 'phone', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <textarea
            placeholder="Address"
            value={invoiceData.from.address}
            onChange={(e) => updateField('from', 'address', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            rows={2}
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Bill To (Client Details)</h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Client Name / Business Name"
            value={invoiceData.to.name}
            onChange={(e) => updateField('to', 'name', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Client Email"
            value={invoiceData.to.email}
            onChange={(e) => updateField('to', 'email', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <textarea
            placeholder="Client Address"
            value={invoiceData.to.address}
            onChange={(e) => updateField('to', 'address', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            rows={2}
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Items / Services</h3>
        {invoiceData.items.map((item, index) => (
          <div key={item.id} className="mb-4 p-4 border rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <span className="font-medium">Item {index + 1}</span>
              {invoiceData.items.length > 1 && (
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Description"
                value={item.description}
                onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="number"
                  placeholder="Qty"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border rounded-lg"
                  min="1"
                />
                <input
                  type="number"
                  placeholder="Rate"
                  value={item.rate}
                  onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border rounded-lg"
                  min="0"
                  step="0.01"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={item.amount.toFixed(2)}
                  disabled
                  className="w-full px-3 py-2 border rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={addItem}
          className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Notes / Payment Terms</label>
        <textarea
          value={invoiceData.notes}
          onChange={(e) => setInvoiceData({ ...invoiceData, notes: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
          rows={3}
          placeholder="Payment terms, thank you note, etc."
        />
      </div>
    </div>
  );
}