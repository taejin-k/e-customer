import { Text } from '@29cm/ui-emotion';
import styled from '@emotion/styled';

type BannerProps = {
  backgroundImage: string;
  title: string;
  description: string;
};

export const Banner = ({ backgroundImage, title, description }: BannerProps) => {
  return (
    <BannerContainer backgroundImage={backgroundImage}>
      <BannerWrapper>
        <Text color="onWhite" typography="title-xxl-bold">
          {title}
        </Text>
        <Text color="onWhite" typography="text-xxl-medium">
          {description}
        </Text>
      </BannerWrapper>
    </BannerContainer>
  );
};

const BannerContainer = styled.div<{ backgroundImage: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;

  ${(props) => ({
    backgroundImage: `url(${props.backgroundImage})`,
  })}
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: 80px;
  left: 32px;
  width: auto;
  max-width: 261px;
`;
