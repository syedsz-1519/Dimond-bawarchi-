import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone, Utensils, Calendar, BedDouble } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919666886613';
  const displayPhone = '096668 86613';

  const defaultMsg = 'Hello Diamond Bawarchi Shadnagar, I would like to order / inquire.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMsg)}`;

  const quickMessages = [
    { label: '🍗 Order Dum Biryani', text: 'Hello Diamond Bawarchi, I want to view the menu and place a food order.' },
    { label: '🎉 Catering & Banquet Quote', text: 'Hello Diamond Bawarchi, I need details & quote for Catering / AC Banquet Hall booking.' },
    { label: '🏨 Book Hotel Room', text: 'Hello Diamond Bawarchi, I want to check Deluxe AC Hotel Room availability.' },
    { label: '🪑 Reserve a Table', text: 'Hello Diamond Bawarchi, I want to reserve a table for dine-in.' },
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Expandable Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-slideUp text-slate-800 z-50">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors"
              aria-label="Close WhatsApp Widget"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center font-bold shadow-md">
                <svg className="w-6 h-6 fill-emerald-600" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.299.38 2.51 1.036 3.534l-.678 2.476 2.539-.665c.983.535 2.11.839 3.313.84 3.182 0 5.768-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.523-4.477 10-10 10-1.782 0-3.454-.467-4.908-1.285l-5.092 1.333 1.357-4.957c-.928-1.516-1.463-3.298-1.463-5.205 0-5.523 4.477-10 10-10s10 4.477 10 10z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-serif-title font-bold text-base text-white">Diamond Bawarchi</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-100 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>WhatsApp Direct ({displayPhone})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Chat Options */}
          <div className="p-3.5 space-y-2 text-xs bg-slate-50">
            <p className="text-[11px] text-slate-600 mb-2 font-medium">
              Select an option to open direct chat on WhatsApp:
            </p>

            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(item.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all flex items-center justify-between group shadow-sm"
              >
                <span className="font-semibold text-slate-800 group-hover:text-emerald-700">{item.label}</span>
                <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}

            {/* Direct Open Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-xs"
            >
              <span>Start General WhatsApp Chat</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Button Toggle */}
      <div className="relative group">
        {/* Tooltip Badge on Hover / Idle */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 shadow-lg whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>WhatsApp Us: {displayPhone}</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Contact on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none"></span>

          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.834-1.95-.929-.262-.095-.452-.143-.643.143-.19.285-.737.929-.904 1.119-.166.19-.333.214-.618.071-.285-.143-1.207-.445-2.301-1.419-.85-.758-1.424-1.694-1.591-1.98-.166-.285-.018-.439.125-.581.129-.128.285-.333.428-.5.143-.166.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.643-1.547-.881-2.118-.232-.556-.467-.48-.643-.489-.166-.008-.357-.008-.547-.008s-.5.071-.761.357c-.262.285-1 0.976-1 2.38 0 1.404 1.023 2.76 1.166 2.951.143.19 2.013 3.074 4.877 4.31.682.294 1.214.47 1.629.601.686.218 1.31.187 1.803.114.549-.082 1.689-.69 1.927-1.357.238-.667.238-1.238.166-1.357-.071-.119-.262-.19-.547-.333z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

