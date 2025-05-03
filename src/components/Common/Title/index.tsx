import { TitleWrapper } from "./index.styles";

type Props = {
  children?: React.ReactNode | string;
  className?: string;
};

/**
 * Title component
 * @param {string} children - The title text to be displayed.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - A styled title component.
 */
const Title = ({ children }: Props) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;
