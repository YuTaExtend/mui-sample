import NextImage from "next/image";

const customLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const Image = ({ ...props }: any) => {
  return <NextImage {...props} loader={customLoader} />;
};

export default Image;
