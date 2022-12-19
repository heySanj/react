import React from 'react';


import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css'

import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="ReactMeals Banner"/>
            </div>
            
            
        </>
    );
}
 
export default Header;