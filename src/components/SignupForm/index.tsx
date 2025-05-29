"use client";
import { useState } from "react";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/redux/store/hooks";
import { setUserInfo } from "@/redux/actions/userSlice";
import { signupUser } from "@/redux/actions/authSlice";
import Icons from "@/Icons";
import validateForm from "./validateForm";

//props
import UserDetails from "./index.d";

//css
import {
  CommonError,
  Container,
  Error,
  Field,
  FieldsContainer,
  FormContainer,
  Hr,
  Input,
  Label,
  NameField,
  Or,
  ReferalCode,
  ReferalCodeInput,
  SignUpWith,
  StyledLink,
  Submit,
  Text,
  TextContainer,
  Title,
  Use,
  Wrapper,
} from "./index.styles";

/**
 * Renders a sign-up form for creating a new user account.
 * @returns {JSX.Element} A React element containing input fields for first name,
 * last name, mobile number, password, referral code, and social login options.
 */
const SignupForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    mobile_number: "",
    referal_code: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      if (validateForm(userDetails).valid) {
        const encryptedPassword = CryptoJS.AES.encrypt(
          userDetails.password,
          "spaweval-password"
        ).toString();

        const response = await dispatch(
          signupUser({
            email: userDetails.email,
            password: encryptedPassword,
            mobile_number: userDetails?.mobile_number,
            name: `${userDetails.firstName} ${userDetails.lastName}`,
            referal_code: userDetails.referal_code,
          })
        );
        if (response.meta.requestStatus === "rejected") {
          setError(response.payload.error); // assuming error comes like this
        } else if (response.meta.requestStatus === "fulfilled") {
          dispatch(setUserInfo(response.payload));
          router.push("/signup/submit");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setError(validateForm(userDetails).message);
      }
    } catch (error) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <FormContainer>
      <Title>Create an account</Title>
      {/* Social sign-up buttons */}
      <Wrapper>
        <SignUpWith
          iconSrc={Icons.Google}
          iconAlt="google"
          iconWidth={24}
          iconHeight={24}>
          Sign up with Google
        </SignUpWith>
        <SignUpWith
          iconSrc={Icons.AppleSolid}
          iconAlt="apple"
          iconWidth={24}
          iconHeight={24}>
          Sign up with Apple
        </SignUpWith>
      </Wrapper>
      {/* OR divider */}
      <Container>
        <Hr />
        <Or>or</Or>
        <Hr />
      </Container>
      {/* User info fields */}
      <FieldsContainer>
        <NameField>
          <Label htmlFor="firstName">
            First Name<sup>*</sup>
          </Label>
          <Input
            placeholder="Enter your first Name"
            id="firstName"
            value={userDetails.firstName}
            minLength={1}
            onChange={handleInputChange}
            required
            autoFocus
          />
        </NameField>
        <NameField>
          <Label htmlFor="lastName">
            Last Name<sup>*</sup>
          </Label>
          <Input
            placeholder="Enter your last Name"
            id="lastName"
            value={userDetails.lastName}
            onChange={handleInputChange}
            minLength={1}
            required
          />
        </NameField>
      </FieldsContainer>
      <Field>
        <Label htmlFor="email">
          Email ID<sup>*</sup>
        </Label>
        <Input
          placeholder="Enter your Email ID"
          type="email"
          id="email"
          value={userDetails.email}
          onChange={handleInputChange}
          required
        />
      </Field>
      <Field>
        <Label htmlFor="mobile_number">
          Mobile No.<sup>*</sup>
        </Label>
        <Input
          placeholder="Enter your Mobile No."
          type="tel"
          id="mobile_number"
          value={userDetails?.mobile_number ?? ""}
          onChange={handleInputChange}
          minLength={10}
          required
        />
      </Field>
      <Field>
        <Label htmlFor="password">
          Create a Password.<sup>*</sup>
        </Label>
        <Input
          placeholder="Enter your Password"
          type="password"
          id="password"
          value={userDetails.password}
          onChange={handleInputChange}
          minLength={8}
          required
        />
        <Error>Must be at least 8 characters.</Error>
      </Field>
      {error && <CommonError> {error}</CommonError>}
      {/* Referral code input */}
      <Field>
        <Label htmlFor="referal_code">Enter Your Referral code to use</Label>
        <ReferalCode>
          <ReferalCodeInput
            type="text"
            placeholder="SPAWN@1420"
            value={userDetails?.referal_code}
            onChange={handleInputChange}
            id="referal_code"
          />
          <Use>Use</Use>
        </ReferalCode>
      </Field>
      {/* Submit button */}
      <Submit onClick={handleSubmit}>Create Account</Submit>
      <TextContainer>
        <Text>Already have an account? </Text>
        <StyledLink href="/login"> Log in</StyledLink>
      </TextContainer>
    </FormContainer>
  );
};

export default SignupForm;
