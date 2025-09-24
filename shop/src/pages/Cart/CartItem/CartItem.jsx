import React from 'react';
import {
ItemContainer,
ProductImage,
ProductDetails,
ProductName,
ProductPrice,
Controls,
ControlButton,



} from "./CartItem.styled";



const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <ItemContainer>
      <ProductImage src={item.image} alt={item.name} />
      <ProductDetails>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>${item.price / 100}</ProductPrice>
      </ProductDetails>
      <Controls>
        <RemoveButton aria-label="Remove item" onClick={() => onRemove(item.id)}>
          <i className="fas fa-trash"></i> {/* Icon for the trash can */}
        </RemoveButton>
        <ControlButton aria-label="Decrease quantity" onClick={() => onDecrease(item.id)}>
          -
        </ControlButton>
        <Quantity>{item.quantity}</Quantity>
        <ControlButton aria-label="Increase quantity" onClick={() => onIncrease(item.id)}>
          +
        </ControlButton>
      </Controls>
    </ItemContainer>
  );
};

export default CartItem;
