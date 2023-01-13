import { createContext, useState } from "react";

export const TruckContext = createContext();

export const TruckContextProvider = (props) => {

    const [truckCompare, setTruckCompare]= useState([]);


    const addTruck = (truckToAdd) => { 
        setTruckCompare([...truckCompare, truckToAdd])
    }
     const removeTruck = (id) =>{
       
     const truckToRemove = truckCompare.filter(trucks => trucks.id !== id)
     setTruckCompare(truckToRemove)
    }
     
    return(
       <TruckContext.Provider value={{ truckCompare, addTruck, removeTruck }}>
        {props.children}
       </TruckContext.Provider>
    )
}