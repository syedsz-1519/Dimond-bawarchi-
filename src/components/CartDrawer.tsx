import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, Phone, ShoppingBag, Send, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, size: string | undefined, delta: number) => void;
  onRemoveItem: (id: string, size: string | undefined) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'dinein' | 'delivery'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [orderPlacedSuccess, setOrderPlacedSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.selectedPrice * item.quantity, 0);
  const packagingFee = subtotal > 0 ? 30 : 0;
  const grandTotal = subtotal + packagingFee;

  const buildWhatsAppText = () => {
    let text = `*New Online Order - Diamond Bawarchi Shadnagar*\n\n`;
    text += `*Order Type:* ${orderType.toUpperCase()}\n`;
    text += `*Customer:* ${customerName || 'Valued Guest'}\n`;
    text += `*Phone:* ${customerPhone || 'Not provided'}\n`;
    if (orderType === 'delivery') {
      text += `*Address:* ${deliveryAddress}\n`;
    }
    if (specialNotes) {
      text += `*Special Request:* ${specialNotes}\n`;
    }
    text += `\n*Items Ordered:*\n`;
    cartItems.forEach((item, i) => {
      text += `${i + 1}. ${item.item.name} (${item.selectedSize || 'Standard'}) x ${item.quantity} = ₹${item.selectedPrice * item.quantity}\n`;
    });
    text += `\n*Subtotal:* ₹${subtotal}`;
    text += `\n*Packaging/Taxes:* ₹${packagingFee}`;
    text += `\n*Grand Total:* ₹${grandTotal}\n\n`;
    text += `Please confirm order availability and prep time. Thank you!`;
    return encodeURIComponent(text);
  };

  const handlePlaceOrder = (method: 'whatsapp' | 'call') => {
    if (!customerName || !customerPhone) {
      alert('Please fill in your Name and Phone Number to complete the order.');
      return;
    }

    if (method === 'whatsapp') {
      const waUrl = `https://wa.me/919666886613?text=${buildWhatsAppText()}`;
      window.open(waUrl, '_blank');
    } else {
      window.location.href = 'tel:09666886613';
    }

    setOrderPlacedSuccess(true);
    setTimeout(() => {
      onClearCart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
      <div className="bg-white border-l border-slate-200 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl relative animate-slideLeft overflow-y-auto text-slate-800">
        
        {/* Header */}
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-900" />
              <h3 className="font-serif-title font-bold text-xl text-slate-900">Your Order</h3>
              <span className="text-xs bg-blue-900 text-white px-2 py-0.5 rounded-full font-bold shadow-sm">
                {cartItems.reduce((a, b) => a + b.quantity, 0)} Items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-blue-900 flex items-center justify-center mx-auto mb-3 border border-slate-200">
                <ShoppingBag className="w-8 h-8 opacity-70" />
              </div>
              <p className="font-bold text-slate-900 text-base">Your cart is empty</p>
              <p className="text-xs text-slate-500 mt-1">Add your favorite biryani or starters from the menu!</p>
            </div>
          ) : orderPlacedSuccess ? (
            <div className="text-center py-12 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-serif-title font-bold text-2xl text-slate-900">Order Sent!</h4>
              <p className="text-xs text-slate-600 mt-2">
                Thank you {customerName}! We have dispatched your order details to Diamond Bawarchi Shadnagar kitchen.
              </p>
              <button
                onClick={() => {
                  setOrderPlacedSuccess(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 bg-blue-900 text-white font-bold text-xs rounded-xl hover:bg-blue-800"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-1">
              {cartItems.map((cartItem) => (
                <div
                  key={`${cartItem.item.id}-${cartItem.selectedSize}`}
                  className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{cartItem.item.name}</h4>
                    <div className="text-[10px] text-blue-800 font-semibold">
                      {cartItem.selectedSize && <span>Size: {cartItem.selectedSize} • </span>}
                      <span>₹{cartItem.selectedPrice} each</span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-sm">
                    <button
                      onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.selectedSize, -1)}
                      className="text-slate-600 hover:text-blue-900 p-0.5"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-blue-900 w-4 text-center">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.selectedSize, 1)}
                      className="text-slate-600 hover:text-blue-900 p-0.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="font-serif-title font-extrabold text-sm text-blue-900">
                      ₹{cartItem.selectedPrice * cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onRemoveItem(cartItem.item.id, cartItem.selectedSize)}
                      className="block text-red-600 hover:text-red-700 p-1 ml-auto"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Details & Checkout Form */}
        {cartItems.length > 0 && !orderPlacedSuccess && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
            
            {/* Fulfillment Type */}
            <div>
              <label className="text-[10px] font-bold text-slate-700 uppercase block mb-1">Fulfillment Option</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'takeaway', label: 'Takeaway' },
                  { id: 'dinein', label: 'Dine-In' },
                  { id: 'delivery', label: 'Delivery' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setOrderType(type.id as any)}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all border ${
                      orderType === type.id
                        ? 'bg-blue-900 text-white border-blue-800 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Info */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your Name *"
                className="bg-slate-50 text-xs text-slate-900 p-2 rounded-lg border border-slate-200 focus:border-blue-600 outline-none"
              />
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Phone Number *"
                className="bg-slate-50 text-xs text-slate-900 p-2 rounded-lg border border-slate-200 focus:border-blue-600 outline-none"
              />
            </div>

            {orderType === 'delivery' && (
              <input
                type="text"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Delivery Address in Shadnagar..."
                className="w-full bg-slate-50 text-xs text-slate-900 p-2 rounded-lg border border-slate-200 focus:border-blue-600 outline-none"
              />
            )}

            <input
              type="text"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="Special instructions (e.g. Extra spicy, no onions)..."
              className="w-full bg-slate-50 text-xs text-slate-900 p-2 rounded-lg border border-slate-200 focus:border-blue-600 outline-none"
            />

            {/* Total Summary */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Packing &amp; Taxes</span>
                <span>₹{packagingFee}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-blue-900 pt-1 border-t border-slate-200">
                <span>Grand Total</span>
                <span className="font-serif-title text-base font-extrabold">₹{grandTotal}</span>
              </div>
            </div>

            {/* Order Action Buttons */}
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => handlePlaceOrder('whatsapp')}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-colors border border-emerald-500"
              >
                <Send className="w-4 h-4" />
                Order via WhatsApp
              </button>

              <button
                onClick={() => handlePlaceOrder('call')}
                className="py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl border border-blue-800 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call Order
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

