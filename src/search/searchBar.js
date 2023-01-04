import {  useState } from 'react';
import truckBanner from '../assets/truckingBanner.jpg';
import { Link } from 'react-router-dom';
import DynamicSearch from './dynamicSearch';
import './searchBar.css';


const SearchBar = () =>{

const [input, setInput] = useState('');
     
const loadInfoHandler = (event) =>{
        setInput(event.target.value);
        
    }
    
    let dynSearchCon = <></>

    if (input.length > 0) {
       dynSearchCon = <DynamicSearch input={input}/>
    }
    
 
   return(  
   <form className='formBanner' >
         <img className='truckBanner' src={truckBanner}  alt='truckBanner'></img>
        <input className='searchBrand' type='text' placeholder="Truck Brand..." value={input} onChange={loadInfoHandler}></input>
        <Link to={`search/${input}`}><button type='submit' className='bannerSubmit'>&#x1F50E;</button></Link>
        {dynSearchCon}
    </form> 
    )
}

export default SearchBar