import React, { useState, useEffect } from 'react';
import { useOrders } from '../context/OrdersContext';
import { Order, OrderStatus, OrderFulfillment } from '../data/dummyOrders';
import { DashboardLogin } from './DashboardLogin';
import {
  Gem,
  LogOut,
  Search,
  Clock,
  Phone,
  MapPin,
  Utensils,
  ShoppingBag,
  Truck,
  CheckCircle2,
  AlertCircle,
  ChefHat,
  Filter,
  DollarSign,
  ArrowRight,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

interface DashboardProps {
  onGoToStorefront: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onGoToStorefront }) => {
  // TODO: PRODUCTION — replace sessionStorage authentication check with Supabase Auth session listener (`supabase.auth.getSession()`)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    sessionStorage.getItem('admin_authenticated') === 'true'
  );

  const { orders, updateOrderStatus } = useOrders();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');
  const [fulfillmentFilter, setFulfillmentFilter] = useState<OrderFulfillment | 'all'>('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Clock tick for relative timestamps
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 15000);
    return () => clearInterval(timer);
  }, []);

  if (!isAuthenticated) {
    return (
      <DashboardLogin
        onSuccess={() => setIsAuthenticated(true)}
        onGoToStorefront={onGoToStorefront}
      />
    );
  }

  const handleSignOut = () => {
    // TODO: PRODUCTION — replace with `await supabase.auth.signOut()`
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  // Helper for relative time
  const getRelativeTime = (isoString: string) => {
    const created = new Date(isoString).getTime();
    const diffMins = Math.max(0, Math.floor((currentTime.getTime() - created) / 60000));
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} mins ago`;
    const hours = Math.floor(diffMins / 60);
    return `${hours} hr ${diffMins % 60} mins ago`;
  };

  // Filtered orders sorted newest first
  // TODO: PRODUCTION — replace client-side filtering with Supabase SQL query `.eq('status', statusFilter).order('created_at', { ascending: false })`
  const filteredOrders = orders.filter((o) => {
    if (statusFilter !== 'all' && o.status !== statusFilter) return false;
    if (fulfillmentFilter !== 'all' && o.fulfillment !== fulfillmentFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = o.customerName.toLowerCase().includes(q);
      const matchPhone = o.phone.includes(q);
      const matchId = o.id.toLowerCase().includes(q);
      if (!matchName && !matchPhone && !matchId) return false;
    }
    return true;
  });

  // Calculate top bar metrics
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter(
    (o) => o.status === 'received' || o.status === 'preparing' || o.status === 'out_for_delivery'
  ).length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  const getStatusBadgeStyle = (status: OrderStatus) => {
    switch (status) {
      case 'received':
        return 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
      case 'preparing':
        return 'bg-blue-100 text-blue-900 border-blue-300 font-bold';
      case 'out_for_delivery':
        return 'bg-purple-100 text-purple-900 border-purple-300 font-bold';
      case 'delivered':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';
    }
  };

  const getStatusLabel = (status: OrderStatus) => {
    switch (status) {
      case 'received':
        return '🟡 Received';
      case 'preparing':
        return '🔵 Kitchen Prep';
      case 'out_for_delivery':
        return '🟣 Out for Delivery';
      case 'delivered':
        return '🟢 Delivered / Served';
    }
  };

  const getFulfillmentBadge = (fulfillment: OrderFulfillment) => {
    switch (fulfillment) {
      case 'delivery':
        return <span className="bg-blue-900 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">🚚 Delivery</span>;
      case 'takeaway':
        return <span className="bg-indigo-100 text-indigo-900 border border-indigo-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">🛍️ Takeaway</span>;
      case 'dine-in':
        return <span className="bg-amber-100 text-amber-900 border border-amber-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">🍽️ Dine-In</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-900 selection:text-white pb-16">
      
      {/* Top Header Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Brand & Portal Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center border border-blue-800 shadow-sm">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-title font-bold text-lg text-white tracking-tight">
                  Diamond Bawarchi
                </span>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                  Staff Admin
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Shadnagar • Live Kitchen Order Management
              </span>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            
            {/* Live Indicator */}
            <div className="hidden md:flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live In-Memory Session</span>
            </div>

            {/* Back to Customer Web */}
            <button
              onClick={onGoToStorefront}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors border border-slate-700 flex items-center gap-1.5"
              title="Switch to customer website view"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">View Customer Website</span>
            </button>

            {/* Sign Out */}
            <button
              onClick={handleSignOut}
              className="px-3 py-1.5 bg-red-900/80 hover:bg-red-800 text-white rounded-xl text-xs font-bold transition-colors border border-red-700 flex items-center gap-1.5"
              title="Sign out of staff admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>

          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        
        {/* Production Notice Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-blue-900 text-amber-400 shrink-0">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-sm text-slate-900">
                Staff Order Management Dashboard (Demo Mode)
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Simulating order progression from kitchen receipt to delivery. Status updates change React state in memory.
              </p>
            </div>
          </div>

          <div className="bg-white px-3 py-1.5 rounded-xl border border-blue-200 text-[11px] font-mono text-blue-900 font-semibold shrink-0">
            // TODO: PRODUCTION — Supabase DB + Realtime
          </div>
        </div>

        {/* Metrics & Statistics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Total Orders Today */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Total Orders Today
              </span>
              <span className="font-serif-title font-extrabold text-3xl text-slate-900 mt-1 block">
                {totalOrdersCount}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">Session total</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-200">
              <ShoppingBag className="w-6 h-6" />
            </div>
          </div>

          {/* Active Pending Kitchen Orders */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Kitchen Active Orders
              </span>
              <span className="font-serif-title font-extrabold text-3xl text-blue-900 mt-1 block">
                {pendingOrdersCount}
              </span>
              <span className="text-[10px] text-amber-700 font-bold">Needs attention</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
              <ChefHat className="w-6 h-6" />
            </div>
          </div>

          {/* Revenue Total */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Today's Revenue
              </span>
              <span className="font-serif-title font-extrabold text-3xl text-emerald-800 mt-1 block">
                ₹{totalRevenue.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">Sum of order totals</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          {/* Fulfillment Breakdown */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Fulfillment Types
            </span>
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>🚚 Delivery: <strong className="text-blue-900">{orders.filter(o => o.fulfillment === 'delivery').length}</strong></span>
              <span>🛍️ Takeaway: <strong className="text-indigo-900">{orders.filter(o => o.fulfillment === 'takeaway').length}</strong></span>
              <span>🍽️ Dine-in: <strong className="text-amber-900">{orders.filter(o => o.fulfillment === 'dine-in').length}</strong></span>
            </div>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
          
          <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Customer Name, Phone, or Order ID..."
                className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder-slate-400 pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium"
              />
              <Search className="w-4 h-4 text-blue-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Fulfillment Filter Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 shrink-0">Fulfillment:</span>
              <select
                value={fulfillmentFilter}
                onChange={(e) => setFulfillmentFilter(e.target.value as any)}
                className="bg-slate-50 text-xs font-bold text-slate-800 px-3 py-2 rounded-xl border border-slate-200 focus:border-blue-600 outline-none"
              >
                <option value="all">All Fulfillment Types</option>
                <option value="delivery">Delivery Only</option>
                <option value="takeaway">Takeaway Only</option>
                <option value="dine-in">Dine-In Only</option>
              </select>
            </div>

          </div>

          {/* Status Tabs */}
          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            <span className="text-xs font-bold text-slate-600 flex items-center gap-1 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5 text-blue-800" />
              Status Filter:
            </span>

            {[
              { id: 'all', label: 'All Orders', count: orders.length },
              { id: 'received', label: '🟡 Received', count: orders.filter(o => o.status === 'received').length },
              { id: 'preparing', label: '🔵 Kitchen Prep', count: orders.filter(o => o.status === 'preparing').length },
              { id: 'out_for_delivery', label: '🟣 Out for Delivery', count: orders.filter(o => o.status === 'out_for_delivery').length },
              { id: 'delivered', label: '🟢 Delivered', count: orders.filter(o => o.status === 'delivered').length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all border flex items-center gap-1.5 ${
                  statusFilter === tab.id
                    ? 'bg-blue-900 text-white border-blue-800 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  statusFilter === tab.id ? 'bg-amber-400 text-slate-950 font-extrabold' : 'bg-slate-200 text-slate-800'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Orders Card Grid */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="font-bold text-slate-700 text-base">No orders match your filter criteria.</p>
            <button
              onClick={() => {
                setStatusFilter('all');
                setFulfillmentFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 bg-blue-900 text-white font-bold text-xs rounded-xl hover:bg-blue-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                
                {/* Card Header Bar */}
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-serif-title font-extrabold text-base text-blue-900">
                      {order.id}
                    </span>
                    {getFulfillmentBadge(order.fulfillment)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {getRelativeTime(order.createdAt)}
                    </span>
                    <span className={`text-[11px] px-2.5 py-1 rounded-full border ${getStatusBadgeStyle(order.status)}`}>
                      {getStatusLabel(order.status)}
                    </span>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">{order.customerName}</h3>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-0.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                        <span>{order.address}</span>
                      </p>
                    </div>

                    <a
                      href={`tel:${order.phone}`}
                      className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-xl text-xs font-bold border border-blue-200 flex items-center gap-1.5 transition-colors shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-700" />
                      <span>{order.phone}</span>
                    </a>
                  </div>

                  {/* Order Items Table */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Items Ordered ({order.items.reduce((a, b) => a + b.qty, 0)})
                    </span>
                    <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-900 w-5">{item.qty}x</span>
                            <span className="font-semibold text-slate-800">{item.name}</span>
                            {item.portion && (
                              <span className="text-[9px] bg-white text-slate-600 px-1.5 py-0.5 rounded border border-slate-200 font-bold uppercase">
                                {item.portion}
                              </span>
                            )}
                          </div>
                          <span className="font-bold text-slate-700">
                            ₹{item.price * item.qty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-bold text-slate-500 uppercase">Order Grand Total</span>
                    <span className="font-serif-title font-extrabold text-xl text-blue-900">
                      ₹{order.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Status Advancement Action Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-600">Quick Move:</span>
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                      className="bg-white text-xs font-bold text-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200 focus:border-blue-600 outline-none"
                    >
                      <option value="received">🟡 Received</option>
                      <option value="preparing">🔵 Kitchen Prep</option>
                      <option value="out_for_delivery">🟣 Out for Delivery</option>
                      <option value="delivered">🟢 Delivered / Served</option>
                    </select>
                  </div>

                  {/* Contextual Step Progression Button */}
                  {order.status === 'received' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'preparing')}
                      className="py-2 px-4 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-sm border border-blue-800 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ChefHat className="w-4 h-4 text-amber-400" />
                      <span>Start Kitchen Prep</span>
                    </button>
                  )}

                  {order.status === 'preparing' && (
                    <button
                      onClick={() =>
                        updateOrderStatus(
                          order.id,
                          order.fulfillment === 'delivery' ? 'out_for_delivery' : 'delivered'
                        )
                      }
                      className="py-2 px-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {order.fulfillment === 'delivery' ? (
                        <>
                          <Truck className="w-4 h-4" />
                          <span>Dispatch for Delivery</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Mark Served / Completed</span>
                        </>
                      )}
                    </button>
                  )}

                  {order.status === 'out_for_delivery' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'delivered')}
                      className="py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm border border-emerald-500 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Mark Delivered</span>
                    </button>
                  )}

                  {order.status === 'delivered' && (
                    <div className="flex items-center gap-1 text-xs text-emerald-700 font-bold px-3 py-1.5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Order Completed</span>
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
};
