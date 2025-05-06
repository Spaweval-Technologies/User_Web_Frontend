// CSS
import { FormContainer, Submit, Text, Title } from "../SignupForm/index.styles";
import { CodeInput, Input, Resend, SentCode, Timer } from "./index.styles";

/**
 * SignupOtpVerify component renders the OTP verification screen
 * where users enter a 6-digit code sent to their registered mobile number.
 * @returns {JSX.Element} A React element displaying OTP input fields,
 * verification button, resend option, and a countdown timer.
 */
const SignupOtpVerify = () => {
  return (
    <FormContainer>
      <Title>Please Enter the OTP</Title>

      {/* Masked mobile display */}
      <SentCode>
        We sent a code to<sup>********</sup>01
      </SentCode>

      {/* 6-digit OTP input fields */}
      <CodeInput>
        <Input type="number" maxLength={1}/>
        <Input type="number" maxLength={1}/>
        <Input type="number" maxLength={1}/>
        <Input type="number" maxLength={1}/>
        <Input type="number" maxLength={1}/>
        <Input type="number" maxLength={1}/>
      </CodeInput>

      {/* Button to submit OTP */}
      <Submit>Verify</Submit>

      {/* Message and resend controls */}
      <Text>Don't get Code?</Text>
      <Timer>00:30</Timer>
      <Resend>Resend Code</Resend>
    </FormContainer>
  );
};

export default SignupOtpVerify;
