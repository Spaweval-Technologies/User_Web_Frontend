import Images from "../../../public/Images";

import Icon from "../Common/Icon";
import Icons from "@/Icons";

//css
import {
  Container,
  Content,
  Description,
  DownloadImg,
  DownloadQr,
  GetAppButton,
  SubTitle,
  SubTitleText,
  Title,
} from "./index.styles";

/**
 * Download App component
 * @returns {JSX.Element} A download app section layout.
 */
const DownloadApp = () => {
  return (
    <Container>
      <Content>
        <SubTitle>
          <SubTitleText>Available on</SubTitleText>
          <Icon src={Icons.AndroidSolid} alt="android" width={28} height={28} />
          <Icon src={Icons.AppleSolid} alt="android" width={28} height={28} />
        </SubTitle>
        <Title>Install the Spawn app</Title>
        <Description>
          Spas offer numerous benefits, including stress reduction, improved
          sleep, pain relief, and enhanced skin health, all contributing to
          overall you can get in this mobile app
        </Description>
        <DownloadQr value={"check"} />
        <GetAppButton
          iconSrc={Icons.ScanBarcode}
          iconAlt="get app"
          iconPosition="right"
          iconWidth={23}
          iconHeight={23}
        >
          Get the App
        </GetAppButton>
      </Content>
      <DownloadImg loading="lazy" src={Images.DownloadApp} alt="downloadapp" />
    </Container>
  );
};

export default DownloadApp;
