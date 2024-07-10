import { CartIcon, CommonLayout, Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  const { data: feeds } = useFeedsQuery();
  const { data: carts } = useCartsQuery();

  return (
    <CommonLayout>
      <Swiper
        id="banner-section"
        style={{
          width: '100%',
          aspectRatio: '0.75 / 1',
        }}
        pagination={{ type: 'progressbar' }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundImage: `url('https://img.29cm.co.kr/cm/202310/11ee77bc7f3794a58a7f7da735a852f3.jpg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 80,
                left: 32,
                width: 'auto',
                maxWidth: 261,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <Text color="onWhite" typography="title-xxl-bold">
                Think 29 times in customer’s shoes
              </Text>
              <Text color="onWhite" typography="text-xxl-medium">
                무엇보다 고객 입장에서 29번 더 생각해요
              </Text>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundImage: `url('https://img.29cm.co.kr/cm/202310/11ee77bc7f3794a58a7f7da735a852f3.jpg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 80,
                left: 32,
                width: 'auto',
                maxWidth: 261,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <Text color="onWhite" typography="title-xxl-bold">
                Think 29 times in customer’s shoes
              </Text>
              <Text color="onWhite" typography="text-xxl-medium">
                무엇보다 고객 입장에서 29번 더 생각해요
              </Text>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundImage: `url('https://img.29cm.co.kr/cm/202310/11ee77bc7f3794a58a7f7da735a852f3.jpg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 80,
                left: 32,
                width: 'auto',
                maxWidth: 261,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <Text color="onWhite" typography="title-xxl-bold">
                Think 29 times in customer’s shoes
              </Text>
              <Text color="onWhite" typography="text-xxl-medium">
                무엇보다 고객 입장에서 29번 더 생각해요
              </Text>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        id="gate-section"
        style={{
          height: 102,
          padding: '24px 20px',
        }}
        slidesPerView="auto"
        grid={{ rows: 2 }}
        spaceBetween={8}
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Grid]}
      >
        <SwiperSlide>
          <div
            style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: `1px solid ${vars.$semantic.color.border.line}`,
              borderRadius: 9999,
            }}
          >
            <span>
              <img
                style={{ width: 38, height: 38, margin: 4, borderRadius: 9999 }}
                src="https://img.29cm.co.kr/cm/202310/11ee73e8909c6739a5b39d81cf226297.jpg"
              />
            </span>
            <Text color="primary" typography="text-l-medium">
              지금 필요한 코트&패딩
            </Text>
            <span style={{ marginRight: 16 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
                  fill="#A0A0A0"
                />
              </svg>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: `1px solid ${vars.$semantic.color.border.line}`,
              borderRadius: 9999,
            }}
          >
            <span>
              <img
                style={{ width: 38, height: 38, margin: 4, borderRadius: 9999 }}
                src="https://img.29cm.co.kr/cm/202310/11ee73e8909c6739a5b39d81cf226297.jpg"
              />
            </span>
            <Text color="primary" typography="text-l-medium">
              지금 필요한 코트&패딩
            </Text>
            <span style={{ marginRight: 16 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
                  fill="#A0A0A0"
                />
              </svg>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: `1px solid ${vars.$semantic.color.border.line}`,
              borderRadius: 9999,
            }}
          >
            <span>
              <img
                style={{ width: 38, height: 38, margin: 4, borderRadius: 9999 }}
                src="https://img.29cm.co.kr/cm/202310/11ee73e8909c6739a5b39d81cf226297.jpg"
              />
            </span>
            <Text color="primary" typography="text-l-medium">
              지금 필요한 코트&패딩
            </Text>
            <span style={{ marginRight: 16 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
                  fill="#A0A0A0"
                />
              </svg>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: `1px solid ${vars.$semantic.color.border.line}`,
              borderRadius: 9999,
            }}
          >
            <span>
              <img
                style={{ width: 38, height: 38, margin: 4, borderRadius: 9999 }}
                src="https://img.29cm.co.kr/cm/202310/11ee73e8909c6739a5b39d81cf226297.jpg"
              />
            </span>
            <Text color="primary" typography="text-l-medium">
              지금 필요한 코트&패딩
            </Text>
            <span style={{ marginRight: 16 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
                  fill="#A0A0A0"
                />
              </svg>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: `1px solid ${vars.$semantic.color.border.line}`,
              borderRadius: 9999,
            }}
          >
            <span>
              <img
                style={{ width: 38, height: 38, margin: 4, borderRadius: 9999 }}
                src="https://img.29cm.co.kr/cm/202310/11ee73e8909c6739a5b39d81cf226297.jpg"
              />
            </span>
            <Text color="primary" typography="text-l-medium">
              지금 필요한 코트&패딩
            </Text>
            <span style={{ marginRight: 16 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
                  fill="#A0A0A0"
                />
              </svg>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: `1px solid ${vars.$semantic.color.border.line}`,
              borderRadius: 9999,
            }}
          >
            <span>
              <img
                style={{ width: 38, height: 38, margin: 4, borderRadius: 9999 }}
                src="https://img.29cm.co.kr/cm/202310/11ee73e8909c6739a5b39d81cf226297.jpg"
              />
            </span>
            <Text color="primary" typography="text-l-medium">
              지금 필요한 코트&패딩
            </Text>
            <span style={{ marginRight: 16 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
                  fill="#A0A0A0"
                />
              </svg>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: `1px solid ${vars.$semantic.color.border.line}`,
              borderRadius: 9999,
            }}
          >
            <span>
              <img
                style={{ width: 38, height: 38, margin: 4, borderRadius: 9999 }}
                src="https://img.29cm.co.kr/cm/202310/11ee73e8909c6739a5b39d81cf226297.jpg"
              />
            </span>
            <Text color="primary" typography="text-l-medium">
              지금 필요한 코트&패딩
            </Text>
            <span style={{ marginRight: 16 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
                  fill="#A0A0A0"
                />
              </svg>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: `1px solid ${vars.$semantic.color.border.line}`,
              borderRadius: 9999,
            }}
          >
            <span>
              <img
                style={{ width: 38, height: 38, margin: 4, borderRadius: 9999 }}
                src="https://img.29cm.co.kr/cm/202310/11ee73e8909c6739a5b39d81cf226297.jpg"
              />
            </span>
            <Text color="primary" typography="text-l-medium">
              지금 필요한 코트&패딩
            </Text>
            <span style={{ marginRight: 16 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
                  fill="#A0A0A0"
                />
              </svg>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
      <section style={{ margin: '0 20px' }}>
        <div style={{ marginBottom: 60 }}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 12,
              backgroundColor: vars.$semantic.color.background.low,
              overflow: 'hidden',
            }}
          >
            <div>
              <img
                style={{ width: '100%', aspectRatio: '1 / 1' }}
                src="https://img.29cm.co.kr/next-edition/2020/08/24/a9ebd1d26992499583dc838b2c753590_20200824152526.jpg"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                padding: '0 20px',
                marginTop: 16,
                marginBottom: 18,
              }}
            >
              <Text color="primary" typography="title-m-bold">
                지원자님을 위한 추천상품
              </Text>
              <Text color="primary" typography="text-l">
                환영해요, 지원자님 29CM은 아무 제품이나 추천하지 않아요, 고객의 취향에 알맞는 제품을 추천하고 나아가
                고객도 몰랐던 스스로의 취향을 찾아주는 커머스를 추구해요. 기술과 인간에 대한 이해를 바탕으로 그 어떤
                커머스도 해내지 못하고 있는 멋진 일을 함께 만들어요
              </Text>
            </div>
          </div>
          <button
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '12px 18px',
              marginTop: 12,
              background: vars.$semantic.color.fill.primary,
            }}
          >
            <Text color="onWhite" typography="text-l-bold">
              모든 추천상품 보러가기
            </Text>
          </button>
        </div>
        <div style={{ marginBottom: 60 }}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 12,
              backgroundColor: vars.$semantic.color.background.low,
              overflow: 'hidden',
            }}
          >
            <div>
              <img
                style={{ width: '100%', aspectRatio: '1 / 1' }}
                src="https://img.29cm.co.kr/cm/202311/11ee7a28ce229f99a5b32b8aa9a87962.jpg"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                padding: '0 20px',
                marginTop: 16,
                marginBottom: 18,
              }}
            >
              <Text color="primary" typography="title-m-bold">
                가볍고 산뜻하게
              </Text>
              <Text color="primary" typography="text-l">
                파블로 피카소의 방에서 영감을 받아 그의 자유롭고 부드러운 멋을 표현했습니다. 일상의 편안함과 스포티함이
                담긴 낫띵리튼의 23봄 시즌 컬렉션을 쇼케이스에서 만나보세요.
              </Text>
            </div>
            <div style={{ marginBottom: 18 }}>
              <div
                style={{
                  borderTop: `1px solid ${vars.$scale.color.gray200}`,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 16,
                  padding: '12px 0',
                  margin: '0 20px',
                }}
              >
                <div style={{ width: 60, height: 60 }}>
                  <img
                    style={{ width: '100%', height: '100%', borderRadius: 2 }}
                    src="https://img.29cm.co.kr/next-product/2023/07/31/bb40f6ce78e44627bfc1c46ba5246ab3_20230731114922.jpg?width=400"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Text color="primary" typography="text-xs">
                    하이드레이팅 나이트 립 마스크 25g + 소프트 글로우 결 토너 210ml
                  </Text>
                  <Text color="primary" typography="text-m-bold">
                    341,100원
                  </Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CartIcon width={18} height={18} isEmpty />
                </div>
              </div>
              <div
                style={{
                  borderTop: `1px solid ${vars.$scale.color.gray200}`,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 16,
                  padding: '12px 0',
                  margin: '0 20px',
                }}
              >
                <div style={{ width: 60, height: 60 }}>
                  <img
                    style={{ width: '100%', height: '100%', borderRadius: 2 }}
                    src="https://img.29cm.co.kr/next-product/2023/07/31/bb40f6ce78e44627bfc1c46ba5246ab3_20230731114922.jpg?width=400"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Text color="primary" typography="text-xs">
                    하이드레이팅 나이트 립 마스크 25g + 소프트 글로우 결 토너 210ml
                  </Text>
                  <Text color="primary" typography="text-m-bold">
                    341,100원
                  </Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CartIcon width={18} height={18} isEmpty />
                </div>
              </div>
            </div>
          </div>
          <button
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '12px 18px',
              marginTop: 12,
              background: vars.$semantic.color.fill.primary,
            }}
          >
            <Text color="onWhite" typography="text-l-bold">
              추천상품 보러가기
            </Text>
          </button>
        </div>
      </section>
    </CommonLayout>
  );
}
