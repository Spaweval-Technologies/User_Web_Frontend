type IconButtonProps = {
    children: React.ReactNode | string;
    iconSrc: string;
    iconAlt?: string;
    iconWidth?: number;
    iconHeight?: number;
    className?: string;
    iconClassName?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    iconPosition?: "left" | "right";
};

export default IconButtonProps;