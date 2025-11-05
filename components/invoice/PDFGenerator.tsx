'use client';

import { InvoiceData } from '@/lib/types';
import jsPDF from 'jspdf';
import { formatCurrency } from '@/lib/utils';

export async function generatePDF(invoiceData: InvoiceData) {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  const addText = (text: string, x: number, y: number, options: any = {}) => {
    pdf.text(text, x, y, options);
  };

  // Title
  pdf.setFontSize(32);
  pdf.setTextColor(37, 99, 235);
  addText('INVOICE', margin, yPosition);
  
  yPosition += 10;
  pdf.setFontSize(10);
  pdf.setTextColor(100, 100, 100);
  addText(`#${invoiceData.invoiceNumber}`, margin, yPosition);

  // Date
  pdf.setFontSize(9);
  pdf.setTextColor(100, 100, 100);
  addText('Date', pageWidth - margin - 30, margin);
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  addText(new Date(invoiceData.date).toLocaleDateString(), pageWidth - margin - 30, margin + 5);

  yPosition += 15;

  // From Section
  pdf.setFontSize(9);
  pdf.setTextColor(100, 100, 100);
  addText('FROM', margin, yPosition);
  yPosition += 5;
  
  pdf.setFontSize(11);
  pdf.setTextColor(0, 0, 0);
  pdf.setFont('helvetica', 'bold');
  addText(invoiceData.from.name || 'Your Name', margin, yPosition);
  yPosition += 5;
  
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  if (invoiceData.from.email) {
    addText(invoiceData.from.email, margin, yPosition);
    yPosition += 4;
  }
  if (invoiceData.from.phone) {
    addText(invoiceData.from.phone, margin, yPosition);
    yPosition += 4;
  }
  if (invoiceData.from.address) {
    const addressLines = invoiceData.from.address.split('\n');
    addressLines.forEach(line => {
      addText(line, margin, yPosition);
      yPosition += 4;
    });
  }

  // To Section
  let yPositionTo = margin + 25;
  pdf.setFontSize(9);
  pdf.setTextColor(100, 100, 100);
  addText('BILL TO', pageWidth - margin - 60, yPositionTo);
  yPositionTo += 5;
  
  pdf.setFontSize(11);
  pdf.setTextColor(0, 0, 0);
  pdf.setFont('helvetica', 'bold');
  addText(invoiceData.to.name || 'Client Name', pageWidth - margin - 60, yPositionTo);
  yPositionTo += 5;
  
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  if (invoiceData.to.email) {
    addText(invoiceData.to.email, pageWidth - margin - 60, yPositionTo);
    yPositionTo += 4;
  }
  if (invoiceData.to.address) {
    const addressLines = invoiceData.to.address.split('\n');
    addressLines.forEach(line => {
      addText(line, pageWidth - margin - 60, yPositionTo);
      yPositionTo += 4;
    });
  }

  yPosition = Math.max(yPosition, yPositionTo) + 10;

  // Table Header
  pdf.setFillColor(240, 240, 240);
  pdf.rect(margin, yPosition, pageWidth - 2 * margin, 8, 'F');
  
  pdf.setFontSize(9);
  pdf.setTextColor(0, 0, 0);
  pdf.setFont('helvetica', 'bold');
  addText('DESCRIPTION', margin + 2, yPosition + 5);
  addText('QTY', pageWidth - margin - 60, yPosition + 5);
  addText('RATE', pageWidth - margin - 40, yPosition + 5);
  addText('AMOUNT', pageWidth - margin - 20, yPosition + 5, { align: 'right' });
  
  yPosition += 10;

  // Items
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  invoiceData.items.forEach((item) => {
    if (yPosition > pageHeight - 60) {
      pdf.addPage();
      yPosition = margin;
    }

    addText(item.description || 'Service/Product', margin + 2, yPosition);
    addText(item.quantity.toString(), pageWidth - margin - 60, yPosition);
    addText(formatCurrency(item.rate), pageWidth - margin - 40, yPosition);
    addText(formatCurrency(item.amount), pageWidth - margin - 2, yPosition, { align: 'right' });
    
    yPosition += 6;
    pdf.setDrawColor(220, 220, 220);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 4;
  });

  yPosition += 5;

  // Totals
  const totalsX = pageWidth - margin - 60;
  pdf.setFontSize(9);
  
  addText('Subtotal', totalsX, yPosition);
  addText(formatCurrency(invoiceData.subtotal), pageWidth - margin - 2, yPosition, { align: 'right' });
  yPosition += 5;
  
  addText('Tax (10%)', totalsX, yPosition);
  addText(formatCurrency(invoiceData.tax), pageWidth - margin - 2, yPosition, { align: 'right' });
  yPosition += 7;
  
  pdf.setDrawColor(0, 0, 0);
  pdf.setLineWidth(0.5);
  pdf.line(totalsX - 5, yPosition - 2, pageWidth - margin, yPosition - 2);
  
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(11);
  addText('Total', totalsX, yPosition + 3);
  pdf.setTextColor(37, 99, 235);
  addText(formatCurrency(invoiceData.total), pageWidth - margin - 2, yPosition + 3, { align: 'right' });
  
  yPosition += 15;

  // Notes
  if (invoiceData.notes) {
    pdf.setDrawColor(220, 220, 220);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.setFont('helvetica', 'bold');
    addText('NOTES', margin, yPosition);
    yPosition += 5;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    const noteLines = pdf.splitTextToSize(invoiceData.notes, pageWidth - 2 * margin);
    noteLines.forEach((line: string) => {
      addText(line, margin, yPosition);
      yPosition += 4;
    });
  }

  // Footer
  pdf.setFontSize(8);
  pdf.setTextColor(180, 180, 180);
  addText('Created with InvoiceQuick - Free Invoice Generator', pageWidth / 2, pageHeight - 10, { align: 'center' });

  pdf.save(`invoice-${invoiceData.invoiceNumber}.pdf`);
}