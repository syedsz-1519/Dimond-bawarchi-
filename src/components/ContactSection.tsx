import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: 'Restaurant Table Reservation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Direct connection to WhatsApp 096668 86613
    const text = `Hello Diamond Bawarchi (Shadnagar),\n\nI would like to submit an inquiry:\n• Name: ${formState.name}\n• Phone: ${formState.phone}\n• Service: ${formState.service}\n• Message: ${formState.message}`;
    const waUrl = `https://wa.me/919666886613?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact-section" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#e9c349]">Reach Out To Us</span>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#f9f6ee] mt-1">
          Location &amp; Contact Information
        </h2>
        <div className="h-0.5 w-24 bg-[#e9c349] mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Business Info & Map Card */}
        <div className="bg-[#20201b] rounded-3xl p-6 sm:p-8 border border-[#af8d11]/30 shadow-2xl flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#2a2a25] border border-white/5">
              <div className="w-12 h-12 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#f9f6ee]">Address</h3>
                <p className="text-xs text-[#e5e2db]/80 mt-1 leading-relaxed">
                  Diamond Bawarchi, NH-44 Highway Road, Shadnagar, Farooqnagar, Telangana 509216
                </p>
                <a
                  href="https://maps.google.com/?q=Diamond+Bawarchi+Shadnagar+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#e9c349] font-bold mt-2 hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#2a2a25] border border-white/5">
              <div className="w-12 h-12 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#f9f6ee]">Direct Call &amp; WhatsApp</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a
                    href="tel:09666886613"
                    className="px-3 py-1.5 bg-[#800000] text-[#ffe088] rounded-xl text-xs font-bold border border-[#e9c349]/30 hover:bg-[#a00000] transition-colors"
                  >
                    096668 86613
                  </a>
                  <a
                    href="tel:8688886613"
                    className="px-3 py-1.5 bg-[#20201b] text-[#e5e2db] rounded-xl text-xs font-bold border border-white/10 hover:border-[#e9c349] transition-colors"
                  >
                    86888 86613
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#2a2a25] border border-white/5">
              <div className="w-12 h-12 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#f9f6ee]">Operating Hours</h3>
                <p className="text-xs text-[#e5e2db]/80 mt-1">
                  Open Daily: <strong className="text-[#e9c349]">11:00 AM – 10:30 PM</strong>
                </p>
                <p className="text-[10px] text-green-400 font-semibold mt-0.5">
                  • Kitchen runs non-stop on all 7 days
                </p>
              </div>
            </div>

          </div>

          {/* Map Preview Frame */}
          <div className="mt-6 rounded-2xl overflow-hidden h-44 bg-[#2a2a25] border border-white/10 relative">
            <iframe
              title="Diamond Bawarchi Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.7570417255286!2d78.2045!3d17.0682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA0JzA1LjUiTiA3OMKwMTInMTYuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Send Direct Message / Inquiry Form */}
        <div className="bg-[#20201b] rounded-3xl p-6 sm:p-8 border border-[#af8d11]/30 shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="font-serif-title font-bold text-2xl text-[#f9f6ee] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#e5e2db]/70 mb-6">
              Have a question about banquet booking, party orders, or hotel rooms in Shadnagar? Leave a message below:
            </p>

            {formSubmitted ? (
              <div className="bg-green-900/30 border border-green-500/40 p-8 rounded-2xl text-center my-auto">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h4 className="font-serif-title font-bold text-xl text-[#f9f6ee]">Message Sent Successfully!</h4>
                <p className="text-xs text-[#e5e2db]/80 mt-2">
                  Thank you {formState.name}. Our staff at Diamond Bawarchi Shadnagar will contact you shortly at {formState.phone}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-[#e9c349] text-[#13140f] font-bold rounded-xl text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-3 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="096668 86613"
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-3 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Service Required</label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-3 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                  >
                    <option value="Restaurant Table Reservation">Restaurant Table Reservation</option>
                    <option value="Banquet Hall Booking">Banquet Hall Booking (Weddings / Events)</option>
                    <option value="Bulk Catering Order">Bulk Biryani Catering (20 - 100+ members)</option>
                    <option value="Hotel Room Stay">Hotel Room Stay</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Message / Special Notes</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your date, guest count, or requirement..."
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-3 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white font-extrabold text-xs sm:text-sm rounded-xl border border-green-400/50 transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4 text-green-300" />
                  <span>Submit Inquiry directly to WhatsApp (096668 86613)</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </section>
  );
};
