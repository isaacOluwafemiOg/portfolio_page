import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faContactCard, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFreeCodeCamp, faGithub, faKaggle, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon= {faHome} color='#2b3a55' />
            </NavLink>

            <NavLink exact='true' className='about-link' activeclassname='active' to='/about'>
                <FontAwesomeIcon icon= {faUser} color='#2b3a55' />
            </NavLink>

            <NavLink exact='true' className='projects-link' activeclassname='active' to='/projects'>
                <FontAwesomeIcon icon={faFolderOpen} color='#2b3a55' />
            </NavLink>

            <NavLink exact='true' className='contact-link' activeclassname='active' to='/contact'>
                <FontAwesomeIcon icon= {faContactCard} color='#2b3a55' />
            </NavLink>

            
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/isaac-oluwafemi-ogunniyi'>
                    <FontAwesomeIcon icon={faLinkedin} color='#2b3a55' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.github.com/isaacOluwafemiOg'>
                    <FontAwesomeIcon icon={faGithub} color='#2b3a55' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.freecodecamp.org/'>
                    <FontAwesomeIcon icon={faFreeCodeCamp} color='#2b3a55' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.kaggle.com/'>
                    <FontAwesomeIcon icon={faKaggle} color='#2b3a55' />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar