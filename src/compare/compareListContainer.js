import { useContext } from "react";
import { TruckContext } from "../context/truckContext";
import CompareList from "./compareList";
import './compareListContainer.css';

const CompareListContainer = () =>{
    const { truckCompare } = useContext(TruckContext);

    
    return(
        <ul className="test">
        { truckCompare.map(t=>
            <CompareList
             key={t.id}
             {...t}
             />
         )  }
         </ul>
    )
}
export default CompareListContainer