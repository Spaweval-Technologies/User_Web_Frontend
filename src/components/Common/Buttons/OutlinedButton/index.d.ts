type OutlinedButtonProps = {
    children: React.ReactNode | string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
};

export default OutlinedButtonProps;