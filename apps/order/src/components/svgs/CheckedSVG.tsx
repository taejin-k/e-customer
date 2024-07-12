import { SvgPropsType } from 'src/types/common';

const CheckedSVG = ({ size, viewBox = size, color = '#000' }: SvgPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0342 5.78741L8.24007 13.2005L4.00513 9.01371L4.66131 8.34998L8.15051 11.7995L13.2989 5.21265L14.0342 5.78741Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckedSVG;
