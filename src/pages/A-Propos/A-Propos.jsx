import Banner from '../../components/Banner/Banner';
import BannerImage from '../../assets/images/image-source-2.jpg';
import Menu from '../../components/Menu/Menu';
import './A-Propos.scss';




function APropos() {
    const bannerTitle = "";
    const imageSrc = BannerImage;

    return (
            <div className="A-Propos">
                <Banner imageSrc={imageSrc} bannerTitle={bannerTitle}/>
                <div className="dropdown-container">
                    <Menu title = "Fiabilité" dropdown = {<p>Les annonces postées sur Kasa garatissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont réguilièrement vérifiées par nos équipes.</p>}/>
                    <Menu title = "Respect" dropdown = {<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.</p>}/>
                    <Menu title = "Service" dropdown = {<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.</p>}/>
                    <Menu title = "Sécurité" dropdown = {<p>La sécurité est la priorité de Kasa. Aussi bien pous nos hôtes que pour les voyageurs, chaque logement correspond au critères de sécurité établis par nos services. En laissant une note bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>}/>
                </div>
            </div>
    );
}



export default APropos;