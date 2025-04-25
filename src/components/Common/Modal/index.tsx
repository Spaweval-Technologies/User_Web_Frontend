import Icons from "@/Icons";

import ModalProps from "./index.d";

//css
import { CloseButton, ModalWrapper } from "./index.styles";

/**
 * StyledModal component
 * @param {boolean} isOpen - Determines if the modal is open or closed.
 * @param {function} onClose - Function to close the modal.
 * @param {ReactNode | string} children - Content to be displayed inside the modal.
 * @returns {JSX.Element | null} - A styled modal component that overlays the screen when open.
 */
const StyledModal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ModalWrapper style={{display: isOpen ? 'flex': 'none'}} onClick={onClose}>
        <CloseButton
          src={Icons.Close}
          onClick={onClose}
          width={14}
          height={14}
          alt="close"
        />
        {children}
     </ModalWrapper>
  );
};

export default StyledModal;
