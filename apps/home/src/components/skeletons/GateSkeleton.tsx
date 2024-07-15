import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from '../commons/Skeleton';

const GateSkeleton = () => {
  return (
    <Container>
      <Swiper>
        <SwiperSlide>
          <Wrapper>
            <Gate />
            <Gate />
          </Wrapper>
        </SwiperSlide>
      </Swiper>
      <Swiper>
        <SwiperSlide>
          <Wrapper>
            <Gate />
            <Gate />
          </Wrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default GateSkeleton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 0 20px;
`;

const Gate = styled(Skeleton)`
  width: 200px;
  height: 48px;
  border-radius: 9999px;
`;
