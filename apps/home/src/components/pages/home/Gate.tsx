import { Text } from '@29cm/ui-emotion';
import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { default as NextImage } from 'next/image';

interface GateProps {
  image: string;
  label: string;
  icon: JSX.Element;
}

const Gate = ({ image, label, icon }: GateProps) => {
  return (
    <Container>
      <Image width={38} height={38} src={image} alt={label} />
      <Text color="primary" typography="text-l-medium">
        {label}
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
