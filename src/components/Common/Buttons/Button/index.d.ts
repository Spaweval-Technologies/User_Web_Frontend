type ButtonProps = {
    children: React.ReactNode | string;
    className?: string;
    onClick?: (e: any) => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
};

export default ButtonProps;