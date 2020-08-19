import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

import {useStateValue} from "./StateProvider";
import { auth } from './Firebase'

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
    
    return (
        <nav className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            <div className="header__search">
            <input className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                <span className="header__optionlineone">hello {user?.email}</span>
                <span className="header__optionlinetwo"> {user? 'Sign out' : 'Sign in'}</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionlineone">return</span>
                <span className="header__optionlinetwo">& orders</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionlineone">your</span>
                <span className="header__optionlinetwo">prime</span>
                </div>
                </Link>

{/* basket  */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__basketCount">{basket.length}</span>
                    </div>
                </Link>
               
            </div>

        </nav>
    )
}

export default Header
