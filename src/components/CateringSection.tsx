import React, { useState } from 'react';
import { CATERING_PACKAGES } from '../data/cateringData';
import { Phone, CheckCircle2, Calculator, Send } from 'lucide-react';

export const CateringSection: React.FC = () => {
  const [guestCount, setGuestCount] = useState(30);
  const [biryaniType, setBiryaniType] = useState<'chicken' | 'mutton' | 'veg'>('chicken');
  const [includeDessert, setIncludeDessert] = useState(true);
  const [submittedQuote, setSubmittedQuote] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', eventDate: '', eventType: 'Wedding / Function' });

  const perPersonRate = biryaniType === 'mutton' ? 240 : biryaniType === 'chicken' ? 210 : 180;
  const dessertAddon = includeDessert ? 30 : 0;
  const estimatedTotal = guestCount * (perPersonRate + dessertAddon);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedQuote(true);

    const quoteMsg = `Hello Diamond Bawarchi Catering (Shadnagar),\n\nI would like an official quote for an event:\n• Name: ${quoteForm.name}\n• Phone: ${quoteForm.phone}\n• Event Date: ${quoteForm.eventDate}\n• Guests: ${guestCount} Members\n• Biryani Option: ${biryaniType}\n• Estimated Total: ₹${estimatedTotal}`;
    const waUrl = `https://wa.me/919666886613?text=${encodeURIComponent(quoteMsg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="catering-section" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      
      {/* Catering Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-12">
        <div 
          className="h-[400px] sm:h-[480px] w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5D35suxJbFoV7XZRJH5zGUjBP6Y0rk82Hvd9ckGc6PDQ_-TdHUCFtA0wi0Mspc5hwhk9Ssoshy12uCurS-9YrcEIXl8Ksx66rBLXdHsW2pweuYCH-NVKfCgLvyTUnteVxfO2hSgNXwXZps4AyZ7gQonh9AkK-vFP4pxlADJYRpawkZRm1bMNnTgzXr_SJP865VDlRvYyf7EQYL3AvYjZ2Ustt3jJehZOztU7GHFKId999B4VBTlBj')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-white/95 backdrop-blur px-3.5 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Catering &amp; Bulk Biryani Deghs
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-md">
              Host Unforgettable Events with Our Biryani
            </h2>
            <p className="text-xs sm:text-base text-slate-200 mb-6 font-medium">
              Elevate your weddings, receptions, birthday functions, and corporate events in Shadnagar with Diamond Bawarchi's legendary catering services.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#quote-calculator"
                className="px-6 py-3 bg-blue-900 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md hover:bg-blue-800 transition-colors border border-blue-800"
              >
                Estimate Your Feast
              </a>
              <a
                href="tel:09666886613"
                className="px-6 py-3 bg-white text-blue-950 font-extrabold rounded-xl text-xs sm:text-sm border border-slate-200 flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                Call to Order: 096668 86613
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Curated Feasts</span>
          <h3 className="font-serif-title text-3xl font-bold text-slate-900 mt-1">
            Bulk Biryani Packages (20 to 100+ Members)
          </h3>
          <div className="h-0.5 w-24 bg-blue-700 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl p-6 border transition-all relative flex flex-col justify-between shadow-sm ${
                pkg.isPopular
                  ? 'border-blue-600 bg-gradient-to-b from-blue-50/60 to-white shadow-md scale-102'
                  : 'border-slate-200 hover:border-blue-400'
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute top-0 right-0 bg-blue-900 text-amber-400 text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl rounded-tr-2xl shadow-sm">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex justify-between items-start mb-2 pt-2">
                  <div>
                    <h4 className="font-serif-title font-bold text-xl text-slate-900">{pkg.name}</h4>
                    <p className="text-xs text-blue-800 font-semibold">Serves {pkg.members} Members</p>
                  </div>
                  <span className="font-serif-title text-2xl font-extrabold text-blue-900">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mb-4 font-normal">{pkg.description}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="tel:09666886613"
                className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all block shadow-sm ${
                  pkg.isPopular
                    ? 'bg-blue-900 text-white hover:bg-blue-800 border border-blue-800'
                    : 'bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100'
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Feast Estimator & Quote Form */}
      <div id="quote-calculator" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Controls */}
          <div>
            <div className="flex items-center gap-2 text-blue-800 mb-2">
              <Calculator className="w-5 h-5 text-blue-700" />
              <span className="text-xs font-bold uppercase tracking-wider">Interactive Feast Estimator</span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Estimate Your Event Feast
            </h3>

            {/* Slider for Member Count */}
            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                <span>Number of Guests:</span>
                <span className="text-lg text-blue-900 font-extrabold">{guestCount} Members</span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-blue-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>20 Members</span>
                <span>100 Members</span>
                <span>250+ Members</span>
              </div>
            </div>

            {/* Biryani Selection */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold text-slate-800 block">Select Signature Biryani:</label>
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
                        ? 'bg-blue-900 text-white border-blue-800 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras Checkboxes */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                <input
                  type="checkbox"
                  checked={includeDessert}
                  onChange={(e) => setIncludeDessert(e.target.checked)}
                  className="rounded accent-blue-700 w-4 h-4"
                />
                <span>Include Double Ka Meetha Dessert (+₹30/person)</span>
              </label>
            </div>

            {/* Estimate Summary Box */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-4 rounded-xl border border-blue-800 flex justify-between items-center text-white shadow-md">
              <div>
                <span className="text-xs uppercase font-bold text-blue-200">Estimated Total Price</span>
                <div className="text-2xl font-serif-title font-extrabold text-amber-400">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-slate-300">Includes Salan, Raita, Salad &amp; Packaging</span>
              </div>
              <a
                href="tel:09666886613"
                className="px-4 py-2 bg-white text-blue-950 font-extrabold rounded-lg text-xs hover:bg-blue-50 transition-colors"
              >
                Call to Confirm
              </a>
            </div>
          </div>

          {/* Direct Quote Request Form */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="font-serif-title font-bold text-xl text-slate-900 mb-2">Request Official Quote</h4>
            <p className="text-xs text-slate-600 mb-4">
              Submit your event details and our catering manager in Shadnagar will get back to you within 30 minutes.
            </p>

            {submittedQuote ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h5 className="font-bold text-emerald-900 text-lg">Quote Request Received!</h5>
                <p className="text-xs text-emerald-700 mt-1">
                  Thank you {quoteForm.name}. Our catering manager will contact you at {quoteForm.phone} shortly.
                </p>
                <button
                  onClick={() => setSubmittedQuote(false)}
                  className="mt-4 text-xs text-blue-800 underline font-bold"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-white text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    placeholder="096668 86613"
                    className="w-full bg-white text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Event Date</label>
                  <input
                    type="date"
                    required
                    value={quoteForm.eventDate}
                    onChange={(e) => setQuoteForm({ ...quoteForm, eventDate: e.target.value })}
                    className="w-full bg-white text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl border border-emerald-500 flex items-center justify-center gap-2 transition-all shadow-sm mt-2 active:scale-95"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit Quote Request via WhatsApp (096668 86613)</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};

