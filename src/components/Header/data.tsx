import { GroupedOptions, OptionItem } from "../Common/Select/index.d";
import { BusinessButton } from "./index.styles";
import Icons from "@/Icons";

const menuOptions: (GroupedOptions | OptionItem)[] = [
  {
    label: "For Customers",
    options: [
      {
        label: "Login or Sign up",
        value: "login or sign up",
      },
      {
        label: "Download the app",
        value: "download the app",
      },
      {
        label: "Help and Support",
        value: "help and support",
      },
    ],
  },
  {
    label: "For business",
    value: "for business",
    child: (
      <BusinessButton
        iconHeight={24}
        iconWidth={24}
        iconSrc={Icons.ArrowRightBlack}
        iconPosition="right"
        iconAlt="right-arrow"
      >
        For Business
      </BusinessButton>
    ),
  },
];

export default menuOptions;
