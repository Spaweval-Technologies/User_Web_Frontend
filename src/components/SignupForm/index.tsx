import Icons from "@/Icons";

//css
import {
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
          <Input placeholder="Enter your first Name" id="firstName" />
        </NameField>
        <NameField>
          <Label htmlFor="lastName">
            Last Name<sup>*</sup>
          </Label>
          <Input placeholder="Enter your last Name" id="lastName" />
        </NameField>
      </FieldsContainer>
      <Field>
        <Label htmlFor="mobileNumber">
          Mobile No.<sup>*</sup>
        </Label>
        <Input
          placeholder="Enter your Mobile No."
          type="tel"
          id="mobileNumber"
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
        />
        <Error>Must be at least 8 characters.</Error>
      </Field>
      {/* Referral code input */}
      <Field>
        <Label>Enter Your Referral code to use</Label>
        <ReferalCode>
          <ReferalCodeInput type="text" placeholder="SPAWN@1420" />
          <Use>Use</Use>
        </ReferalCode>
      </Field>
      {/* Submit button */}
      <Submit>Create Account</Submit>
      <TextContainer>
        <Text>Already have an account? </Text>
        <StyledLink href="/login"> Log in</StyledLink>
      </TextContainer>
    </FormContainer>
  );
};

export default SignupForm;
