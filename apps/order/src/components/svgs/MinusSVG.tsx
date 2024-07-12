import { SvgPropsType } from 'src/types/common';

const MinusSVG = ({ size, viewBox = size, color = '#000' }: SvgPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12.25 7.46678H1.75V6.53345H12.25V7.46678Z" fill={color} />
    </svg>
  );
};

export default MinusSVG;
