import React from 'react';
import PageHero from '../components/ui/PageHero';
import { IndianRupee, Info, CheckCircle2, Download } from 'lucide-react';

const feeData = [
  {
    level: 'Pre-Primary (Nursery – KG)',
    grades: 'Nursery, LKG, UKG',
    color: 'bg-green-500',
    rows: [
      { label: 'Admission Fee (One-time)', amount: '₹ 8,000', note: 'Non-refundable' },
      { label: 'Annual Charges', amount: '₹ 12,000', note: 'Payable once a year' },
      { label: 'Tuition Fee (Monthly)', amount: '₹ 2,800', note: 'Apr – Mar' },
      { label: 'Transport Fee (Monthly)', amount: '₹ 1,500', note: 'Optional' },
    ],
  },
  {
    level: 'Primary (Grade I – V)',
    grades: 'Class I, II, III, IV, V',
    color: 'bg-primary',
    rows: [
      { label: 'Admission Fee (One-time)', amount: '₹ 10,000', note: 'Non-refundable' },
      { label: 'Annual Charges', amount: '₹ 15,000', note: 'Payable once a year' },
      { label: 'Tuition Fee (Monthly)', amount: '₹ 3,200', note: 'Apr – Mar' },
      { label: 'Transport Fee (Monthly)', amount: '₹ 1,500', note: 'Optional' },
    ],
  },
  {
    level: 'Middle (Grade VI – VIII)',
    grades: 'Class VI, VII, VIII',
    color: 'bg-sky-500',
    rows: [
      { label: 'Admission Fee (One-time)', amount: '₹ 10,000', note: 'Non-refundable' },
      { label: 'Annual Charges', amount: '₹ 18,000', note: 'Payable once a year' },
      { label: 'Tuition Fee (Monthly)', amount: '₹ 3,800', note: 'Apr – Mar' },
      { label: 'Transport Fee (Monthly)', amount: '₹ 1,500', note: 'Optional' },
    ],
  },
  {
    level: 'Senior (Grade IX – XII)',
    grades: 'Class IX, X, XI, XII',
    color: 'bg-accent',
    rows: [
      { label: 'Admission Fee (One-time)', amount: '₹ 12,000', note: 'Non-refundable' },
      { label: 'Annual Charges', amount: '₹ 22,000', note: 'Payable once a year' },
      { label: 'Tuition Fee (Monthly)', amount: '₹ 4,500', note: 'Apr – Mar' },
      { label: 'Transport Fee (Monthly)', amount: '₹ 1,500', note: 'Optional' },
    ],
  },
];

const notes = [
  'All fees are subject to revision at the beginning of each academic session.',
  'Transport facility is optional and subject to route availability.',
  'Sibling concession of 10% on tuition fee is available from the second child.',
  'Fee once paid is non-refundable except in exceptional circumstances at the management\'s discretion.',
  'Defaulters in fee payment may result in the student\'s name being struck off the rolls.',
];

export default function FeeStructure() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Fee Structure"
        subtitle="Transparent and straightforward fee details for the academic year 2025-26."
      />

      <section className="py-12 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Note banner */}
          <div className="flex items-start gap-3 bg-gold/10 border border-gold/30 rounded-2xl p-5 mb-14">
            <Info size={20} className="text-gold flex-shrink-0 mt-0.5" />
            <p className="font-body text-navy/80 text-sm leading-relaxed">
              The fee structure below is indicative for the session 2025-26.
              For the most updated figures, please contact the school office or refer to the official fee receipt.
              All amounts are in Indian Rupees (₹).
            </p>
          </div>

          {/* Fee Tables */}
          <div className="grid md:grid-cols-2 gap-8">
            {feeData.map((tier, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`${tier.color} px-7 py-5 text-white`}>
                  <div className="flex items-center gap-3">
                    <IndianRupee size={22} />
                    <div>
                      <h3 className="font-heading font-bold text-xl">{tier.level}</h3>
                      <p className="font-body text-white/70 text-sm">{tier.grades}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-100">
                      {tier.rows.map((row, j) => (
                        <tr key={j}>
                          <td className="py-3 font-body text-navy/80 text-sm">{row.label}</td>
                          <td className="py-3 font-heading font-bold text-navy text-right">{row.amount}</td>
                          <td className="py-3 font-body text-gray-400 text-xs text-right pl-3 hidden sm:table-cell">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-14 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="font-heading font-bold text-xl text-navy mb-6">Important Notes</h3>
            <ul className="space-y-3">
              {notes.map((note, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-navy/70 text-sm">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full shadow-md hover:bg-navy transition-colors hover:-translate-y-0.5 transform">
              <Download size={18} />
              Download Fee Schedule (PDF)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
