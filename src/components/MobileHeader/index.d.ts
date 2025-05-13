import { StaticImageData } from 'next/image';

export type MobileOptionProps = {
    label: string;
    value: string;
    icon?: string;
}

export type ListProps = {
    label: string;
    value: string;
    options?: MobileOptionProps[]
}

export type MenuListProps = {
    menuOptions: ListProps[]
}

export type StaticHeaderMbProps = {
    showMenu: boolean;
    onMenuClick: () => void;
    onMenuClose: () => void
    menuOptions: ListProps[];
    showSearch?: boolean;
}