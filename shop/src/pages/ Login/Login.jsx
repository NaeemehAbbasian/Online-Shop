import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import photo from "../../assets/photo.png";
import {
  PageWrapper,
  LoginCard,
  HeaderSection,
  TitleWrapper,
  Subtitle,
  MainTitle,
  Illustration,
  LoginForm,
  InputGroup,
  Label,
  Input,
  ErrorText,
  FlexGroup,
  ForgotPasswordLink,
  ButtonWrapper,
  SubmitButton,
  SignInText,
  FooterWrapper,
  StyledLink,
} from "./Login.styled.jsx";  
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    navigate("/");
    reset();
  };

  return (
    <PageWrapper>
      <LoginCard>
        <HeaderSection>
          <TitleWrapper>
            <Subtitle>Welcome back !!!</Subtitle>
            <MainTitle>Login</MainTitle>
          </TitleWrapper>
          <Illustration
            src={photo}
            alt="Login Illustration"
          />
        </HeaderSection>

        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
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
              {...register("password")}
              id="password"
              type="password"
              placeholder="••••••••"
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </InputGroup>

          <ButtonWrapper>
            <SubmitButton type="submit">
              <SignInText>SIGN IN</SignInText>
              <span className="ml-2">→</span> 
            </SubmitButton>
          </ButtonWrapper>
        </LoginForm>

        <FooterWrapper>
          I don't have an account?
          <StyledLink to="/signup">
            Sign up
          </StyledLink>
        </FooterWrapper>
      </LoginCard>
    </PageWrapper>
  );
}
