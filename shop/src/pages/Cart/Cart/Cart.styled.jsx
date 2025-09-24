import styled from 'styled-components';


export const CartContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const CartTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 2px solid #e5e7eb;
`;

export const TotalText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-right: 1rem;
`;

export const TotalAmount = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  color: #f97316;
`;

export const ClearCartButton = styled.button`
  background-color: #fef2f2;
  color: #dc2626;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid #fca5a5;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: #fee2e2;
  }
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6b7280;
  padding: 2rem;
`;