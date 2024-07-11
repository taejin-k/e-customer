import styled from '@emotion/styled';
import Checked from 'src/components/svgs/Checked';
import UnChecked from 'src/components/svgs/UnChecked';

interface CheckBoxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <Container onClick={() => onChange(!checked)}>
      {checked ? <Checked size={18} /> : <UnChecked size={18} />}
    </Container>
  );
};

export default CheckBox;

const Container = styled.div`
  border-radius: 2px;
  width: 18px;
  height: 18px;
`;
