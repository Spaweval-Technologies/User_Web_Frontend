import { ReactElement, ReactNode } from "react";

export type OptionItem = { label: string; value: string, child?: any };

export type GroupedOptions = {
  label: string;
  options: OptionItem[];
};

type StyledSelectProps = {
    value: string;
    onChange?: (value: string) => void;
    className?: string;
    disabled?: boolean;
    options: (OptionItem | GroupedOptions)[];
    defaultText: string
};

export default StyledSelectProps;