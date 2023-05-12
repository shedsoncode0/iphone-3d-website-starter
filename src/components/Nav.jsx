import React from 'react'

import logo from '../assets/images/logo.svg'
import search from '../assets/images/search.svg'
import store from '../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className="nav-wrapper">
        <div className="nav-content">
            <ul className='list-styled'>
                <li>
                    <img src={logo} alt="" />
                </li>
                <li>
                    <a className='link-styled' href="#">Store</a>
                </li>
                <li>
                    <a className='link-styled' href="#">Mac</a>
                </li>
                <li>
                    <a className='link-styled' href="#">ipad</a>
                </li>
                <li>
                    <a className='link-styled' href="#">iphone</a>
                </li>
                <li>
                    <a className='link-styled' href="#">Watch</a>
                </li>
                <li>
                    <a className='link-styled' href="#">AirPods</a>
                </li>
                <li>
                    <a className='link-styled' href="#">Tv & Home</a>
                </li>
                <li>
                    <a className='link-styled' href="#">Entertaiment</a>
                </li>
                <li>
                    <a className='link-styled' href="#">Accessories</a>
                </li>
                <li>
                    <a className='link-styled' href="#">Support</a>
                </li>
                <li>
                    <img src={search} alt="store" />
                </li>
                <li>
                    <img src={store} alt="store" />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav