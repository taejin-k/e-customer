import { Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { default as NextImage } from 'next/image';
import { GateType } from 'src/types/home';
import { openNewWindow } from 'src/utils/url';

interface GateProps {
  gate: GateType;
  icon: JSX.Element;
}

const Gate = ({ gate, icon }: GateProps) => {
  const { imageUrl, gateTitle, linkValue } = gate;

  return (
    <Container onClick={() => openNewWindow(linkValue)}>
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

const Image = styled(NextImage)`
  border-radius: 9999px;
`;
