import logements from '../../assets/logements.json'
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu/Menu'
import Carousel from '../../components/Carousel/Carousel'
import './CardPage.scss';
import Rating from '../../components/Rating/Rating';

const CardPage = () => {
    const { id } = useParams();
    const card = logements.find(card => card.id === id);
  
    return (
    <div className="card-page">
      <Carousel pictures={card.pictures}/>
      <div className="card-details">
        <div className="card-info">
          <div className="card-title">
            <h2 className="card-name">{card.title}</h2>
            <h3 className="card-location">{card.location}</h3>
          </div>
          <ul className="tags-list">
            {card.tags.map(tags => (
              <li key={tags} className="tag">{tags}</li>
            ))}
          </ul>  
        </div>
        <div className="host-info">
          <div className="card-host">
            <h3 className="host-name">{card.host.name}</h3>
            <img className="host-picture" src={card.host.picture}/>
          </div>        
          <p><Rating rating={card.rating}/></p>
        </div>
      </div>
      <div className="dropdown-container">
        <Menu title = "Description" dropdown = {<p>{card.description}</p>}/>
        <Menu title = "Équipements" dropdown = {<ul className="equipement-list">{card.equipments.map(equipement => (<li key={equipement}>{equipement}</li>))}</ul>}/>
      </div>
    </div>
  );
};
  
export default CardPage;