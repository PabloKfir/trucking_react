import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TruckContext } from "../context/truckContext";
import './truckList.css';

const TruckList = ( props ) =>{
    const [isChecked, setIsChecked] = useState(true)
    const { addTruck, removeTruck } = useContext(TruckContext)
    
    const addTruckHandler = () =>{
        setIsChecked(!isChecked)
        if(isChecked){
        const truckToAdd = {
        id: props.id,
        brand: props.brand
        }
     addTruck(truckToAdd) 
    }else{
        const truckRemoved={
            id: props.id
        }
    removeTruck(truckRemoved)
} 

}

   
    return(
    <li>
        <div className="truckList" key={props._id} > 
        <input type='checkbox' onChange={addTruckHandler}></input>
        <Link  to={`/detail/${props._id}`} >
        
        <h1>{props.brand}</h1>
        <h2>{props.model}</h2>
        <img className='truckListImg' src={props.img} alt={'img'}></img>
        </Link>
        </div>
    </li>
    )
}

export default TruckList