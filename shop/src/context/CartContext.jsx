import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          total: state.total + existingItem.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      }
    }
    case 'INCREASE_QUANTITY': {
      const itemToIncrease = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
        total: state.total + itemToIncrease.price,
      };
    }
    case 'DECREASE_QUANTITY': {
      const itemToDecrease = state.items.find(item => item.id === action.payload);
      if (itemToDecrease.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
          total: state.total - itemToDecrease.price,
        };
      } else {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          total: state.total - itemToDecrease.price,
        };
      }
    }
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove.price * itemToRemove.quantity),
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        items: [],
        total: 0,
      };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
