import { GroupedOptions } from './../Common/Select/index.d';
import Icons from '@/Icons';

/**
 * getMenuOptionsMb - Generates menu options for the mobile header.
 * @param {string | undefined} userName - The name of the user, used for the profile label.
 * @returns {GroupedOptions[]} An array of grouped options for the mobile menu.
 */
const getMenuOptionsMb = (userName?: string): GroupedOptions[] => {
  return [
    {
      label: userName || 'Ciara Angles',
      value: userName || 'ciara angles',
      options: [
        {
          label: 'Profile',
          value: 'profile',
          icon: Icons.ProfileIcon,
        },
        {
          label: 'Appointments',
          value: 'appointments',
          icon: Icons.Calendar,
        },
        {
          label: 'Save',
          value: 'save',
          icon: Icons.Save,
        },
        {
          label: 'Wallet',
          value: 'wallet',
          icon: Icons.Wallet,
        },
        {
          label: 'Settings',
          value: 'settings',
          icon: Icons.Setting,
        },
      ],
    },
    {
      label: 'Other',
      value: 'other',
      options: [
        {
          label: 'For Business',
          value: 'for business',
        },
        {
          label: 'For Download App',
          value: 'for download app',
        },
        {
          label: 'Log out',
          value: 'log out',
        },
      ],
    },
  ];
};

export default getMenuOptionsMb;
