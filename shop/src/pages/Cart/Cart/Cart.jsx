import React from 'react';
import CartItem from '../CartItem';
import { useCart } from '../../../context/CartContext';
import {
CartContainer,
CartTitle,
ItemsList,
TotalContainer,
TotalText,
TotalAmount,
ClearCartButton,
EmptyCartMessage,


} from "./Cart.styled";


const Cart = () => {
  const { cartState, dispatch } = useCart();

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
 
  const handleIncreaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const handleDecreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };
  
  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <CartContainer>
      <CartTitle>Products</CartTitle>
      {cartState.items.length === 0 ? (
        <EmptyCartMessage>Your bag is empty.</EmptyCartMessage>
      ) : (
        <ItemsList>
          {cartState.items.map((item) => (
            <CartItem 
              key={item.id} 
              item={item}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              onRemove={handleRemoveItem}
            />
          ))}
        </ItemsList>
      )}

      {cartState.items.length > 0 && (
        <>
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalAmount>${cartState.total.toFixed(2)}</TotalAmount>
          </TotalContainer>
          <div className="flex justify-center">
            <ClearCartButton onClick={handleClearCart}>
              Clear Cart
            </ClearCartButton>
          </div>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
