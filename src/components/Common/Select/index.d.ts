type StyledSelectProps = {
    value: string;
    onChange?: (value: string) => void;
    className?: string;
    disabled?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    options: Array<{ label: string; value: string }>;
};

export default StyledSelectProps;