import { CommonLayout } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import { getBannersAPI, getFeedsAPI, getGatesAPI } from 'src/apis/homeAPI';
import Banner from 'src/components/pages/home/Banner';
import Feed from 'src/components/pages/home/Feed';
import Gate from 'src/components/pages/home/Gate';
import RightArrowSVG from 'src/components/svgs/RightArrowSVG';
import { useCartsQuery } from 'src/quries/homeQuery';
import { BannerType, FeedType, GateType, NewFeedType } from 'src/types/home';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface HomeProps {
  banners: BannerType[];
  gatesList: GateType[][];
  feeds: FeedType[];
}

export default function Home({ banners, gatesList, feeds }: HomeProps) {
  const { data: carts = [] } = useCartsQuery();

  const newFeeds: NewFeedType[] = feeds.map((feed) => ({
    ...feed,
    relatedProducts: feed.relatedProducts.map((relatedProduct) => ({
      ...relatedProduct,
      isAddedCart: carts.some((cart) => cart.productNo === relatedProduct.productNo),
    })),
  }));

  return (
    <CommonLayout cartCount={carts?.length || 0}>
      <Container>
        <BannerSwiper
          id="banner-section"
          pagination={{ type: 'progressbar' }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          loop
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.bannerNo}>
              <Banner banner={banner} />
            </SwiperSlide>
          ))}
        </BannerSwiper>

        <div>
          {gatesList.map((gates) => (
            <GateSwiper
              key={gates[0].gateId}
              id="gate-section"
              slidesPerView="auto"
              spaceBetween={8}
              grabCursor={true}
              freeMode={true}
              modules={[FreeMode]}
            >
              {gates.map((gate) => (
                <GateSwiperSlide key={gate.gateId}>
                  <Gate key={gate.gateId} gate={gate} icon={<RightArrowSVG size={12} />} />
                </GateSwiperSlide>
              ))}
            </GateSwiper>
          ))}
        </div>

        <RecommendedProduct>
          {newFeeds.map((feed) => (
            <Feed key={feed.feedNo} feed={feed} />
          ))}
        </RecommendedProduct>
      </Container>
    </CommonLayout>
  );
}

export const getServerSideProps = async () => {
  const [banners, gatesList, feeds] = await Promise.all([getBannersAPI(), getGatesAPI(), getFeedsAPI()]);

  return {
    props: {
      banners,
      gatesList,
      feeds,
    },
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 60px;
`;

const BannerSwiper = styled(Swiper)`
  width: 100%;
  aspect-ratio: 0.75 / 1;
`;

const GateSwiper = styled(Swiper)`
  &:first-of-type {
    margin-bottom: 10px;
  }
`;

const GateSwiperSlide = styled(SwiperSlide)`
  &:first-of-type {
    margin-left: 20px;
  }

  &:last-of-type {
    margin-right: 20px;
  }
`;

const RecommendedProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 20px;
`;
