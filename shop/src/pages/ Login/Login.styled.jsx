import styled from "styled-components";
import { Link } from "react-router";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #f3f4f6;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 32rem;
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: -1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h2`
  font-size: 1.125rem;
  padding-bottom: 1.25rem;
  font-weight: 500;
  color: #9ca3af;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
`;

export const Illustration = styled.img`
  height: auto;
  max-height: 15rem;
  object-fit: contain;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  margin-top: 0.25rem;
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #fff7ed;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }
`;

export const ErrorText = styled.p`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #ea580c;
`;

export const FlexGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export const ForgotPasswordLink = styled.a`
  font-size: 0.75rem;
  color: #6b7280;
  text-decoration: none;

  &:hover {
    color: #2563eb;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 150px;
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #f97316;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #ea580c;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #f97316; 
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; 
`;

export const SignInText = styled.span`
  font-size: 1rem; 
`;

export const FooterWrapper = styled.div`
  margin-top: 1.5rem; 
  text-align: center;
  font-size: 0.875rem; 
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  color: #ea580c; 
  text-decoration: none;
  margin-left: 0.25rem; 
  transition: color 0.2s;

  &:hover {
    color: #1e40af; 
  }
`;
