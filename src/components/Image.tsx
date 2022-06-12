import NextImage from "next/image";

const customLoader = ({ src, width }: any) => {
  return `${src}?w=${width}`;
};
const Image = ({ ...props }: any) => {
  return <NextImage {...props} loader={customLoader} />;
};

export default Image;
