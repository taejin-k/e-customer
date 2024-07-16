import { Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import ChevronTopSVG from 'src/components/svgs/ChevronTopSVG';
import CloseSVG from 'src/components/svgs/CloseSVG';
import { CartType } from 'src/types/order';
import { formatNumberWithCommas } from 'src/utils/number';

interface PaymentProps {
  checkedCarts: CartType[];
  totalPaymentAmount: number;
}

const Payment = ({ checkedCarts, totalPaymentAmount }: PaymentProps) => {
  const [isBillBoxVisible, setIsBillBoxVisible] = useState(false);

  const totalOrderAmount = checkedCarts.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  const handlePayment = (cartsLength: number, isBillBoxVisible: boolean) => {
    if (isBillBoxVisible) alert('결제가 완료되었습니다.');
    else cartsLength && setIsBillBoxVisible(true);
  };

  return (
    <>
      <Wrapper>
        <BillBox isBillBoxVisible={isBillBoxVisible}>
          <Area>
            <Text color="primary" typography="text-l-bold">
              결제 금액
            </Text>
            <CloseButton onClick={() => setIsBillBoxVisible(false)}>
              <CloseSVG size={16} viewBox={18} color={vars.$semantic.color.fill.primary} />
            </CloseButton>
          </Area>
          <Area>
            <Text color="primary" typography="text-m-medium">
              주문상품수
            </Text>
            <Text color="primary" typography="text-m-bold">
              {checkedCarts.length}개
            </Text>
          </Area>
          <Area>
            <Text color="primary" typography="text-m-medium">
              총 주문금액
            </Text>
            <Text color="primary" typography="text-m-bold">
              {formatNumberWithCommas(Math.floor(totalOrderAmount))}원
            </Text>
          </Area>
          <Area>
            <Text color="primary" typography="text-m-medium">
              총 할인적용
            </Text>
            <Text color="accent" typography="text-m-bold">
              -{formatNumberWithCommas(Math.floor(totalOrderAmount - totalPaymentAmount))}원
            </Text>
          </Area>
          <Area>
            <Text color="primary" typography="text-m-medium">
              총 결제금액
            </Text>
            <Text color="primary" typography="text-m-bold">
              {formatNumberWithCommas(Math.floor(totalPaymentAmount))}원
            </Text>
          </Area>
        </BillBox>
        <ButtonBox>
          <Total isEmpty={!checkedCarts.length}>
            총 {formatNumberWithCommas(Math.floor(totalPaymentAmount))}원
            <ChevronTop isBillBoxVisible={isBillBoxVisible}>
              <ChevronTopSVG
                size={16}
                color={checkedCarts.length ? vars.$semantic.color.fill.primary : vars.$semantic.color.text.disabled}
              />
            </ChevronTop>
          </Total>
          <PaymentButton
            isEmpty={!checkedCarts.length}
            onClick={() => handlePayment(checkedCarts.length, isBillBoxVisible)}
          >
            결제하기
          </PaymentButton>
        </ButtonBox>
      </Wrapper>
      <Dimmed isBillBoxVisible={isBillBoxVisible} onClick={() => setIsBillBoxVisible(false)} />
    </>
  );
};

export default Payment;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 385px;
  padding: 0px 16px 29px;
  background-color: ${vars.$semantic.color.background.default};
  z-index: 9999;
  box-sizing: border-box;
`;

const BillBox = styled.div<{ isBillBoxVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.3s;
  overflow: hidden;
  box-sizing: content-box;

  ${(props) => css`
    height: ${props.isBillBoxVisible ? '132px' : 0};
    padding: ${props.isBillBoxVisible ? '12px 0px' : '0px'};
  `}
`;

const Total = styled.div<{ isEmpty: boolean }>`
  display: flex;
  gap: 2px;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  ${(props) => css`
    color: ${props.isEmpty ? vars.$semantic.color.text.disabled : vars.$semantic.color.fill.primary};
  `}
`;

const ChevronTop = styled.div<{ isBillBoxVisible: boolean }>`
  display: flex;
  transition: 0.3s;

  ${(props) => css`
    transform: ${props.isBillBoxVisible ? 'rotate(0deg)' : 'rotate(180deg)'};
  `}
`;

const Area = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  width: 16px;
  height: 16px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

const PaymentButton = styled.div<{ isEmpty: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 52px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  ${(props) => css`
    color: ${props.isEmpty ? vars.$semantic.color.text.disabled : vars.$semantic.color.text.onWhite};
    background-color: ${props.isEmpty ? vars.$semantic.color.fill.disabled : vars.$semantic.color.fill.primary};
    cursor: ${props.isEmpty ? 'default' : 'pointer'};
  `}
`;

const Dimmed = styled.div<{ isBillBoxVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  max-width: 385px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: 0.3s;

  ${(props) => css`
    opacity: ${props.isBillBoxVisible ? 1 : 0};
    z-index: ${props.isBillBoxVisible ? 999 : -1};
  `}
`;
