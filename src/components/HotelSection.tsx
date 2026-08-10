import React, { useState } from 'react';
import { HOTEL_ROOMS } from '../data/hotelData';
import { HotelRoom } from '../types';
import { BedDouble, Calendar, Wifi, Tv, Wind, Coffee, Car, ShieldCheck, CheckCircle2, Phone, X } from 'lucide-react';

export const HotelSection: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [selectedRoom, setSelectedRoom] = useState<HotelRoom | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', specialRequest: '' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const roomsElem = document.getElementById('our-rooms-list');
    if (roomsElem) roomsElem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRoomBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);

    const roomMsg = `Hello Diamond Bawarchi Hotel (Shadnagar),\n\nI would like to inquire about booking a room:\n• Room Type: ${selectedRoom?.name || 'Hotel Room'}\n• Guest Name: ${bookingForm.name}\n• Phone: ${bookingForm.phone}\n• Check-in: ${checkIn || 'To be confirmed'}\n• Check-out: ${checkOut || 'To be confirmed'}\n• Special Requests: ${bookingForm.specialRequest || 'None'}`;
    const waUrl = `https://wa.me/919666886613?text=${encodeURIComponent(roomMsg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="hotel-section" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      
      {/* Hotel Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-10">
        <div 
          className="h-[380px] sm:h-[450px] w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsOCfq4XCNyAsLWA7K4FfeElrykL-sY-gwPlW7FvfX34AMYfeDomeYWeZd70WeDf-WZyJD38WqzDCIGFHQZQNOZHQxp72FRyOHegwctl3Ljp25oGMEtodP3uqMLj16bz000VoXwrSxvFzj8BF51NjpZdkLk7q9lbkUszmmgsBaeDLpFWjAbIJLURjKAethD_KB2cRHUh5jOuZbjEF0jaMAWRzY8eS_5FsHhKgH-esIODUhC7FwIraJ')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-white/95 backdrop-blur px-3.5 py-1 rounded-full border border-blue-200 inline-block mb-3">
              Accommodation in Shadnagar
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-md">
              Premium Hotel Rooms Right Above Restaurant
            </h2>
            <p className="text-xs sm:text-base text-slate-200 font-medium">
              Experience air-conditioned comfort, plush bedding, and 24/7 room service. The ideal stopover on the Hyderabad-Bengaluru Highway.
            </p>
          </div>
        </div>
      </div>

      {/* Check Availability Search Bar */}
      <div className="-mt-16 relative z-20 max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl">
          <h3 className="font-serif-title font-bold text-xl text-blue-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-700" />
            Check Room Availability
          </h3>

          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">Check-in Date</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-slate-50 text-xs text-slate-900 p-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">Check-out Date</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-slate-50 text-xs text-slate-900 p-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-3 bg-blue-900 text-white font-bold text-xs rounded-xl border border-blue-800 hover:bg-blue-800 transition-all shadow-sm"
              >
                Search Rooms
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Rooms List */}
      <div id="our-rooms-list" className="mb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Comfort &amp; Elegance</span>
          <h3 className="font-serif-title text-3xl font-bold text-slate-900 mt-1">Our Hotel Rooms</h3>
          <div className="h-0.5 w-24 bg-blue-700 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOTEL_ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="h-60 w-full relative overflow-hidden bg-slate-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {room.badge && (
                    <span className="absolute top-3 left-3 bg-blue-900 text-amber-400 text-[10px] font-extrabold uppercase px-3 py-1 rounded-md shadow-sm">
                      {room.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif-title font-bold text-2xl text-slate-900">{room.name}</h4>
                    <div>
                      <span className="font-serif-title text-2xl font-extrabold text-blue-900">
                        ₹{room.pricePerNight.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-500 block text-right font-medium">/ night</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 font-normal">{room.description}</p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((a, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1 font-semibold"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-700" />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedRoom(room);
                    setBookingSuccess(false);
                  }}
                  className="w-full py-3 bg-blue-900 text-white font-bold text-xs rounded-xl border border-blue-800 hover:bg-blue-800 transition-all shadow-sm text-center"
                >
                  Book {room.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotel Amenities Highlights */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <h3 className="font-serif-title font-bold text-2xl text-slate-900 text-center mb-8">
          Hotel Facilities &amp; Amenities
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-5 rounded-2xl text-center flex flex-col items-center border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mb-3">
              <Wind className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Air Conditioned</h4>
            <p className="text-xs text-slate-500 mt-1">Split AC in all rooms</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl text-center flex flex-col items-center border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mb-3">
              <Car className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Free Valet Parking</h4>
            <p className="text-xs text-slate-500 mt-1">Spacious secure parking</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl text-center flex flex-col items-center border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mb-3">
              <Coffee className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">24/7 Room Service</h4>
            <p className="text-xs text-slate-500 mt-1">Order food from restaurant</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl text-center flex flex-col items-center border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">CCTV &amp; Security</h4>
            <p className="text-xs text-slate-500 mt-1">Safe &amp; peaceful environment</p>
          </div>
        </div>
      </div>

      {/* Room Booking Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full relative shadow-2xl text-slate-800">
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-title font-bold text-2xl text-blue-900 mb-1">
              Book {selectedRoom.name}
            </h3>
            <p className="text-xs text-blue-700 font-semibold mb-4">
              ₹{selectedRoom.pricePerNight} / night • Diamond Bawarchi Hotel, Shadnagar
            </p>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-lg text-slate-900">Room Reservation Request Sent!</h4>
                <p className="text-xs text-slate-600 mt-2">
                  Thank you {bookingForm.name}. Our front desk will call you at {bookingForm.phone} to confirm your check-in dates.
                </p>
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="mt-6 px-6 py-2 bg-blue-900 text-white font-bold rounded-xl text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleRoomBookSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="Guest Name"
                    className="w-full bg-slate-50 text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="096668 86613"
                    className="w-full bg-slate-50 text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 uppercase">Special Requests</label>
                  <textarea
                    rows={2}
                    value={bookingForm.specialRequest}
                    onChange={(e) => setBookingForm({ ...bookingForm, specialRequest: e.target.value })}
                    placeholder="Early check-in, extra bed, etc."
                    className="w-full bg-slate-50 text-xs text-slate-900 p-2.5 rounded-lg border border-slate-200 focus:border-blue-600 outline-none mt-1 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl border border-emerald-500 shadow-sm transition-colors mt-2 flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Confirm Room Inquiry via WhatsApp (096668 86613)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

