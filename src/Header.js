import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBusketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
const[{basket, user}, dispatch] = useStateValue();
const handleAuthentication =() =>{
    if(user) {
        auth.signOut();
    }
}
    return (
        <div className="header">
            <Link to="/">
            <img 
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>

        <div className="header__search">
            <input className="header__searchInput" type="text" ></input>
            <SearchIcon className="header__searchIcon"></SearchIcon>
        </div>

        <div className="header__nav">
            <Link to={!user && '/login'}>
            <div className="header__option" onClick={handleAuthentication}>
                <span className="header__optionLineOne">Hello {user ? user?.email: 'Guest'}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </div>
        <Link to="/checkout">
        <div className="header__optionBusket">
            <ShoppingBusketIcon></ShoppingBusketIcon>
            <span className="header__optionLineTwo header__busketCount">{basket?.length}</span>
        </div>
        </Link>
    </div>
    );
}

export default Header
