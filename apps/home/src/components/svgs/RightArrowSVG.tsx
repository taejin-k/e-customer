import { SvgPropsType } from 'src/types/common';

const RightArrowSVG = ({ size, viewBox = size, color = '#A0A0A0' }: SvgPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.14643 9.97855C5.95118 9.7833 5.95118 9.4667 6.14643 9.27145L9.04288 6.375H1.75C1.47386 6.375 1.25 6.15115 1.25 5.875C1.25 5.59885 1.47386 5.375 1.75 5.375H8.98148L6.15883 2.74053C5.95698 2.55211 5.94608 2.23572 6.13448 2.03384C6.32288 1.83197 6.63928 1.82106 6.84118 2.00947L10.5912 5.50945C10.6903 5.602 10.7476 5.7308 10.7499 5.8664C10.7523 6.00195 10.6994 6.13265 10.6035 6.22855L6.85353 9.97855C6.65828 10.1738 6.34173 10.1738 6.14643 9.97855Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrowSVG;
