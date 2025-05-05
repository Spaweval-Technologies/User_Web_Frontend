import SignupForm from "@/components/SignupForm";
import { Img, Wrapper } from "./index.styles";
import Images from "../../../public/Images";

const Signup = () => {
  return (
    <Wrapper>
        <SignupForm />
        <Img src={Images.SignUpBg} alt="signupbg"  />
    </Wrapper>
  )
};

export default Signup;