import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={style.headerWrapper}>
            <div>
                <NavLink to={'./'} className={style.headerLink}>Home page</NavLink>
            </div>
            <div>
                <NavLink to={'./sign_in'} className={style.headerLink}>Sign in</NavLink>
            </div>
            <div>
                <NavLink to={'./sign_up'} className={style.headerLink}>Sign up</NavLink>

            </div>
            { props.authorized ? <div>
                <NavLink to={'./adminpage'} className={style.headerLink}>Admin Page</NavLink>

            </div> : null }
            Header
        </div>
    )
}

export default Header;