import starColored from './red-star.svg';
import starGrey from './grey-star.svg';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const starArray = [];
  
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        starArray.push(<img key={i} src={starColored} alt="star" />);
      } else {
        starArray.push(<img key={i} src={starGrey} alt="star" />);
      }
    }
  
    return <div>{starArray}</div>;
  };
  
  export default StarRating;