import { Link } from "react-router-dom";
import './Error.scss';

function Error() {
    return (
        <div className="Error-404">
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link to="/Accueil">Retourner sur la page d'accueil</Link>
        </div>
    );
}



export default Error;