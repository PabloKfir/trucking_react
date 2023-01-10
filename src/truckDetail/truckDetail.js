import './truckDetail.css';
const TruckDetail = (props) =>{
    return(

        <div >
        <h1 className='truckDetail__header'>{props.brand} {props.model}</h1>
        <img className='truckDetail__img'src={props.img} alt='img'></img>
        <h1 className='truckDetail__header'>Details</h1>
        <table className='truckDetail__container'>
            <tbody className="truckTable" >
                <tr>
                    <td className='truckDetail__rowHeader'>Brand</td>
                    <td className='truckDetail__rowBody'>{props.brand}</td>
                </tr>
                <tr>
                    <td className='truckDetail__rowHeader'>Model</td>
                    <td className='truckDetail__rowBody'>{props.model}</td>
                </tr>
                <tr>
                    <td className='truckDetail__rowHeader'>Target Market</td>
                    <td className='truckDetail__rowBody'>{props.market.map((market, index)=>{ return(<div key={index}>{market}</div>)})}</td>
                </tr>
                <tr>
                    <td className='truckDetail__rowHeader'>Cabin</td>
                    <td className='truckDetail__rowBody'>{props.cab.map((cab, index)=>{ return(<div key={index}>{cab}</div>)})}</td>
                </tr>
                <tr >
                    <td className='truckDetail__rowHeader'>Engine</td>
                    <td className='truckDetail__rowBody'> {props.engine.map((engine, index)=>{ return(<div key={index}>{engine}</div>)})}</td>
                    
                </tr>
                <tr>
                    <td className='truckDetail__rowHeader'>Transmission</td>
                    <td className='truckDetail__rowBody'>{props.transmissions.map((transmissions, index)=>{ return(<div key={index}>{transmissions}</div>)})}</td>
                </tr>
                <tr>
                    <td className='truckDetail__rowHeader'>Exhaust</td>
                    <td className='truckDetail__rowBody'>{props.exhaust.map((exhaust, index)=>{ return(<div key={index}>{exhaust}</div>)})}</td>
                </tr>
                <tr>
                    <td className='truckDetail__rowHeader'>Axle</td>
                    <td className='truckDetail__rowBody'>{props.axle.map((axle, index)=>{ return(<div key={index}>{axle}</div>)})}</td>
                </tr>
            </tbody>
        </table>      

        </div>
 
    )
}

export default TruckDetail;