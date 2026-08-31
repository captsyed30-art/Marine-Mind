import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Clock,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { CONTACT_PLACEHOLDERS } from '../data/sampleData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: 'training',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      enquiryType: 'training',
      subject: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect with Marine Mind</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
            Contact &amp; Training Enquiries
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about the Marine Mind platform roadmap, upcoming courses, or instructor partnerships? Reach out via our enquiry desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Information Cards (Clear Placeholders) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider">
                  Contact Information
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-amber-500/30">
                  Placeholder Info
                </span>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-300">General Email:</div>
                  <div className="text-slate-400 font-mono">{CONTACT_PLACEHOLDERS.email}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-300">Telephone / Ops:</div>
                  <div className="text-slate-400 font-mono">{CONTACT_PLACEHOLDERS.phone}</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-300">Campus Location:</div>
                  <div className="text-slate-400">{CONTACT_PLACEHOLDERS.location}</div>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start space-x-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-300">Support Availability:</div>
                  <div className="text-slate-400">{CONTACT_PLACEHOLDERS.hours}</div>
                </div>
              </div>

            </div>

            {/* Department Breakdown */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-['Space_Grotesk']">
                Enquiry Routing Channels
              </h4>
              
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs">
                <div className="font-semibold text-cyan-300">Training &amp; Curriculum Enquiries:</div>
                <div className="text-slate-400 font-mono text-[11px] mt-0.5">{CONTACT_PLACEHOLDERS.trainingEnquiries}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs">
                <div className="font-semibold text-cyan-300">General Enquiries &amp; Partnerships:</div>
                <div className="text-slate-400 font-mono text-[11px] mt-0.5">{CONTACT_PLACEHOLDERS.generalEnquiries}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-950">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                    Enquiry Recorded (Stage 1 Demo)
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your enquiry regarding <span className="text-white font-medium">{formData.subject || 'Maritime Training'}</span> has been captured in this Stage 1 portal demonstration.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      id="reset-enquiry-form-btn"
                      className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-white font-['Space_Grotesk'] flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      <span>Send a Maritime Training Enquiry</span>
                    </h3>
                    <span className="text-[10px] text-slate-400">All fields required</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Captain / Cadet Mariner"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. mariner@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-enquiry-type" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Enquiry Nature
                      </label>
                      <select
                        id="contact-enquiry-type"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer"
                      >
                        <option value="training">Training Enquiries</option>
                        <option value="general">General Platform Enquiries</option>
                        <option value="instructor">Instructor Collaboration</option>
                        <option value="institutional">Maritime Academy / Group Interest</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Subject Line
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        placeholder="e.g. Powerboat syllabus availability"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Please enter your maritime training question or feedback..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center text-[11px] text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-cyan-400" />
                      <span>Stage 1 Demo Form</span>
                    </div>
                    <button
                      type="submit"
                      id="submit-contact-enquiry-btn"
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-950 transition-all flex items-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Enquiry</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
