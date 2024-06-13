const Banner = ({ imageSrc, bannerTitle }) => {
  return (
    <div className="banner">
      <img src={imageSrc} alt="Banner" className="banner-image" />
      <div className="overlay">
        <h2 className="banner-title">{bannerTitle}</h2>
      </div>
    </div>
  );
};

export default Banner;