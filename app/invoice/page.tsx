import InvoiceGenerator from '@/components/invoice/InvoiceGenerator';

export const metadata = {
  title: 'Create Invoice - Free Invoice Generator',
  description: 'Fill in your details and create a professional invoice in seconds. Download as PDF.',
};

export default function InvoicePage() {
  return <InvoiceGenerator />;
}