import nsmq_profile from '../../assets/images/NSMQ Report Visual.png'
import './index.scss'

const Projects = () => {
    return(
        <div className='project-page'>
            <h1>Welcome to Projects</h1>
            <div class='projects-grid'>
                <div class='project-item'>
                    <h2>NSMQ Dashboard Application</h2>
                    <a href='https://isaacoluwafemiog-nsmq-dashboard-app-nsmq-dashboard-nm89db.streamlit.app/'>
                        <img src={nsmq_profile} alt='Static Dashboard'/>
                    </a>
                    <p>
                        The National Science and Math Quiz Ghana is a prestigious competition that promotes the study
                        of Science and Math in Ghana. Having being a <a href='https://www.youtube.com/live/93PT7NoDupo?feature=share'>quarter finalist</a> in
                        the 2017 edition of the competition, I carried out this project right from gathering data on past competitions, storing them
                         in Microsoft Excel Files, carrying out analyses and presenting results in the form of the dashboard seen above.
                         The data covers 280 contests from the one-eighth stage to the finals of each edition spanning 2016 to 2022.                    </p>
                    <p>
                        The fact that the whole data was represented by only a fixed set of insights was not satisfactory so I took upon 
                        myself to make it interactive and this was how the NSMQ Interactive Dashboard came about.
                        It was made by the application of my extensive knowledge of Python with respect Data Analysis and through the ease that 
                        streamlit brings on board when it comes to exhibiting python data projects as web applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects