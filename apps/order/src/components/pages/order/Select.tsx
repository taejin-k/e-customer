import { vars } from '@29cm/ui-tokens';
import styled from '@emotion/styled';
import { useState } from 'react';
import { SelectItem } from 'src/types/select';

interface SelectProps {
  items: SelectItem[];
  selected: string;
  placeholder: string;
  width?: number;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const Select = ({ items, selected, placeholder, width, disabled = false, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getLabel = (items: SelectItem[], selected: string) => {
    return items.filter((item) => item.value === selected)[0]?.label;
  };

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <Container width={width} onMouseLeave={() => setIsOpen(false)}>
      <Button type="button" onClick={() => setIsOpen((state) => !state)} disabled={disabled}>
        {selected ? getLabel(items, selected) : placeholder}
      </Button>
      {isOpen && !!items.length && (
        <Options>
          {items.map((item) => (
            <Option key={item.value} onClick={() => handleSelect(item.value)}>
              {item.label}
            </Option>
          ))}
        </Options>
      )}
    </Container>
  );
};

export default Select;

const Container = styled.div<{ width?: number }>`
  position: relative;
  width: ${({ width }) => width + 'px' ?? '100%'};
`;

const Button = styled.button`
  width: 100%;
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  border: 1px solid ${vars.$semantic.color.border.line};
  font-size: 11px;
  font-weight: 500;
  color: ${vars.$semantic.color.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Options = styled.ul`
  width: 100%;
  position: absolute;
  top: 27px;
  left: 0;
  border: 1px solid ${vars.$semantic.color.border.line};
  box-sizing: border-box;
`;

const Option = styled.li`
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  border-bottom: 1px solid ${vars.$semantic.color.border.line};
  font-size: 11px;
  font-weight: 500;
  color: ${vars.$semantic.color.text.primary};
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;

  &:last-child {
    border-bottom: none;
  }
`;
