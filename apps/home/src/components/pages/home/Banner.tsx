import { Text } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { BannerType } from 'src/types/home';
import { openNewWindow } from 'src/utils/url';

interface BannerProps {
  banner: BannerType;
}

export const Banner = ({ banner }: BannerProps) => {
  const { imageUrl, bannerTitle, bannerContent, bannerLink } = banner;

  return (
    <Container imageUrl={imageUrl} onClick={() => openNewWindow(bannerLink)}>
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

const Container = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;

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
