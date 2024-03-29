import { faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons'
import { faCloud, faDatabase, faFileExcel, faRocket} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    return(
        <div className='container about-page'>
            <div className='a-text-zone'>
                <h1>About Isaac</h1>
                <p>I'm a results-oriented Data science professional
                    with valuable experience in analysing data to draw 
                    insights for businesses and presenting results in 
                    easy-to-understand visualisations.
                    I do my best work using tools such as Spreadsheet applications
                    (including Microsoft Excel and Google Sheets), Visualisation tools 
                    (such as Tableau and Power BI) and Machine Learning tools (such as 
                    Scikit-learn, Pycaret, Yellobrick and Tensorflow)
                </p>

                <div className='hid stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color='#2b3a55'/>
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faFileExcel} color='#ec4d28'/>
                        </div>

                        <div className='face3'>
                            < FontAwesomeIcon icon={faJsSquare} color='#dd0031'/>
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faDatabase} color='#58287f'/>
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faRocket} color='#4d4d4e'/>
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faCloud} color='#f06529'/>
                        </div>
                    </div>
                </div>

                <p>
                    I studied Aerospace engineering at Kwame Nkrumah University of 
                    of Science and Technology, taking opportunity of the long vacations 
                    to intern at the Ghana Air Force School of Trade Training.
                    Upon completion of my studies, I worked with the Mechanical Engineering 
                    department of Kwame Nkrumah University of Science and Technology as a 
                    Teaching Assistant.
                    It was during this period that I invested time into Data Analytics by 
                    Google's Data Analytics course on Coursera and went ahead to enroll in 
                    a Data Science Fellowship at Blossom Academy.
                </p>

                <p>
                    Some of my greatest achievements include being a quarter-finalist at
                    the 2017 edition of Ghana's National Science and Math Quiz, finishing 
                    my bachelor of science degree with first class honours and building a 
                    machine learning model to predict carbon dioxide emission rates of vehicles
                    I love to read self-help books during my leisure time and I'm also a avid 
                    supporter of the Chelsea football club.
                    I love software engineering because I believe it affords me the opportunity 
                    to make positive global impact.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#2b3a55'/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faFileExcel} color='#ec4d28'/>
                    </div>

                    <div className='face3'>
                        < FontAwesomeIcon icon={faJsSquare} color='#dd0031'/>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faDatabase} color='#58287f'/>
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faRocket} color='#4d4d4e'/>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faCloud} color='#f06529'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About