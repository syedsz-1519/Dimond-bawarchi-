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
      <div className="relative rounded-3xl overflow-hidden border border-[#e9c349]/30 shadow-2xl mb-10">
        <div 
          className="h-[380px] sm:h-[450px] w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsOCfq4XCNyAsLWA7K4FfeElrykL-sY-gwPlW7FvfX34AMYfeDomeYWeZd70WeDf-WZyJD38WqzDCIGFHQZQNOZHQxp72FRyOHegwctl3Ljp25oGMEtodP3uqMLj16bz000VoXwrSxvFzj8BF51NjpZdkLk7q9lbkUszmmgsBaeDLpFWjAbIJLURjKAethD_KB2cRHUh5jOuZbjEF0jaMAWRzY8eS_5FsHhKgH-esIODUhC7FwIraJ')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#13140f] via-[#13140f]/60 to-transparent"></div>

          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e9c349] bg-[#e9c349]/10 px-3.5 py-1 rounded-full border border-[#e9c349]/30 inline-block mb-3">
              Accommodation in Shadnagar
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#f9f6ee] mb-3 leading-tight">
              Premium Hotel Rooms Right Above Restaurant
            </h2>
            <p className="text-xs sm:text-base text-[#e5e2db]/80">
              Experience air-conditioned comfort, plush bedding, and 24/7 room service. The ideal stopover on the Hyderabad-Bengaluru Highway.
            </p>
          </div>
        </div>
      </div>

      {/* Check Availability Search Bar */}
      <div className="-mt-16 relative z-20 max-w-4xl mx-auto mb-16">
        <div className="bg-[#20201b] rounded-2xl p-6 border border-[#e9c349]/40 shadow-2xl backdrop-blur-md">
          <h3 className="font-serif-title font-bold text-xl text-[#e9c349] mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Check Room Availability
          </h3>

          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-bold text-[#e2bfb9] uppercase block mb-1">Check-in Date</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-3 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#e2bfb9] uppercase block mb-1">Check-out Date</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-3 rounded-xl border border-white/10 focus:border-[#e9c349] outline-none"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#800000] to-[#b22b1d] text-[#ffe088] font-bold text-xs rounded-xl border border-[#e9c349]/40 hover:bg-[#a00000] transition-all shadow-md"
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#e9c349]">Comfort &amp; Elegance</span>
          <h3 className="font-serif-title text-3xl font-bold text-[#f9f6ee] mt-1">Our Hotel Rooms</h3>
          <div className="h-0.5 w-24 bg-[#e9c349] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOTEL_ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-[#20201b] rounded-2xl overflow-hidden border border-[#af8d11]/30 hover:border-[#e9c349] transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="h-60 w-full relative overflow-hidden bg-[#2a2a25]">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {room.badge && (
                    <span className="absolute top-3 left-3 bg-[#e9c349] text-[#13140f] text-[10px] font-extrabold uppercase px-3 py-1 rounded-md shadow-md">
                      {room.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif-title font-bold text-2xl text-[#f9f6ee]">{room.name}</h4>
                    <div>
                      <span className="font-serif-title text-2xl font-extrabold text-[#e9c349]">
                        ₹{room.pricePerNight.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-[#e5e2db]/60 block text-right">/ night</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#e5e2db]/80 mb-4">{room.description}</p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((a, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#2a2a25] text-[#e2bfb9] px-2.5 py-1 rounded-md border border-white/5 flex items-center gap-1 font-semibold"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#e9c349]" />
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
                  className="w-full py-3 bg-[#800000] text-[#ffe088] font-bold text-xs rounded-xl border border-[#e9c349]/40 hover:bg-[#a00000] transition-all shadow-md text-center"
                >
                  Book {room.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotel Amenities Highlights */}
      <div className="bg-[#20201b] rounded-3xl p-8 border border-[#af8d11]/30">
        <h3 className="font-serif-title font-bold text-2xl text-[#f9f6ee] text-center mb-8">
          Hotel Facilities &amp; Amenities
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-[#2a2a25] p-5 rounded-2xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mb-3">
              <Wind className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-[#f9f6ee]">Air Conditioned</h4>
            <p className="text-xs text-[#e2bfb9] mt-1">Split AC in all rooms</p>
          </div>

          <div className="bg-[#2a2a25] p-5 rounded-2xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mb-3">
              <Car className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-[#f9f6ee]">Free Valet Parking</h4>
            <p className="text-xs text-[#e2bfb9] mt-1">Spacious secure parking</p>
          </div>

          <div className="bg-[#2a2a25] p-5 rounded-2xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mb-3">
              <Coffee className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-[#f9f6ee]">24/7 Room Service</h4>
            <p className="text-xs text-[#e2bfb9] mt-1">Order food from restaurant</p>
          </div>

          <div className="bg-[#2a2a25] p-5 rounded-2xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-[#f9f6ee]">CCTV &amp; Security</h4>
            <p className="text-xs text-[#e2bfb9] mt-1">Safe &amp; peaceful environment</p>
          </div>
        </div>
      </div>

      {/* Room Booking Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#20201b] border border-[#e9c349] rounded-2xl p-6 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 text-[#e5e2db]/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-title font-bold text-2xl text-[#e9c349] mb-1">
              Book {selectedRoom.name}
            </h3>
            <p className="text-xs text-[#e2bfb9] mb-4">
              ₹{selectedRoom.pricePerNight} / night • Diamond Bawarchi Hotel, Shadnagar
            </p>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-2" />
                <h4 className="font-bold text-lg text-[#f9f6ee]">Room Reservation Request Sent!</h4>
                <p className="text-xs text-[#e5e2db]/80 mt-2">
                  Thank you {bookingForm.name}. Our front desk will call you at {bookingForm.phone} to confirm your check-in dates.
                </p>
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="mt-6 px-6 py-2 bg-[#e9c349] text-[#13140f] font-bold rounded-xl text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleRoomBookSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="Guest Name"
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-lg border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="096668 86613"
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-lg border border-white/10 focus:border-[#e9c349] outline-none mt-1"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#e2bfb9] uppercase">Special Requests</label>
                  <textarea
                    rows={2}
                    value={bookingForm.specialRequest}
                    onChange={(e) => setBookingForm({ ...bookingForm, specialRequest: e.target.value })}
                    placeholder="Early check-in, extra bed, etc."
                    className="w-full bg-[#13140f] text-xs text-[#e5e2db] p-2.5 rounded-lg border border-white/10 focus:border-[#e9c349] outline-none mt-1 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white font-extrabold text-xs sm:text-sm rounded-xl border border-green-400/50 shadow-lg transition-colors mt-2 flex items-center justify-center gap-2 active:scale-95"
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
