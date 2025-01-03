import { Text } from '@eCustomer/ui-emotion';
import styled from '@emotion/styled';
import { BannerType } from 'src/types/home';

interface BannerProps {
  banner: BannerType;
}

const Banner = ({ banner }: BannerProps) => {
  const { imageUrl, bannerTitle, bannerContent } = banner;

  return (
    <Container imageUrl={imageUrl}>
      <Wrapper>
        <Text color="onWhite" typography="title-xxl-bold">
          {bannerTitle}
        </Text>
        <Text color="onWhite" typography="text-xxl-medium">
          {bannerContent}
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Banner;

const Container = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  cursor: pointer;

  ${(props) => ({
    backgroundImage: `url(${props.imageUrl})`,
  })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: 80px;
  left: 32px;
  width: auto;
  max-width: 261px;
`;
