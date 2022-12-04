export const defaultAvatarImage = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1670083612/SchoolLocker/avatar_pproaa.png`;

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

export const uploadImageToCloudinary = async (fileInput: any) => {
  const formData = new FormData();

  for (const file of fileInput.files) {
    formData.append('file', file);
  }

  formData.append('upload_preset', 'school-lockers-upload');

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const { url }: { url: string } = await response.json();
    const imgUrl = url.slice(url.indexOf('v') - 1);
    return imgUrl;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
};
