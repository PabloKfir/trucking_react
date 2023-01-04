import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import TruckDetail from './truckDetail';
const TruckDetailContainer = () =>{
    const [truckLoaded, setTruckLoaded] = useState([]);
    const [loading, setLoading] = useState(true);
    const {trucksId} = useParams();
    useEffect(()=>{
        fetch("http://127.0.0.1:3300/api/v1/trucks/"+trucksId)
            .then(response=>{
                return response.json()
            }).then(res=>{
                setTruckLoaded(res.data.trucks);
            }).finally(()=>{
                setLoading(false)
            }).catch(error=>{console.log(error)})
    },[trucksId])

    if (loading){
        return <h1>Loading...</h1>
    }

    return(
        <TruckDetail {...truckLoaded}/>
    )
}
export default TruckDetailContainer