import Icons from "@/Icons";
import Icon from "../Icon";

//props
import NotificationProps from "./index.d";

//css
import {
  InstallBtn,
  LogoWrapper,
  NotificationWrapper,
  Stars,
  Text,
  TextContainer,
  Wrapper,
} from "./index.styles";

/**
 * AppNotificationMb Component
 * A mobile notification banner component that prompts the user to download the Spawn app.
 * Includes app logo, star rating icons, a call-to-action install button, and a close icon.
 * @param {NotificationProps} props - Props object.
 * @param {boolean} props.show - Controls visibility of the notification banner.
 * @param {() => void} props.onClose - Callback triggered when the close icon is clicked.
 * @returns {JSX.Element} The rendered mobile app notification banner component.
 */
const AppNotificationMb = ({
  show,
  onClose,
  appRating = 5,
}: NotificationProps) => {
  const filledStars = Math.floor(appRating);
  const hasHalfStar = appRating - filledStars >= 0.5;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      stars.push(
        <Icon
          key={i}
          src={Icons.WhiteStar}
          alt="filled star white"
          width={15}
          height={15}
        />
      );
    }
    // else if (i === filledStars && hasHalfStar) {
    //     stars.push(<Icon key={i} src={Icons.StarHalf} alt="half" width={20} height={20} />);
    // }
    else {
      stars.push(
        <Icon
          key={i}
          src={Icons.StarGray}
          alt="empty - star"
          width={15}
          height={15}
        />
      );
    }
  }

  return (
    <NotificationWrapper show={show}>
      <Wrapper>
        <LogoWrapper href="#">
          <Icon src={Icons.Logo} alt="logo" width={36} height={29} />
        </LogoWrapper>
        <TextContainer>
          <Text>Download the Spawn app</Text>
          <Stars>{stars}</Stars>
        </TextContainer>
      </Wrapper>
      <Wrapper>
        <InstallBtn>Install</InstallBtn>
        <Icon
          onClick={onClose}
          src={Icons.WhiteClose}
          width={13}
          height={13}
          alt="white close"
        />
      </Wrapper>
    </NotificationWrapper>
  );
};

export default AppNotificationMb;
