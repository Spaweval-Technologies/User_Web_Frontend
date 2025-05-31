"use client";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CryptoJS from "crypto-js";

import { useAppDispatch } from "@/redux/store/hooks";
import { loginUser } from "@/redux/actions/authSlice";
import StyledCheckbox from "../Common/Checkbox";
import { setUserInfo } from "@/redux/actions/userSlice";
import Icons from "@/Icons";
import { setItemWithExpiry } from "@/library/helperFunctions";

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
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    emailOrPhone?: string;
    password?: string;
  }>({});
  const [remember, setRemember] = useState<boolean>(false);

  useEffect(() => {
    const signupSuccess = localStorage.getItem("signup_success");
    if (signupSuccess) {
      toast.success("Signup successful! 🎉", {
        duration: 2000,
        position: "top-right",
      });
      localStorage.removeItem("signup_success"); // Clean up after showing
    }
  }, []);

  const validateForm = () => {
    const errs: typeof errors = {};
    if (!emailOrPhone) {
      errs.emailOrPhone = "Email or Phone is required";
    }
    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 8) {
      errs.password = "Password must be at least 8 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const encryptedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.NEXT_PUBLIC_PASSWORD_SECRET!
      ).toString();
      const response = await dispatch(
        loginUser({ email: emailOrPhone, password: encryptedPassword })
      );

      if (response.meta.requestStatus === "rejected") {
        console.error(response.payload.error);
      } else if (response.meta?.requestStatus === "fulfilled") {
        setItemWithExpiry("auth_token", response.payload.token, 3600000); // Store token for 30 days
        dispatch(
          setUserInfo({
            auth_token: response.payload.token,
            name: response.payload.user.name,
            email: response.payload.user.email,
            mobile_number: response.payload.user.mobile_number,
            email_verified: response.payload.user.email_verified,
            id: response.payload.user.id,
          })
        );
        router.push("/listing"); // or wherever the user should land
      }
    } catch (err) {
      console.error(err);
    }
  };

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
          id="emailOrPhone"
          type="text"
          placeholder="Enter your Email or Phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        {errors.emailOrPhone && <Error>{errors.emailOrPhone}</Error>}
      </Field>
      <Field>
        <Label htmlFor="password">
          Password<sup>*</sup>
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <Error>{errors.password}</Error>}
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
      <Submit onClick={handleSubmit}>Log in</Submit>
      <TextContainer>
        <Text>Don't have an account?</Text>
        <StyledLink href="/signup">Sign up for free</StyledLink>
      </TextContainer>
    </FormContainer>
  );
};

export default LoginForm;
