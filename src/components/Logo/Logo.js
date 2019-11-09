import React from 'react';
import burgerLogo from '../../assests/images/burgerLogo.png';
import classes from './Logo.css';

const logo = (pros) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurgerBuilder" />
    </div>
);

export default logo;