const normalizeSrc = (src: string) => (src[0] === '/' ? src.slice(1) : src);

type CloudinaryProps = {
  src: string;
  width?: number;
  quality?: number;
};

export const cloudinaryLoader = ({ src, width, quality }: CloudinaryProps) => {
  const params = [
    'f_auto',
    'c_limit',
    'w_' + width,
    'q_' + (quality || 'auto'),
  ];
  return `https://res.cloudinary.com/${
    process.env.CLOUDINARY_CLOUD_NAME
  }/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
};
