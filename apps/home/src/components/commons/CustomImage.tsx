import styled from '@emotion/styled';
import { ImageProps, default as NextImage } from 'next/image';
import { useState } from 'react';
import Skeleton from './Skeleton';

interface CustomeImageProp extends ImageProps {
  src: string;
  alt: string;
}

const CustomImage = ({ src, alt, ...props }: CustomeImageProp) => {
  const [isError, setIsError] = useState(false);

  return isError ? (
    <ImageSkeleton />
  ) : (
    <NextImage
      src={src}
      alt={alt}
      {...props}
      onError={() => {
        setIsError(true);
      }}
    />
  );
};

export default CustomImage;

const ImageSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
