import './compareList.css';
import { useContext } from 'react';
import { TruckContext } from '../context/truckContext';
const CompareList = (props) =>{

    const { removeTruck } = useContext(TruckContext)

    const removeTruckHandler = (id) =>{
        removeTruck(id)
    }
return(
    <li className='compare__container'>
        <div className='compare__body'>{props.brand}</div>
        <div className='compare__body'>{props.model}</div>
        <img className='compare__body' src={props.img} alt='img'></img>
        <div className='compare__body'>{props.market.map((market, index)=>{ return(<div key={index}>{market}</div>)})}</div>
        <div className='compare__body'>{props.cab.map((cab, index)=>{ return(<div key={index}>{cab}</div>)})}</div>
        <div className='compare__body'>{props.engine.map((engine, index)=>{ return(<div key={index}>{engine}</div>)})}</div>
        <div className='compare__body'>{props.transmissions.map((transmissions, index)=>{ return(<div key={index}>{transmissions}</div>)})}</div>
        <div className='compare__body'>{props.exhaust.map((exhaust, index)=>{ return(<div key={index}>{exhaust}</div>)})}</div>
        <div className='compare__body'>{props.axle.map((axle, index)=>{ return(<div key={index}>{axle}</div>)})}</div>
        <button onClick={()=>removeTruckHandler(props.id)}>Remove</button>
    </li>
)
}
export default CompareList