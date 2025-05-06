import SignupForm from "@/components/SignupForm";
import Images from "../../../public/Images";

//css
import { Img, Wrapper } from "./index.styles";

/**
 * Signup page component that displays the user registration form
 * alongside a background image.
 * @returns {JSX.Element} A React component containing the SignupForm and a side image.
 */
const Signup = () => {
  return (
    <Wrapper>
      {/* Sign-up form component */}
      <SignupForm />
      {/* <SignupOtpVerify /> */}
      {/* Decorative background image */}
      <Img src={Images.SignUpBg} alt="signupbg" />
    </Wrapper>
  );
};

export default Signup;
