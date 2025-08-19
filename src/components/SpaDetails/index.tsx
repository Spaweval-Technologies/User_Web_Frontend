import Icons from '@/Icons';
import Icon from '../Common/Icon';
import Review from '../Common/Review';
import { Container, IconsWrapper, OpenClose, Row, Time, Title, Wrapper } from './index.styles';
import SliderWithThumbnails from '../Common/Carousel/SpaDetailsCarousel';

const SpaDetailsContent = () => {
  return (
    <Wrapper>
      <Title>Deep Tissue Spa</Title>
      <Container>
        <Row>
          <Review
            show={false}
            iconHeight={18}
            iconWidth={18}
            starCount={5}
            rating={4}
            reviews={1120}
          />
          <OpenClose>Open</OpenClose>
          <Time>until 7:30pm • Bangalore, Karnataka, India</Time>
        </Row>
        <IconsWrapper>
          <Icon src={Icons.Share} alt="share" width={48} height={48} />
          <Icon src={Icons.Like} alt="like" width={48} height={48} />
        </IconsWrapper>
      </Container>
      <SliderWithThumbnails />
    </Wrapper>
  );
};

export default SpaDetailsContent;
