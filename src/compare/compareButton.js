import { Link } from 'react-router-dom';
import './compareButton.css'

const CompareButton = () =>{
return(
    <Link to='/compareList'><button className='compareButton__button'>Compare!</button></Link>
)
}

export default CompareButton