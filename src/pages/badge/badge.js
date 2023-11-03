export const Badges = ({ type, status }) => {
  let badgeStyle = `badge-${type}`;

  return (
    <div>
      <span className={`badge ${badgeStyle}`}> {status} </span>{" "}
    </div>
  );
};

export const AvatarWthBedgeWithRoundCorder = ({ alt, image, badge }) => {
  return (
    <div>
      <img className="badge-avatar-img-round" src={image} alt={alt} />
      <span className="badge-span-round"> {badge} </span>
    </div>
  );
};

export const AvatarWthBedgeWithOutRoundCorder = ({ alt, image, badge }) => {
  return (
    <div>
      <img className="badge-avatar-img" src={image} alt={alt} />
      <span className="badge-span"> {badge} </span>
    </div>
  );
};

/// play
