import React from 'react'
import './Header.css'
import punkLogo from './assets/header/cryptopunk-logo.png'
import searchIcon from './assets/header/search.png'


const Header = () => {
  return (
    <div className='header'>
       <div className="logoContainer">
           <img src={punkLogo} className = "punkLogo" alt="Punk Logo" />
       </div>

       <div className="searchBar">
           <div className="searchIconContainer">
               <img src={searchIcon} alt = ""/>
           </div>
               <input type="text" className='searchInput' placeholder='Collection, Item or User' />
       </div>

       <div className="headerItems">
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
       </div>
        
    </div>
  )
}

export default Header     