import { useState } from "react";

import Icon from "../Icon";
import Icons from "@/Icons";

//props
import CollapseProps from "./index.d";

//css
import { Button, CollapseWrapper } from "./index.styles";

/**
 * Collapse component to toggle the visibility of its children content.
 * @param {CollapseProps} props - Props for the Collapse component
 * @param {React.ReactNode} props.children - The content to show/hide when toggled
 * @param {string} props.title - The title displayed on the toggle button
 * @returns {JSX.Element} A collapsible section with a toggle button
 */
const Collapse = ({ children, title }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapseWrapper>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? (
          <Icon src={Icons.UpArrow} width={12} height={12} />
        ) : (
          <Icon src={Icons.DownArrow} width={12} height={12} />
        )}
      </Button>
      {isOpen && <div>{children}</div>}
    </CollapseWrapper>
  );
};

export default Collapse;
