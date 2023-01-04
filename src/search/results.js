import { Link } from "react-router-dom";
import './results.css';

const Results = ({truckSearch}) =>{
    return(
    <div className="results__container">
    { truckSearch.map(truckse =>
      <Link className="results__list" to={`/detail/${truckse._id}`} key={truckse._id}>
      <h1>{truckse.brand}</h1>
      <h2>{truckse.model}</h2>
      <img className="results__img" src={truckse.img} alt={'img'}></img>
      </Link>)}
         </div>
    )
}

export default Results