import Image from "next/image";
import Icons from "@/Icons";

import Images from "../../../public/Images";

//css
import { Content, Description, FindMore, Title, Wrapper } from "./index.styles";

/**
 * SpaBusiness Component
 *
 * This component displays a promotional section for the business-facing features
 * of the Spawn platform. It includes a title, description, a call-to-action button,
 * and a background image representing the business tool.
 *
 * @returns {JSX.Element} The rendered SpaBusiness section.
 */

const SpaBusiness = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Spawn for Business</Title>
        <Description>
          Here's how to effortlessly fill those gaps with our new online booking
          optimisation tool. Booking your salon appointments is as easy as a few
          taps on your device. It's quick, convenient, and hassle-free.
        </Description>
        <FindMore
          iconSrc={Icons.ArrowCircleRight}
          iconAlt="white right arrow circle"
          iconWidth={20}
          iconHeight={20}
          iconPosition="right"
        >
          Find out More
        </FindMore>
      </Content>
      <Image
        src={Images.BusinessLaptopBg}
        alt={"business laptop bg"}
        objectFit="cover"
      />
    </Wrapper>
  );
};

export default SpaBusiness;
