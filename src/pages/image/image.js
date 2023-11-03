export const ImageContainer = ({ type, img, alt }) => {
  let imgStyle = `img-${type}`;

  return (
    <>
      <img src={img} alt={alt} className={`img ${imgStyle}`} />{" "}
    </>
  );
};
