import { Button, Text } from '@eCustomer/ui-emotion';
import { vars } from '@eCustomer/ui-tokens';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import CustomImage from 'src/components/commons/CustomImage';
import { NEXT_IMAGE_SIZES } from 'src/constants/image';
import { NewFeedType } from 'src/types/home';
import RelatedProduct from './RelatedProduct';

interface FeedProps {
  feed: NewFeedType;
}

const Feed = ({ feed }: FeedProps) => {
  const { feedTitle, feedContents, imageUrl, recommendCode, relatedProducts } = feed;
  const router = useRouter();

  const getButtonLabel = (recommendCode: number) => {
    if (!recommendCode) return '모든 추천상품 보러가기';
    else return '추천상품 보러가기';
  };

  const handlePushProductsPage = (recommendCode: number) => {
    router.push(`/products/${recommendCode}`);
  };

  return (
    <Container>
      <Wrapper>
        <ImageBox>
          <Image src={imageUrl} fill sizes={NEXT_IMAGE_SIZES} priority alt={feedTitle} />
        </ImageBox>
        <ContentBox>
          <TextArea>
            <Text color="primary" typography="title-m-bold">
              {feedTitle}
            </Text>
            <Text color="primary" typography="text-l">
              {feedContents}
            </Text>
          </TextArea>
          {!!relatedProducts.length && (
            <RelatedProductArea>
              {relatedProducts.map((relatedProduct) => (
                <RelatedProduct
                  key={relatedProduct.productNo}
                  relatedProduct={relatedProduct}
                  recommendCode={recommendCode}
                />
              ))}
            </RelatedProductArea>
          )}
        </ContentBox>
      </Wrapper>
      <Button variant="primary" size="medium" onClick={() => handlePushProductsPage(recommendCode)}>
        {getButtonLabel(recommendCode)}
      </Button>
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${vars.$semantic.color.background.low};
  overflow: hidden;
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  cursor: pointer;
`;

const Image = styled(CustomImage)`
  object-fit: cover;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 16px 20px 18px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RelatedProductArea = styled.div`
  display: flex;
  flex-direction: column;
`;
