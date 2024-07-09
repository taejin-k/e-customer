import { Text } from '@29cm/ui-emotion';
import styled from '@emotion/styled';

type BannerProps = {
  backgroundImage: string;
  title: string;
  description: string;
};

export const Banner = ({ backgroundImage, title, description }: BannerProps) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <Wrapper>
        <Text color="onWhite" typography="title-xxl-bold">
          {title}
        </Text>
        <Text color="onWhite" typography="text-xxl-medium">
          {description}
        </Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div<{ backgroundImage: string }>`
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
