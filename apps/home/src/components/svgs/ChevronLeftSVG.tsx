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
        d="M6.29639 10.9999L14.1483 3.14805L15.1854 4.18514L8.37057 10.9999L15.1854 17.8147L14.1483 18.8518L6.29639 10.9999Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeftSVG;
