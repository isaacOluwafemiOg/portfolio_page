import { Link } from 'react-router-dom'
import DisplayPicture from './DisplayPicture'
import './index.scss'

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    Hi, <br/> I'm Isaac Olwafemi ogunniyi.
                    <br/>
                    Data Scientist with an Aerospace Engineering background.

                </h1>
                <h2>Data Analysis with Excel || Data Visualisation with Tableau || Machine Learning with Python</h2>

                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

            < DisplayPicture />
        </div>
    )
}

export default Home