import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useCart } from '../../context/CartContext'; 
import {
  PageContainer,
  PageTitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToCartButton,
  LoadingText,
  ErrorText

} from "./ProductsPage.styled";


const fetchProducts = async () => {
  const response = await axios.get('https://course-api.com/react-store-products');
  return response.data.slice(0, 4);
};

const ProductsPage = () => {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (isLoading) {
    return <LoadingText>Loading Products...</LoadingText>;
  }

  if (isError) {
    return <ErrorText>Error in Loading Products</ErrorText>;
  }

  return (
    <PageContainer>
      <PageTitle>Product</PageTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price / 100}</ProductPrice>
            <AddToCartButton onClick={() => handleAddToCart(product)}>
            Adding to the Bag
            </AddToCartButton>
          </ProductCard>
        ))}
      </ProductsGrid>
    </PageContainer>
  );
};

export default ProductsPage;
