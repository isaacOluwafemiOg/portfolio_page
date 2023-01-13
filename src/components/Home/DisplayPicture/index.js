import './index.scss'
import dp from '../../../assets/images/dp.png'

const DisplayPicture = () =>{
    return (
        <div className='dp-container'>
            <img src={dp} className='dp-image' alt='Display picture of Isaac Oluwafemi'/>
        </div>
    )
}

export default DisplayPicture