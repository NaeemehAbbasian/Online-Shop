import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemToAdd = action.payload; 
      const existingItem = state.items.find(item => item.id === itemToAdd.id);
      
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
          items: [...state.items, { ...itemToAdd, quantity: 1 }],
          total: state.total + itemToAdd.price, 
        };
      }
    }
    
    case 'INCREASE_QUANTITY': 
    case 'INCREASE': { 
      const itemToIncrease = state.items.find(item => item.id === action.payload);
      if (!itemToIncrease) return state; 

      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
        total: state.total + itemToIncrease.price,
      };
    }
    
    case 'DECREASE_QUANTITY': 
    case 'DECREASE': { 
      const itemToDecrease = state.items.find(item => item.id === action.payload);
      if (!itemToDecrease) return state; 
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
      if (!itemToRemove) return state; 

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove.price * itemToRemove.quantity),
      };
    }
    
    case 'CLEAR_CART': {
      return { items: [], total: 0 };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const calculateTotalQuantity = () => {
    return cartState.items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartState, 
        dispatch, 
        totalQuantity: calculateTotalQuantity()
      }}>
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