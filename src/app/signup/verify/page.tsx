import Images from "../../../../public/Images";
import SignupOtpVerify from "@/components/SignupOtpVerify";

//css
import { Img, Wrapper } from "../index.styles";

/**
 * SignupVerify page component that renders the OTP verification step
 * during the signup process, alongside a decorative background image.
 * @returns {JSX.Element} A React component containing the SignupOtpVerify form
 * and a visual background image.
 */
const SignupVerify = () => {
  return (
    <Wrapper>
      {/* <SignupOtpVerify /> */}
      <SignupOtpVerify />
      {/* Decorative background image */}
      <Img src={Images.SignUpBg} alt="signupbg" />
    </Wrapper>
  );
};

export default SignupVerify;
