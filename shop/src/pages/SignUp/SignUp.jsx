import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom'; // ⭐️ استفاده از 'react-router-dom'
import photo from "../../assets/photo.png";
import {
    PageWrapper,
    SignupCard,
    HeaderSection,
    MainTitle,
    Illustration,
    SignupForm,
    InputGroup,
    Label,
    Input,
    ErrorText,
    FlexGroup,
    ForgotPasswordLink,
    ButtonWrapper,
    SubmitButton,
    SignUpText,
    FooterWrapper,
    StyledLink,
} from "./Signup.styled.jsx"; 

const signupSchema = z.object({
  userName: z.string().min(3, { message: 'Username must be at least 3 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  confirmPassword: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match.',
  path: ['confirmPassword'],
});

export default function SignupPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    navigate('/login');
    reset();
  };

  return (
    <PageWrapper>
      <SignupCard>
        
        <HeaderSection>
          <MainTitle>
            Sign Up
          </MainTitle>
          <Illustration 
            src={photo}
            alt="Signup Illustration" 
          />
        </HeaderSection>
        
        <SignupForm onSubmit={handleSubmit(onSubmit)}>
          
          <InputGroup>
            <Label htmlFor="userName">User Name</Label>
            <Input
              {...register('userName')}
              id="userName"
              type="text"
              placeholder="Test User"
            />
            {errors.userName && (
              <ErrorText>{errors.userName.message}</ErrorText>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register('email')}
              id="email"
              type="email"
              placeholder="test@example.com"
            />
            {errors.email && (
              <ErrorText>{errors.email.message}</ErrorText>
            )}
          </InputGroup>

          <InputGroup>
            <FlexGroup>
              <Label htmlFor="password">Password</Label>
              <ForgotPasswordLink href="#">
                Forgot Password?
              </ForgotPasswordLink>
            </FlexGroup>
            <Input
              {...register('password')}
              id="password"
              type="password"
              placeholder="••••••••"
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              {...register('confirmPassword')}
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}
          </InputGroup>

          <ButtonWrapper>
            <SubmitButton type="submit">
              <SignUpText>SIGN UP</SignUpText>
              <span className="ml-2">→</span>
            </SubmitButton>
          </ButtonWrapper>
        </SignupForm>

        <FooterWrapper>
          Already have an account? 
          <StyledLink to="/login">
            Login
          </StyledLink>
        </FooterWrapper>
      </SignupCard>
    </PageWrapper>
  );
}
