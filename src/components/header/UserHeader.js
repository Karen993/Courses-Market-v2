import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {ABOUT_ROUTE,
    ADD_ITEM_ROUTE,
    MAIN_ROUTE,
    USER_CART_ROUTE,
    USER_PRODUCTS_ROUTE} from "../../constants/routes";
import {useStyles} from './headerStyles'
import logo from "../../assets/img/logo.png";
import UserMenu from "./UserMenu";
import {selectMenuStatus} from "../../redux/common/menuStatus/selectors";

const getMenuItemStyle = (itemStatus, styles) => {
    if(itemStatus)
        return styles.linkActive;
    else
        return styles.linkPassive;
}

function UserHeader() {
    const classes = useStyles();
    const menuStatus = useSelector(selectMenuStatus);

    return (
        <div className={classes.container}>
            <span>
                <a href={MAIN_ROUTE}>
                    <img className={classes.logo} src={logo} alt="Logo" height='60px' width='60px'/>
                </a>
            </span>
            <div className={classes.linkBox}>
                <Link className={getMenuItemStyle(menuStatus.storeMenuStatus, classes)} to={MAIN_ROUTE}>Store</Link>
                <Link className={getMenuItemStyle(menuStatus.myProductsMenuStatus, classes)} to={USER_PRODUCTS_ROUTE}>My Products</Link>
                <Link className={getMenuItemStyle(menuStatus.addItemMenuStatus, classes)} to={ADD_ITEM_ROUTE}>Add Item</Link>
                <Link className={getMenuItemStyle(menuStatus.cartMenuStatus, classes)} to={USER_CART_ROUTE}>Cart</Link>
                <Link className={getMenuItemStyle(menuStatus.aboutMenuStatus, classes)} to={ABOUT_ROUTE}>About</Link>

                <UserMenu />
            </div>
        </div>
    )
}

export default  UserHeader;