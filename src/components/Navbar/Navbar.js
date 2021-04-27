import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// import Button from './Button';
import Dropdown from './Dropdown';
import './Navbar.css'
import './Button.css'

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick =()=>setClick(!click)

    const [dropdown ,setDropdown]=useState(false);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter =()=>{
        if(window.innerWidth<960){
           setDropdown(true)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave =()=>{
        if(window.innerWidth<960){
           setDropdown(false)
        }else{
            setDropdown(false)
        }
    }
    return (
        <>
        <nav className="navbar">
            <Link to='/home' className="navbar-logo">
                Enyone
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ?'fas fa-times':'fas fa-bars'}/>
            </div>
            <ul className={click? 'nav-menu active':'nav-menu'}>
                <li className="nav-item">
                    <Link   exact to="/home" className="nav-links"  onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item" 
                   
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter} 
                > 
                    <Link  to="/services"
                           className="nav-links" 
                           onClick={closeMobileMenu}
                        //    onClick={onMouseEnter} 
                           
                           >
                           
                           Services <i className="fas fa-caret-down"/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className="nav-item">
                    <Link  to="/contact-us" className="nav-links" onClick={closeMobileMenu} >
                        Contact-US
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  to="/travelling" className="nav-links" onClick={closeMobileMenu}>
                        Travelling
                    </Link>
                </li>

                <Link to='/login' className="btn-login" onClick={closeMobileMenu}  >
                      <button className='btn'>Sign In</button>
                </Link>
                  
               
            </ul>
             
        </nav>
            
        </>
    )
}

export default Navbar
