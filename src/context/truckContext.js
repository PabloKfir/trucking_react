import { createContext, useState } from "react";

export const TruckContext = createContext();

export const TruckContextProvider = (props) => {

    const [truckCompare, setTruckCompare]= useState();

    console.log(truckCompare);

    const addTruck = (truckToAdd) => { 
        setTruckCompare(...truckToAdd)
    }

     const removeTruck = (id) =>{
        const values = Object.values(truckCompare)
     const truckToRemove = values.filter(trucks => trucks.id !== id)
     setTruckCompare(truckToRemove)
     console.log(values) 
    }
     
    return(
       <TruckContext.Provider value={{ addTruck, removeTruck }}>
        {props.children}
       </TruckContext.Provider>
    )
}