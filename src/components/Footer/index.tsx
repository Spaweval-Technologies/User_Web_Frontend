import Icons from "@/Icons";
import Icon from "../Common/Icon";

//css
import {
  CopyRightContainer,
  CopyRightLink,
  CopyRightText,
  Description,
  Disclaimer,
  FooterContent,
  FooterWrapper,
  GetApp,
  HR,
  IconsWrapper,
  List,
  ListItem,
  ListItemLink,
  ListTitle,
  LogoContentWrapper,
  SocialMediaIcon,
  SocialMediaWrapper,
  Wrapper,
} from "./index.styles";

/**
 * Footer Component
 * @description The Footer component provides a structured layout for the footer of a webpage, including business links, legal information, and social media icons.
 * @returns {JSX.Element} - A footer component with various sections and links.
 */
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoContentWrapper>
          <Icon src={Icons.Logo} alt="logo" width={50} height={36} />
          <Description>
            A good spa description might be: “Indulge in the ultimate relaxation
            experience at our serene spa oasis. From luxurious treatments to
            tranquil ambiance, our expert therapists tailor every experience to
            rejuvenate the mind, body, and spirit.
          </Description>
        </LogoContentWrapper>
        <Wrapper>
          <List>
            <ListTitle>For Business</ListTitle>
            <ListItem>
              <ListItemLink href="#">For Partners</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">Pricing</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">Support</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">Status</ListItemLink>
            </ListItem>
          </List>
          <List>
            <ListTitle>About Spawn</ListTitle>
            <ListItem>
              <ListItemLink href="#">Careers</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">Our Blog & Recipes</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">Spawn Community</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">FAQ's</ListItemLink>
            </ListItem>
          </List>
          <List>
            <ListTitle>Legal</ListTitle>
            <ListItem>
              <ListItemLink href="#">Privacy Policy</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">Terms of Service</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">Terms of Use</ListItemLink>
            </ListItem>
          </List>
          <GetApp>
            Get the App
            <IconsWrapper>
              <Icon
                src={Icons.AndroidSolid}
                alt="android"
                width={24}
                height={24}
              />
              <Icon src={Icons.AppleSolid} alt="apple" width={24} height={24} />
            </IconsWrapper>
          </GetApp>
          <List>
            <ListTitle>Follow us on</ListTitle>
            <SocialMediaWrapper>
              <SocialMediaIcon
                src={Icons.FacebookSolid}
                alt="facebook"
                width={16}
                height={16}
                mobileheight={19}
                mobilewidth={18}
              />
              <SocialMediaIcon
                src={Icons.TwitterSolid}
                alt="twitter"
                width={16}
                height={16}
                mobileheight={19}
                mobilewidth={18}
              />
              <SocialMediaIcon
                src={Icons.InstagramSolid}
                alt="telegram"
                width={16}
                height={16}
                mobileheight={19}
                mobilewidth={18}
              />
              <SocialMediaIcon
                src={Icons.GoogleSolid}
                alt="google"
                width={16}
                height={16}
                mobileheight={19}
                mobilewidth={18}
              />
              <SocialMediaIcon
                src={Icons.PinterestSolid}
                alt="pinterest"
                width={16}
                height={16}
                mobileheight={19}
                mobilewidth={18}
              />
            </SocialMediaWrapper>
            <HR />
            <SocialMediaWrapper>
              <SocialMediaIcon
                src={Icons.AndroidSolid}
                alt="android"
                width={26}
                height={26}
              />
              <SocialMediaIcon
                src={Icons.AppleSolid}
                alt="apple"
                width={26}
                height={26}
              />
            </SocialMediaWrapper>
          </List>
        </Wrapper>
      </FooterContent>
      <CopyRightContainer>
        <Disclaimer>
          WEBSITE DISCLAIMER: Spawn services are not intended to treat,
          diagnose, cure, or prevent any disease.
        </Disclaimer>
        <CopyRightText>
          Copyright © 2024
          <CopyRightLink href="#"> www.spawn.com</CopyRightLink>. All Rights
          Reserved.
        </CopyRightText>
      </CopyRightContainer>
    </FooterWrapper>
  );
};

export default Footer;
