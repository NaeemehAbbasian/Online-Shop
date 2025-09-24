import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 1.5rem;
  border-radius: 8px;
`;

export const ProductDetails = styled.div`
  flex: 1;
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #6b7280;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ControlButton = styled.button`
  background-color: #f3f4f6;
  color: #374151;
  font-size: 1.5rem;
  font-weight: 500;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d5db;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #e5e7eb;
  }
`;

export const Quantity = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
`;

export const RemoveButton = styled.button`
  color: #ef4444;
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #b91c1c;
  }
`;