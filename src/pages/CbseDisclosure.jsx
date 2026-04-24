import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { FileText, Download, CheckCircle, Info } from 'lucide-react';

const disclosures = [
  { 
    title: 'A. Basic Information', 
    items: [
      { label: 'Name of the School', value: 'M M Public School' },
      { label: 'Affiliation Number', value: '530224 (Valid upto 31/03/2026)' },
      { label: 'School Code', value: '40212' },
      { label: 'Complete Address', value: 'Sector 4, Urban Estate, Gurugram, Haryana - 122001' },
      { label: 'Principal Name & Qualification', value: 'Mrs. ABC (M.A., B.Ed.)' },
      { label: 'School Email', value: 'info@mmps.edu.in' },
      { label: 'Contact Details', value: '0124-4570666' },
    ]
  },
  {
    title: 'B. Documents and Information',
    links: [
      { name: 'Affiliation/Upgradation Letter and Recent Extension of Affiliation', file: 'Affiliation_Letter.pdf' },
      { name: 'Societies/Trust/Company Registration/Renewal Certificate', file: 'Society_Registration.pdf' },
      { name: 'No Objection Certificate (NOC) issued by State Govt/UT', file: 'NOC.pdf' },
      { name: 'Building Safety Certificate as per National Building Code', file: 'Building_Safety.pdf' },
      { name: 'Fire Safety Certificate issued by the Competent Authority', file: 'Fire_Safety.pdf' },
      { name: 'Self Certification submitted by the School for Affiliation', file: 'Self_Cert.pdf' },
      { name: 'Valid Water, Health and Sanitation Certificates', file: 'Water_Sanitation.pdf' },
    ]
  }
];

export default function CbseDisclosure() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="CBSE Disclosure" 
        subtitle="Mandatory Public Disclosure in compliance with CBSE circulars to maintain transparency and accountability."
        image="/school.webp"
      />

      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 p-4 bg-primary/10 rounded-2xl text-primary font-body text-sm mb-12 border border-primary/20">
            <Info size={20} />
            Data updated as of April 2025 for Session 2025-26.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Table Area */}
            <div className="lg:col-span-12 space-y-20">
              {disclosures.map((section, idx) => (
                <div key={idx} className="group">
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-8 pl-4 border-l-4 border-accent">{section.title}</h2>
                  
                  {section.items ? (
                    <div className="bg-ivory rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-navy text-white font-heading text-xs uppercase tracking-widest">
                            <th className="px-8 py-5">Information</th>
                            <th className="px-8 py-5">Details</th>
                          </tr>
                        </thead>
                        <tbody className="font-body text-navy/70 divide-y divide-gray-200">
                          {section.items.map((item, i) => (
                            <tr key={i} className="hover:bg-white transition-colors">
                              <td className="px-8 py-5 font-bold text-navy/80">{item.label}</td>
                              <td className="px-8 py-5">{item.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.links.map((link, i) => (
                        <div key={i} className="bg-ivory rounded-2xl p-6 flex items-center justify-between border border-gray-100 hover:border-primary hover:shadow-lg transition-all group/card">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover/card:bg-primary group-hover/card:text-white transition-colors">
                              <FileText size={20} />
                            </div>
                            <span className="font-heading font-bold text-sm text-navy/80 leading-snug">{link.name}</span>
                          </div>
                          <button className="p-2 text-primary hover:text-accent transition-colors flex items-center gap-1 font-heading font-bold text-[10px] uppercase">
                            <Download size={16} />
                            <span className="hidden sm:inline">View</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>

          {/* Compliance Footer */}
          <div className="mt-12 p-10 bg-ivory rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-green-500" size={32} />
              <div>
                <h4 className="font-heading font-bold text-navy">CBSE Compliance Verified</h4>
                <p className="font-body text-xs text-navy/40">Affiliation No: 530224 | All mandatory disclosures are up to date.</p>
              </div>
            </div>
            <button className="bg-navy text-white font-heading font-bold px-8 py-3 rounded-xl hover:bg-navy-950 transition-colors">
              Contact Compliance Officer
            </button>
          </div>
          
        </div>
      </section>
    </div>
  );
}
