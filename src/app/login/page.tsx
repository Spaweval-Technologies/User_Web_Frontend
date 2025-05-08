import LoginForm from "@/components/Login";
import Images from "../../../public/Images";

//css
import { Img, Wrapper } from "../signup/index.styles";

/**
 * Login Page Component 
 * Renders the login form along with a background image.
 * Acts as the main container for the login UI.
 * @returns {JSX.Element} The rendered login page component.
 */
const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
      <Img src={Images.SignUpBg} alt="login bg" />
    </Wrapper>
  );
};

export default Login;
