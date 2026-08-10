import React, { useState } from 'react';
import { CATERING_PACKAGES } from '../data/cateringData';
import { Phone, CheckCircle2, Calculator, Send } from 'lucide-react';

export const CateringSection: React.FC = () => {
  const [guestCount, setGuestCount] = useState(30);
  const [biryaniType, setBiryaniType] = useState<'chicken' | 'mutton' | 'veg'>('chicken');
  const [includeDessert, setIncludeDessert] = useState(true);
  const [submittedQuote, setSubmittedQuote] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', eventDate: '', eventType: 'Wedding / Function' });

  // Calculate estimated price
  const perPersonRate = biryaniType === 'mutton' ? 240 : biryaniType === 'chicken' ? 210 : 180;
  const dessertAddon = includeDessert ? 30 : 0;
  const estimatedTotal = guestCount * (perPersonRate + dessertAddon);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedQuote(true);
  };

  return (
    <section id="catering-section" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      
      {/* Catering Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-[#e9c349]/30 shadow-2xl mb-12">
        <div 
          className="h-[400px] sm:h-[480px] w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5D35suxJbFoV7XZRJH5zGUjBP6Y0rk82Hvd9ckGc6PDQ_-TdHUCFtA0wi0Mspc5hwhk9Ssoshy12uCurS-9YrcEIXl8Ksx66rBLXdHsW2pweuYCH-NVKfCgLvyTUnteVxfO2hSgNXwXZps4AyZ7gQonh9AkK-vFP4pxlADJYRpawkZRm1bMNnTgzXr_SJP865VDlRvYyf7EQYL3AvYjZ2Ustt3jJehZOztU7GHFKId999B4VBTlBj')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#13140f] via-[#13140f]/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e9c349] bg-[#e9c349]/10 px-3.5 py-1 rounded-full border border-[#e9c349]/30 inline-block mb-3">
              Catering &amp; Bulk Biryani Deghs
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#f9f6ee] mb-3 leading-tight">
              Host Unforgettable Events with Our Biryani
            </h2>
            <p className="text-xs sm:text-base text-[#e5e2db]/80 mb-6">
              Elevate your weddings, receptions, birthday functions, and corporate events in Shadnagar with Diamond Bawarchi's legendary catering services.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#quote-calculator"
                className="px-6 py-3 bg-[#e9c349] text-[#13140f] font-bold rounded-xl text-xs sm:text-sm shadow-lg hover:bg-white transition-colors"
              >
                Estimate Your Feast
              </a>
              <a
                href="tel:09666886613"
                className="px-6 py-3 bg-[#800000] text-[#ffe088] font-bold rounded-xl text-xs sm:text-sm border border-[#e9c349]/40 flex items-center gap-2 hover:bg-[#a00000] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call to Order: 096668 86613
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e9c349]">Curated Feasts</span>
          <h3 className="font-serif-title text-3xl font-bold text-[#f9f6ee] mt-1">
            Bulk Biryani Packages (20 to 100+ Members)
          </h3>
          <div className="h-0.5 w-24 bg-[#e9c349] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[#20201b] rounded-2xl p-6 border transition-all relative flex flex-col justify-between shadow-xl ${
                pkg.isPopular
                  ? 'border-[#e9c349] bg-gradient-to-b from-[#2a2a25] to-[#20201b] scale-102'
                  : 'border-[#af8d11]/30 hover:border-[#e9c349]/50'
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute top-0 right-0 bg-[#e9c349] text-[#13140f] text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl rounded-tr-2xl shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex justify-between items-start mb-2 pt-2">
                  <div>
                    <h4 className="font-serif-title font-bold text-xl text-[#f9f6ee]">{pkg.name}</h4>
                    <p className="text-xs text-[#e2bfb9] font-medium">Serves {pkg.members} Members</p>
                  </div>
                  <span className="font-serif-title text-2xl font-extrabold text-[#e9c349]">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-xs text-[#e5e2db]/70 mb-4">{pkg.description}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-[#e5e2db] flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e9c349] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="tel:09666886613"
                className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all block shadow-md ${
                  pkg.isPopular
                    ? 'bg-[#e9c349] text-[#13140f] hover:bg-white'
                    : 'bg-[#800000] text-[#ffe088] border border-[#e9c349]/30 hover:bg-[#a00000]'
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Feast Estimator & Quote Form */}
      <div id="quote-calculator" className="bg-[#20201b] rounded-3xl p-6 sm:p-10 border border-[#e9c349]/30 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Controls */}
          <div>
            <div className="flex items-center gap-2 text-[#e9c349] mb-2">
              <Calculator className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Interactive Feast Estimator</span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#f9f6ee] mb-4">
              Estimate Your Event Feast
            </h3>

            {/* Slider for Member Count */}
            <div className="space-y-3 mb-6 bg-[#2a2a25] p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-center text-sm font-bold text-[#f9f6ee]">
                <span>Number of Guests:</span>
                <span className="text-lg text-[#e9c349] font-extrabold">{guestCount} Members</span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#e9c349] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#e5e2db]/50">
                <span>20 Members</span>
                <span>100 Members</span>
                <span>250+ Members</span>
              </div>
            </div>

            {/* Biryani Selection */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold text-[#e5e2db] block">Select Signature Biryani:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'chicken', label: 'Chicken Dum' },
                  { id: 'mutton', label: 'Special Mutton' },
                  { id: 'veg', label: 'Paneer / Veg' },
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBiryaniType(b.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                      biryaniType === b.id
                        ? 'bg-[#800000] text-[#ffe088] border-[#e9c349]'
                        : 'bg-[#2a2a25] text-[#e5e2db]/80 border-white/10'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras Checkboxes */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#e5e2db]">
                <input
                  type="checkbox"
                  checked={includeDessert}
                  onChange={(e) => setIncludeDessert(e.target.checked)}
                  className="rounded accent-[#e9c349] w-4 h-4"
                />
                <span>Include Double Ka Meetha Dessert (+₹30/person)</span>
              </label>
            </div>

            {/* Estimate Summary Box */}
            <div className="bg-gradient-to-br from-[#800000] to-[#4d0000] p-4 rounded-xl border border-[#e9c349]/40 flex justify-between items-center text-[#ffe088]">
              <div>
                <span className="text-xs uppercase font-bold text-[#e2bfb9]">Estimated Total Price</span>
                <div className="text-2xl font-serif-title font-extrabold text-[#e9c349]">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-[#e2bfb9]">Includes Salan, Raita, Salad &amp; Packaging</span>
              </div>
              <a
                href="tel:09666886613"
                className="px-4 py-2 bg-[#e9c349] text-[#13140f] font-bold rounded-lg text-xs hover:bg-white"
              >
                Call to Confirm
              </a>
            </div>
          </div>

          {/* Direct Quote Request Form */}
          <div className="bg-[#2a2a25] p-6 rounded-2xl border border-white/10">
            <h4 className="font-serif-title font-bold text-xl text-[#f9f6ee] mb-2">Request Official Quote</h4>
            <p className="text-xs text-[#e5e2db]/70 mb-4">
              Submit your event details and our catering manager in Shadnagar will get back to you within 30 minutes.
            </p>

            {submittedQuote ? (
              <div className="bg-green-900/40 border border-green-500/50 p-6 rounded-xl text-center">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-2" />
                <h5 className="font-bold text-green-300 text-lg">Quote Request Received!</h5>
                <p className="text-xs text-green-200 mt-1">
                  Thank you {quoteForm.name}. Our catering manager will contact you at {quoteForm.phone} shortly.
                </p>
                <button
                  onClick={() => setSubmittedQuote(false)}
                  className="mt-4 text-xs text-[#e9c349] underline font-bold"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-lg border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    placeholder="096668 86613"
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-lg border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Event Date</label>
                  <input
                    type="date"
                    required
                    value={quoteForm.eventDate}
                    onChange={(e) => setQuoteForm({ ...quoteForm, eventDate: e.target.value })}
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-lg border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#800000] text-[#ffe088] font-bold text-xs rounded-xl border border-[#e9c349]/40 flex items-center justify-center gap-2 hover:bg-[#a00000] transition-colors mt-2"
                >
                  <Send className="w-4 h-4 text-[#e9c349]" />
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};
