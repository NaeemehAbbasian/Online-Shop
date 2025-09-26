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
        Transform Your Living Space with{" "}
        <HeroTitleHighlight>
          Stylish Furniture & Home Essentials
        </HeroTitleHighlight>
      </HeroTitle>
      <HeroSubtitle>
        Discover the finest collection of modern beds, chic furnishings, and
        home décor to create the house you've always dreamed of. Quality and
        comfort, hand in hand.
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
