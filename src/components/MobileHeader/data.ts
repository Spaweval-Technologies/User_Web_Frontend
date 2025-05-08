import { ListProps } from './index.d';
import Icons from "@/Icons";

const menuOptions: ListProps[] = [
    {
        label: "Ciara Angles",
        value: "ciara angles",
        options: [
            {
                label: 'Profile',
                value: "profile",
                icon: Icons.ProfileIcon
            },
            {
                label: 'Appointments',
                value: "appointments",
                icon: Icons.Calendar
            },
            {
                label: 'Save',
                value: "save",
                icon: Icons.Save
            },
            {
                label: 'Wallet',
                value: "wallet",
                icon: Icons.Wallet
            },
            {
                label: 'Settings',
                value: "settings",
                icon: Icons.Setting
            }
        ]
    },
    {
        label: "Other",
        value: 'other',
        options: [
            {
                label: 'For Business',
                value: 'for business'
            },
            {
                label: 'For Download App',
                value: 'for download app'
            },
            {
                label: 'Log out',
                value: 'log out'
            }
        ]
    }
]

export default menuOptions;