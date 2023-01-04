import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Results from "./results";

const SearchResult = () =>{
    const [truckSearch, setTruckSearch] = useState([]);
    const [loading, setLoading] = useState(true);
    const { searchId } = useParams();
   

    useEffect(()=>{
        fetch('http://127.0.0.1:3300/api/v1/trucks?brand[regex]='+searchId)
            .then(response=>{
                return response.json();
            }).then(res=>{
                setTruckSearch(res.data.trucks);
            }).finally(()=>{
                setLoading(false)
            })
    },[searchId])

    if (loading){
        return <h1>Loading...</h1>
    }

    return(
        <Results truckSearch={truckSearch}/>
    )
    
}

export default SearchResult