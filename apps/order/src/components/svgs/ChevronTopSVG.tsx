import { SvgPropsType } from 'src/types/common';

const ChevronLeftSVG = ({ size, viewBox = size, color = '#000' }: SvgPropsType) => {
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
        d="M8.00005 4.39062L13.8048 10.1954L12.862 11.1382L8.00005 6.27624L3.13812 11.1382L2.19531 10.1954L8.00005 4.39062Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeftSVG;
