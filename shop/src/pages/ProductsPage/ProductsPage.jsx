
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
  const API_URL = 'https://strapi-store-server.onrender.com/api/products'; 
  const response = await axios.get(API_URL);
  const productsArray = response.data.data; 

  return productsArray.slice(0, 15);
};

const ProductsPage = () => {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    
    const { id } = product;
    const { 
        title: name,
        price,
        image 
    } = product.attributes;

    const numericPrice = parseInt(price); 

    if (isNaN(numericPrice)) {
        console.error("Invalid price value received from Strapi:", price);
        return; 
    }

    const itemToAdd = {
      id: id,
      name: name,
      price: numericPrice, 
      image: image,
    };
    
    dispatch({ type: 'ADD_TO_CART', payload: itemToAdd });
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
            <ProductImage 
              src={product.attributes.image} 
              alt={product.attributes.title} 
            />
            <ProductName>{product.attributes.title}</ProductName>
            <ProductPrice>${(product.attributes.price / 100).toFixed(2)}</ProductPrice>
            
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