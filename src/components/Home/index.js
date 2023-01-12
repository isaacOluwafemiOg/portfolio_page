import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {

    return (
        <div className='container home-page'>
            <h1>
                Hi, <br/> I'm Isaac Olwafemi ogunniyi
                <br/>
                Data Scientist with an Aerospace Engineering

            </h1>
            <h2>Data Analysis with Excel / Machine Learning with Python / Software Engineering / UAV Design</h2>

            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    )
}

export default Home