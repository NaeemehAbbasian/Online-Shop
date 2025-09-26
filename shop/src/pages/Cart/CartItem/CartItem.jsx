import React from 'react';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'; 
import {
  ItemContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  Controls,
  ControlButton,
} from "./CartItem.styled";


const Quantity = ({ children }) => <span style={{ padding: '0 8px', minWidth: '20px', textAlign: 'center' }}>{children}</span>; 
const RemoveButton = ControlButton; 


const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <ItemContainer>
      <ProductImage src={item.image} alt={item.name} />
      
      <ProductDetails>
        <ProductName>{item.name}</ProductName>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-start', 
          gap: '10px' 
        }}>
            
            <ProductPrice>${(item.price / 100).toFixed(2)}</ProductPrice> 
            
            <RemoveButton 
              aria-label="Remove item" 
              onClick={() => onRemove(item.id)} 
              style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', padding: '0', fontSize: '1.1rem' }}
            >
              <FaTrashAlt />
            </RemoveButton>
        </div>
        
      </ProductDetails>
      
      <Controls>
        <ControlButton aria-label="Decrease quantity" onClick={() => onDecrease(item.id)}>
          <FaMinus />
        </ControlButton>
        
        <Quantity>{item.quantity}</Quantity>
        
        <ControlButton aria-label="Increase quantity" onClick={() => onIncrease(item.id)}>
          <FaPlus />
        </ControlButton>
      </Controls>
    </ItemContainer>
  );
};

export default CartItem;



