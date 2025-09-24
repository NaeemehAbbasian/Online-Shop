import styled from 'styled-components';

export const NavbarContainer = styled.header`
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f97316;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: #6b7280;
  font-weight: 500;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: #f97316;
    transform: translateY(-2px);
  }
`;

export const CartButton = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: #ffffff;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #ef4444;
  border-radius: 9999px;
`;
