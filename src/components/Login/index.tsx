"use client";
import { useState } from "react";
import StyledCheckbox from "../Common/Checkbox";
import Icons from "@/Icons";

//css
import { ForgetPasswordLink, RememberPasswordWrapper } from "./index.styles";
import {
  Container,
  Error,
  Field,
  FormContainer,
  Hr,
  Input,
  Label,
  Or,
  SignUpWith,
  StyledLink,
  Submit,
  Text,
  TextContainer,
  Title,
  Wrapper,
} from "../SignupForm/index.styles";

/**
 * LoginForm Component
 * A user login form UI component that provides options to sign in using
 * social accounts (Google/Apple) or using email/phone and password.
 * Includes a "Remember for 30 days" checkbox and a link to reset the password.
 * @returns {JSX.Element} The rendered login form component.
 */
const LoginForm = () => {
  const [remember, setRemember] = useState<boolean>(false);

  return (
    <FormContainer>
      <Title>Login with</Title>
      <Wrapper>
        <SignUpWith
          iconSrc={Icons.Google}
          iconAlt="google"
          iconWidth={24}
          iconHeight={24}>
          Sign In with Google
        </SignUpWith>
        <SignUpWith
          iconSrc={Icons.AppleSolid}
          iconAlt="apple"
          iconWidth={24}
          iconHeight={24}>
          Sign In with Apple
        </SignUpWith>
      </Wrapper>
      {/* OR divider */}
      <Container>
        <Hr />
        <Or>or</Or>
        <Hr />
      </Container>
      {/* User info fields */}
      <Field>
        <Label htmlFor="mobileNumber">
          Email or Phone<sup>*</sup>
        </Label>
        <Input
          placeholder="Enter your Email or Phone"
          type="text"
          id="mobileNumber"
        />
      </Field>
      <Field>
        <Label htmlFor="password">
          Password<sup>*</sup>
        </Label>
        <Input
          placeholder="Enter your Password"
          type="password"
          id="password"
        />
        <Error>Must be at least 8 characters.</Error>
      </Field>
      <RememberPasswordWrapper>
        <StyledCheckbox
          checked={remember}
          onChange={() => setRemember(!remember)}
          label="Remember for 30 days"
        />
        <ForgetPasswordLink href="#">Forget Password?</ForgetPasswordLink>
      </RememberPasswordWrapper>
      <Submit>Log in</Submit>
      <TextContainer>
        <Text>Don't have an account?</Text>
        <StyledLink href="/signup">Sign up for free</StyledLink>
      </TextContainer>
    </FormContainer>
  );
};

export default LoginForm;
