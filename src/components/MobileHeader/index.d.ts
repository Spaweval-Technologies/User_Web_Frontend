import { StaticImageData } from 'next/image';
import { OptionItem } from '../Common/Select';
import { GroupedOptions } from '../Common/Select';

export type MobileOptionProps = {
  label: string;
  value: string;
  icon?: string;
};

export type ListProps = {
  label: string;
  value: string;
  options?: MobileOptionProps[];
};

export type MenuListProps = {
  menuOptions: ListProps[];
};

export type StaticHeaderMbProps = {
  showMenu: boolean;
  onMenuClick: () => void;
  onMenuClose: () => void;
  menuOptions: (OptionItem | GroupedOptions)[];
  showSearch?: boolean;
};
