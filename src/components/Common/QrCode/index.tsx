import QRCode from "react-qr-code";

import StyledQrProps from "./index.d";

//css
import { QrWrapper, Content } from "./index.styles";

/**
 * StyledQrCode Component
 * @param {StyledQrProps} props - Props for the component.
 * @param {() => void} [props.onMouseLeave] - Optional handler for mouse leave event.
 * @param {string} [props.content] - Optional content to display below the QR code.
 * @param {string} className
 * @param {string} value - value for qr code
 * @returns {JSX.Element} A styled QR code block with optional label content.
 */
const StyledQrCode = ({onMouseLeave, content, value, className, qrWidth, qrHeight}: StyledQrProps) => {
   return (
     <QrWrapper className={className} onMouseLeave={onMouseLeave}>
        <QRCode value={value?? "hello"} width={qrWidth ?? "116px"} height={qrHeight ?? "116px"}/>
        {content && <Content>{content}</Content>}
     </QrWrapper>
   )
}

export default StyledQrCode;