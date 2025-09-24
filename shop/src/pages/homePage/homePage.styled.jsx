import styled from 'styled-components';

export const HeroSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroTitleHighlight = styled.span`
  color: #f97316;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 42rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  justify-content: center;
  max-width: 48rem;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 1rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #d1d5db;
  outline: none;
  transition: box-shadow 0.2s, border-color 0.2s;
  &:focus {
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.4);
    border-color: #f97316;
  }
`;

export const SearchButton = styled.button`
  background-color: #f97316;
  color: #ffffff;
  padding: 1rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ea580c;
  }
`;

export const ExploreButton = styled.button`
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: background-color 0.2s, transform 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }
`;