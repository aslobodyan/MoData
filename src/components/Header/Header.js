import React from 'react';
import css from '../Header/Header.module.css';

const Header = () => {
    return (
        <h1 className={css.header}>
            Test Task for <span>MoData</span>
        </h1>
    );
};

export default Header;