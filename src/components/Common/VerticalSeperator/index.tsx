import  VerticalSeperatorProps from "./index.d";

//css
import { Hr } from "./index.styles";

/*
 * VerticalSeperator component
 * @param {string} height - The height of the separator.
 * @param {string} color - The color of the separator.
 * @returns {JSX.Element} - A vertical separator with specified properties.
 */
const VerticalSeperator = ({ height, color }: VerticalSeperatorProps) => {
  return <Hr height={height} color={color} />;
};

export default VerticalSeperator;
