import React, { createContext, useContext, useState } from 'react';
import { Order, OrderStatus, DUMMY_ORDERS } from '../data/dummyOrders';

interface OrdersContextType {
  orders: Order[];
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;
  addNewOrder: (newOrder: Omit<Order, 'id' | 'createdAt'>) => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

// TODO: PRODUCTION — replace with Supabase table + realtime subscription (e.g., supabase.channel('orders').on(...)).
export const OrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // TODO: PRODUCTION — initialize state from Supabase database `select('*').from('orders')` query
  const [orders, setOrders] = useState<Order[]>(DUMMY_ORDERS);

  // TODO: PRODUCTION — replace in-memory update with Supabase database UPDATE query: `supabase.from('orders').update({ status: newStatus }).eq('id', orderId)`
  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // TODO: PRODUCTION — replace with Supabase database INSERT query: `supabase.from('orders').insert([newOrder])`
  const addNewOrder = (orderData: Omit<Order, 'id' | 'createdAt'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${1000 + orders.length + 1}`,
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrdersContext.Provider value={{ orders, updateOrderStatus, addNewOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};
