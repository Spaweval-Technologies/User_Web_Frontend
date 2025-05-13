//props
import TitleProps from "./index.d";

//css
import { TitleWrapper } from "./index.styles";

/**
 * Title component
 * @param {string} children - The title text to be displayed.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - A styled title component.
 */
const Title = ({ children }: TitleProps) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;
