import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                className="header__logo"
                src="data:image/png;base64,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"
                alt=""/>
            </Link>

            <div className="header__search">
                <input
                className="header__searchInput" type="text"
                />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user?user.email:"Guest"}</span>
                        <span className="header__optionLineTwo">{user? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
