import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 2rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

export const ProductCard = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const ProductName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #f97316;
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.5rem;
  color: #6b7280;
`;

export const ErrorText = styled.p`
  font-size: 1.5rem;
  color: #ef4444;
`;