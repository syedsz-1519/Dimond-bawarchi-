import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

interface TableBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableBookingModal: React.FC<TableBookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '08:00 PM',
    guests: '4',
    seatingArea: 'Main AC Dining',
    specialNotes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const bookingMsg = `Hello Diamond Bawarchi (Shadnagar),\n\nI would like to reserve a table:\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Date: ${form.date || 'Today'}\n• Time: ${form.time}\n• Guests: ${form.guests} Members\n• Seating Preference: ${form.seatingArea}`;
    const waUrl = `https://wa.me/919666886613?text=${encodeURIComponent(bookingMsg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#20201b] border border-[#e9c349] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#e5e2db]/60 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#e9c349] mb-1">
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Reserve Your Table</span>
        </div>
        <h3 className="font-serif-title font-bold text-2xl sm:text-3xl text-[#f9f6ee] mb-1">
          Diamond Bawarchi Dining
        </h3>
        <p className="text-xs text-[#e2bfb9] mb-6">
          Shadnagar, Farooqnagar • Open until 10:30 PM Daily
        </p>

        {submitted ? (
          <div className="text-center py-8 bg-green-950/30 rounded-2xl border border-green-500/30 p-6">
            <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-3" />
            <h4 className="font-serif-title font-bold text-2xl text-[#f9f6ee]">Table Reserved!</h4>
            <p className="text-xs text-[#e5e2db]/80 mt-2">
              Thank you {form.name}. We have reserved a table for {form.guests} guests in the {form.seatingArea} section on {form.date || 'today'} at {form.time}.
            </p>
            <p className="text-[11px] text-[#e9c349] font-semibold mt-3">
              Confirmation SMS / call will be sent to {form.phone}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#e9c349] text-[#13140f] font-bold text-xs rounded-xl"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Your Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="096668 86613"
                  className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Date *</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Time</label>
                <select
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                >
                  <option value="01:00 PM">01:00 PM (Lunch)</option>
                  <option value="02:30 PM">02:30 PM (Late Lunch)</option>
                  <option value="07:30 PM">07:30 PM (Early Dinner)</option>
                  <option value="08:30 PM">08:30 PM (Peak Dinner)</option>
                  <option value="09:30 PM">09:30 PM (Late Dinner)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Guests</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                >
                  <option value="2">2 Members</option>
                  <option value="4">4 Members</option>
                  <option value="6">6 Members</option>
                  <option value="8">8 Members</option>
                  <option value="12+">12+ Members (Party)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Seating Area Preference</label>
              <select
                value={form.seatingArea}
                onChange={(e) => setForm({ ...form, seatingArea: e.target.value })}
                className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none mt-1"
              >
                <option value="Main AC Dining">Main AC Dining Room</option>
                <option value="Jail Mandi Experience">Special Jail Mandi Theme Room</option>
                <option value="Private Family Dining">Private Family Cabin</option>
                <option value="Banquet Hall Section">Banquet Hall Section</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white font-extrabold text-xs sm:text-sm rounded-xl border border-green-400/50 transition-all shadow-lg mt-2 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Confirm Table Reservation via WhatsApp (096668 86613)</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
