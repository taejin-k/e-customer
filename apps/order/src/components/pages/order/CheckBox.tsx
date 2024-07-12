import styled from '@emotion/styled';
import CheckedSVG from 'src/components/svgs/CheckedSVG';
import UnCheckedSVG from 'src/components/svgs/UnCheckedSVG';

interface CheckBoxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <Container onClick={() => onChange(!checked)}>
      {checked ? <CheckedSVG size={18} /> : <UnCheckedSVG size={18} />}
    </Container>
  );
};

export default CheckBox;

const Container = styled.div`
  border-radius: 2px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
