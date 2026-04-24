import React from 'react';
import PageHero from '../components/ui/PageHero';
import { Shield, Lock, Eye, UserCheck, FileText } from 'lucide-react';

const sections = [
  {
    icon: Eye,
    title: '1. Information We Collect',
    content: `We may collect personal information that you voluntarily provide when you:
• Submit an admission enquiry form on this website.
• Contact us via email or phone.
• Sign up for school notifications or newsletters.

This information may include your name, email address, phone number, and your child's details for admission purposes.`,
  },
  {
    icon: Lock,
    title: '2. How We Use Your Information',
    content: `The information collected is used solely to:
• Respond to admission enquiries and communicate about the school.
• Send important school notices and event updates to parents.
• Improve our website experience.

We do not sell, trade, or rent your personal data to third parties.`,
  },
  {
    icon: Shield,
    title: '3. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses SSL encryption for all data transmissions.`,
  },
  {
    icon: UserCheck,
    title: '4. Your Rights',
    content: `You have the right to:
• Request access to the personal data we hold about you.
• Request corrections to inaccurate data.
• Request deletion of your personal data, subject to our legal obligations.

To exercise these rights, please contact us at info@mmpublicschool.edu.in.`,
  },
  {
    icon: FileText,
    title: '5. Cookies',
    content: `Our website may use essential cookies to improve your browsing experience. These cookies do not collect personally identifiable information and are not used for advertising purposes. You can disable cookies in your browser settings.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Privacy Policy & Terms of Use"
        subtitle="Your privacy is important to us. This policy outlines how M M Public School collects, uses, and protects your information."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm mb-8">
            <p className="font-body text-navy/60 leading-relaxed">
              <strong className="text-navy">Last Updated: April 2025</strong><br /><br />
              This Privacy Policy describes how M M Public School ("we", "our", or "the school") collects,
              uses, and shares information about you when you use our website at{' '}
              <a href="https://mmpsrebrand.netlify.app" className="text-accent hover:underline">mmpsrebrand.netlify.app</a>{' '}
              and any related services. By using our website, you agree to the practices described in this policy.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((sec, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <sec.icon size={20} className="text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-navy">{sec.title}</h2>
                </div>
                <p className="font-body text-navy/70 leading-relaxed whitespace-pre-line text-sm">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* Terms of Use */}
          <div className="mt-8 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="font-heading font-bold text-xl text-navy mb-5">6. Terms of Use</h2>
            <div className="space-y-3 font-body text-navy/70 text-sm leading-relaxed">
              <p>By accessing this website, you agree to use it for lawful purposes only. You must not misuse the website by introducing viruses, attempting unauthorized access, or engaging in any conduct that is harmful or disruptive.</p>
              <p>All content on this website — including text, images, logos, and design — is the intellectual property of M M Public School. Reproduction without prior written consent is prohibited.</p>
              <p>The school reserves the right to modify these terms at any time. Continued use of the website following any changes constitutes your acceptance of the revised terms.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 bg-navy rounded-3xl p-8 text-white">
            <h2 className="font-heading font-bold text-xl mb-3">7. Contact Us About This Policy</h2>
            <p className="font-body text-white/60 text-sm mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact:
            </p>
            <div className="font-body text-sm space-y-1 text-white/80">
              <p><strong className="text-gold">M M Public School</strong></p>
              <p>Sector 4, Gurugram, Haryana – 122001</p>
              <p>Email: <a href="mailto:info@mmpublicschool.edu.in" className="text-gold hover:underline">info@mmpublicschool.edu.in</a></p>
              <p>Phone: <a href="tel:+919310953788" className="text-gold hover:underline">+91 93109 53788</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
