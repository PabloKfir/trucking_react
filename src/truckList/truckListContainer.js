import { useState, useEffect } from 'react';
import TruckList from './truckList';
import './truckListContainer.css';
const TruckListContainer = () =>{
    const [trucksLoaded, setTrucksLoaded] = useState ([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{

       fetch("http://127.0.0.1:3300/api/v1/trucks/")
         .then(response => {
             return response.json()
         }).then(res =>{
             setTrucksLoaded(res.data.trucks);
         }).finally(()=>{
             setLoading(false)
         })
         .catch(error =>{console.log(error)})

    }, []);

    if(loading) {
        return <h1>Loading...</h1>
    }
    const truckList = trucksLoaded.map((trucks)=>(
        <TruckList
            key={trucks._id}
            id={trucks._id}
            brand={trucks.brand}
            model={trucks.model}
            img={trucks.img}
            market={trucks.market}
            cab={trucks.cab}
            engine={trucks.engine}
            transmissions={trucks.transmissions}
            exhaust={trucks.exhaust}
            axle={trucks.axle}
    />))
    return(
    <ul className='truckList__Container'>
        {truckList}
     </ul>
    )
}

export default TruckListContainer;