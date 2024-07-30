import { Text } from '@eCustomer/ui-emotion';
import { vars } from '@eCustomer/ui-tokens';
import styled from '@emotion/styled';
import CustomImage from 'src/components/commons/CustomImage';
import { GateType } from 'src/types/home';

interface GateProps {
  gate: GateType;
  icon: JSX.Element;
}

const Gate = ({ gate, icon }: GateProps) => {
  const { imageUrl, gateTitle } = gate;

  return (
    <Container>
      <Image width={38} height={38} priority src={imageUrl} alt={gateTitle} />
      <Text color="primary" typography="text-l-medium">
        {gateTitle}
      </Text>
      {icon}
    </Container>
  );
};

export default Gate;

const Container = styled.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  align-items: center;
  border: 1px solid ${vars.$semantic.color.border.line};
  border-radius: 9999px;
  padding: 4px 16px 4px 4px;
`;

const Image = styled(CustomImage)`
  border-radius: 9999px;
`;
