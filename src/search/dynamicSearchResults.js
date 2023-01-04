import { Link } from "react-router-dom";
import './dynamicSearchResults.css';

const DynamicSearchResults = ({dynSearch}) =>{

    return(
        <div className="dynamicSearch__container">
        { dynSearch.map(truckDy =>
            <Link to={`/detail/${truckDy._id}`} key={truckDy._id}>
            <h1 className="dynamicSearch__div">{truckDy.brand} {truckDy.model}</h1>
            </Link>)}
            
        </div>
    )
    
}

export default DynamicSearchResults;