import { vars } from '@eCustomer/ui-tokens';
import styled from '@emotion/styled';
import MinusSVG from 'src/components/svgs/MinusSVG';
import PlusSVG from 'src/components/svgs/PlusSVG';

interface CounterProps {
  count: number;
  onModifyCartCount: (count: number) => void;
}

export const Counter = ({ count, onModifyCartCount }: CounterProps) => {
  const handleDecrement = (quantity: number) => {
    if (count > 1) onModifyCartCount(quantity - 1);
  };

  const handleIncrement = (quantity: number) => {
    if (count < 5) onModifyCartCount(quantity + 1);
  };

  return (
    <Container>
      <Button onClick={() => handleDecrement(count)}>
        <MinusSVG
          size={14}
          color={count > 1 ? vars.$semantic.color.text.primary : vars.$semantic.color.text.disabled}
        />
      </Button>
      <Count>{count}</Count>
      <Button onClick={() => handleIncrement(count)}>
        <PlusSVG size={14} color={count < 5 ? vars.$semantic.color.text.primary : vars.$semantic.color.text.disabled} />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 28px;
  padding: 0px 6px;
  border: 1px solid ${vars.$semantic.color.border.line};
  box-sizing: border-box;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 34px;
  font-size: 11px;
  font-weight: 500;
  color: ${vars.$semantic.color.text.primary};
`;

const Button = styled.button`
  height: 14px;
`;
