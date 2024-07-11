import { SvgPropsType } from 'src/types/common';

const UnChecked = ({ size, viewBox = size, color = '#fff' }: SvgPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H16C16.8284 0.5 17.5 1.17157 17.5 2V16C17.5 16.8284 16.8284 17.5 16 17.5H2C1.17157 17.5 0.5 16.8284 0.5 16V2Z"
        fill={color}
      />
      <path
        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H16C16.8284 0.5 17.5 1.17157 17.5 2V16C17.5 16.8284 16.8284 17.5 16 17.5H2C1.17157 17.5 0.5 16.8284 0.5 16V2Z"
        stroke="#E4E4E4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0345 5.78741L8.24031 13.2005L4.00537 9.01371L4.66156 8.34998L8.15075 11.7995L13.2991 5.21265L14.0345 5.78741Z"
        fill="#A0A0A0"
      />
    </svg>
  );
};

export default UnChecked;
