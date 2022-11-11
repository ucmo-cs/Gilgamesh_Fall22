import React from 'react'
import MainLogo from './assets/images/main_logo.png'
function Header() {
    return (
        <div id='megaMenu'>

            <div id='rectangle'>
                <div className='allContent'>

                    <div className="dropMenu" aria-role="navigation" aria-label="Main Navigation">
                        <nav className='header_container'>
                            <div className='logoDesktop'>
                                <div className='all-center'>
                                    <a href="/" id="logo">
                                        <img src={MainLogo} />
                                    </a>
                                </div>
                            </div>

                            <ul className="item_container">
                                <li className="item">
                                    <a className="" href="#">Bank</a>
                                </li>
                                <li className="item">
                                    <a className="" href="#">Borrow</a>
                                </li>
                                <li className="item">
                                    <a className="" href="#">Invest</a>
                                </li>
                                <li className="item">
                                    <a className="" href="#">Insurance</a>
                                </li>
                                <li className="item">
                                    <a className="" href="#">Tips</a>
                                </li>
                                <li className="item">
                                    <input type="text" />
                                </li>
                                <li className="item">
                                    <div className='profile'></div>
                                </li>
                            </ul>
                        </nav>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header