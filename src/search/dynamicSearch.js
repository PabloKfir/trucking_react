import { useState, useEffect } from "react";
import DynamicSearchResults from './dynamicSearchResults'

const DynamicSearch = ({input}) =>{
    const [dynSearch, setDynSearch] = useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(()=>{
        fetch('http://127.0.0.1:3300/api/v1/trucks?brand[regex]='+input)
            .then(response=>{
                return response.json();
            }).then(res=>{
                setDynSearch(res.data.trucks);
            }).finally(()=>{
                setLoading(false);
            })
    },[input]);

    if(loading){
     <h3>loading...</h3>   
    }

    return(
        <DynamicSearchResults dynSearch={dynSearch} />
    )
}
    
export default DynamicSearch