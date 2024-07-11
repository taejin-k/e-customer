import { CommonLayout } from '@29cm/ui-emotion';
import styled from '@emotion/styled';
import Banner from 'src/components/pages/home/Banner';
import Feed from 'src/components/pages/home/Feed';
import Gate from 'src/components/pages/home/Gate';
import RightArrowSVG from 'src/components/svgs/RightArrowSVG';
import { useBannersQuery, useCartsQuery, useFeedsQuery, useGatesQuery } from 'src/quries/homeQuery';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  const { data: banners = [] } = useBannersQuery();
  const { data: gatesList = [] } = useGatesQuery();
  const { data: feeds = [] } = useFeedsQuery();
  const { data: carts = [] } = useCartsQuery();

  return (
    <CommonLayout cartCount={carts?.length || 0}>
      {!!banners.length && (
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
      )}

      {!!gatesList.length && (
        <GateWrapper>
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
                <SwiperSlide key={gate.gateId}>
                  <Gate key={gate.gateId} gate={gate} icon={<RightArrowSVG size={12} />} />
                </SwiperSlide>
              ))}
            </GateSwiper>
          ))}
        </GateWrapper>
      )}

      {!!feeds.length && (
        <RecommendedProduct>
          {feeds.map((feed) => (
            <Feed key={feed.feedNo} feed={feed} carts={carts} />
          ))}
        </RecommendedProduct>
      )}
    </CommonLayout>
  );
}

const BannerSwiper = styled(Swiper)`
  width: 100%;
  aspect-ratio: 0.75 / 1;
`;

const GateWrapper = styled.div`
  padding: 24px 20px;
`;

const GateSwiper = styled(Swiper)`
  &:first-child {
    margin-bottom: 10px;
  }
`;

const RecommendedProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 20px 60px;
`;
