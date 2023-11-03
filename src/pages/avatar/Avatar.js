export const Avatar = ({ size, alt, image, border, badge }) => {
  const avatarSizeClass = `avatar-${size}`;
  const borderStyle = border ? { border: `${border}px solid grey` } : {};

  return (
    <div className={`avatar ${avatarSizeClass}`} style={borderStyle}>
      <img src={image} alt={alt} />
      <span> {badge} </span>
    </div>
  );
};
