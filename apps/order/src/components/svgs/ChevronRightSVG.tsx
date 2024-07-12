import { SvgPropsType } from 'src/types/common';

const ChevronRightSVG = ({ size, viewBox = size, color = '#000' }: SvgPropsType) => {
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
        d="M10.6582 7.00004L5.57906 12.0792L4.7541 11.2542L9.00829 7.00004L4.7541 2.74586L5.57906 1.9209L10.6582 7.00004Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRightSVG;
