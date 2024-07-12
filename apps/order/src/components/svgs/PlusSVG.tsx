import { SvgPropsType } from 'src/types/common';

const PlusSVG = ({ size, viewBox = size, color = '#000' }: SvgPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.46664 1.75H6.5333V6.53333H1.75V7.46666H6.5333V12.25H7.46664V7.46666H12.25V6.53333H7.46664V1.75Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusSVG;
