import React from 'react'
import { HeaderMenu,searchKeyword } from '../../data/header'
import { Link, useLocation }from 'react-router-dom'


const Menu = () => {

  const location = useLocation();
  console.log(location)

  return (
    <nav className='header__menu'>
    <ul className='menu'>
      {HeaderMenu.map((menu, key)=>(
        <li key={key} className={location.pathname === menu.src ? 'active':''}>
          <Link to = {menu.src}> 
            {menu.icon}{menu.title}
          </Link>
        </li>
      ))}
    </ul>
    <ul className='keyword'>
      {searchKeyword.map((keyword, key)=>(
        <li key={key} className={location.pathname === keyword.src ? 'active':''}>
          <Link to = {keyword.src}>
            {keyword.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default Menu