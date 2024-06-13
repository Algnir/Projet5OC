const Card = ({ link, image, title }) => {
    return (
      <a href={link} className="card">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
      </a>
    );
};

export default Card;