import { BrowserRouter as Router, Link, NavLink, Route, Routes} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/logo-s.png'
import LogoSub from '../../assets/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import About from './About';

const RefreshPage = ()=>{
    window.location.reload();
 }
 
const Sidebar = () => (
    
    <div className='nav-bar'>
        <Router>
        <Link className='logo' to="/" onClick={<RefreshPage />}>
            <img className='logo' src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSub} alt="slobodan"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" onClick={<RefreshPage />}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about" onClick={<RefreshPage />}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
        </nav> 
        </Router>
    </div>
)

export default Sidebar