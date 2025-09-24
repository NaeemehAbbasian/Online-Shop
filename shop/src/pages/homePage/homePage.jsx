import React from "react";
import {
  HeroSection,
  HeroTitle,
  HeroTitleHighlight,
  HeroSubtitle,
  SearchContainer,
  SearchInput,
  SearchButton,
  ExploreButton,

} from "./homePage.styled";


const HomePage = () => {
  return (
    <HeroSection>
      <HeroTitle>
        Explore the Latest <HeroTitleHighlight>Tech</HeroTitleHighlight>
      </HeroTitle>
      <HeroSubtitle>
        Find the best gadgets, accessories, and electronics to power your life.
        From smartphones to smart home devices, we have it all.
      </HeroSubtitle>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search for a product..." />
        <SearchButton>Search</SearchButton>
      </SearchContainer>
      <ExploreButton>Explore Products</ExploreButton>
    </HeroSection>
  );
};

export default HomePage;
