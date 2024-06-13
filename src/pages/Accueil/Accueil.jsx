import logements from '../../assets/logements.json';
import Banner from '../../components/Banner/Banner';
import BannerImage from '../../assets/images/image-source-1.jpg';
import Card from '../../components/Card/Card';
import './Accueil.scss'

function Accueil() {
    const bannerTitle = "Chez vous, partout et ailleurs";
    return (
        <div className="Accueil">
            <Banner imageSrc={BannerImage} bannerTitle={bannerTitle}/>
            <div className="card-container">
                {logements.map(card => (
                    <Card
                    key={card.id}
                    link={`/${card.id}`}
                    image={card.cover}
                    title={card.title}
                    />
                ))}
            </div>
        </div>
    );
}



export default Accueil;
