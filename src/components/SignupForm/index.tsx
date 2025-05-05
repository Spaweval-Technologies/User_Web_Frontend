import Icons from "@/Icons";
import {
  Container,
  CreateAccount,
  Error,
  Field,
  FieldsContainer,
  FormContainer,
  Hr,
  Input,
  Label,
  LogInLink,
  NameField,
  Or,
  ReferalCode,
  ReferalCodeInput,
  SignUpWith,
  Text,
  TextContainer,
  Title,
  Use,
  Wrapper,
} from "./index.styles";

const SignupForm = () => {
  return (
    <FormContainer>
      <Title>Create an account</Title>
      <Wrapper>
        <SignUpWith
          iconSrc={Icons.Google}
          iconAlt="google"
          iconWidth={24}
          iconHeight={24}
        >
          Sign up with Google
        </SignUpWith>
        <SignUpWith
          iconSrc={Icons.AppleSolid}
          iconAlt="apple"
          iconWidth={24}
          iconHeight={24}
        >
          Sign up with Google
        </SignUpWith>
      </Wrapper>
      <Container>
        <Hr />
        <Or>or</Or>
        <Hr />
      </Container>
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
          type="number"
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
      <Field>
        <Label>Enter Your Referral code to use</Label>
        <ReferalCode><ReferalCodeInput type="text" placeholder="SPAWN@1420"/><Use>Use</Use></ReferalCode>
      </Field>
      <CreateAccount>Create Account</CreateAccount>
      <TextContainer>
        <Text>Already have an account? </Text>
        <LogInLink href="#"> Log in</LogInLink>
      </TextContainer>
    </FormContainer>
  );
};

export default SignupForm;
