import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItem'
import './Dropdown.css'

function Dropdown() {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)

    return (
        <>
            <ul className={click?'dropdown-menu clicked':'dropdown-menu'}
                onClick={handleClick}   
            >
             {MenuItems.map((item,index) =>{
                 return(
                     <li key={index} className='sub-li'>
                         <Link className={item.cName}
                               to={item.path}
                               onClick={()=>setClick(false)}
                          >
                              {item.title}
                          </Link>
                     </li>
                 )

              })}
            </ul>
        </>
    )
}

export default Dropdown
