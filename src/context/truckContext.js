import { createContext, useState } from "react";

export const TruckContext = createContext();

export const TruckContextProvider = (props) => {

    const [truckCompare, setTruckCompare]= useState([]);

    console.log(truckCompare);

    const addTruck = (truckToAdd) => { 
        setTruckCompare([...truckCompare, truckToAdd])
    }
     const removeTruck = (id) =>{
       
     const truckToRemove = truckCompare.filter(trucks => trucks.id !== id)
     setTruckCompare(truckToRemove)
     console.log(truckToRemove) 
    }
     
    return(
       <TruckContext.Provider value={{ addTruck, removeTruck }}>
        {props.children}
       </TruckContext.Provider>
    )
}