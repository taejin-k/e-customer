import { SvgPropsType } from 'src/types/common';

const CloseSVG = ({ size, viewBox = size, color = '#A0A0A0' }: SvgPropsType) => {
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
        d="M3.32564 3.32564C3.55995 3.09132 3.93985 3.09132 4.17417 3.32564L8.9999 8.15137L13.8256 3.32564C14.06 3.09132 14.4399 3.09132 14.6742 3.32564C14.9085 3.55995 14.9085 3.93985 14.6742 4.17417L9.84843 8.9999L14.6742 13.8256C14.9085 14.06 14.9085 14.4399 14.6742 14.6742C14.4399 14.9085 14.06 14.9085 13.8256 14.6742L8.9999 9.84843L4.17417 14.6742C3.93985 14.9085 3.55995 14.9085 3.32564 14.6742C3.09132 14.4399 3.09132 14.06 3.32564 13.8256L8.15137 8.9999L3.32564 4.17417C3.09132 3.93985 3.09132 3.55995 3.32564 3.32564Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseSVG;
