import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import ava from './../../assets/images/officer.svg'
import arrowDown from './../../assets/images/arrowDown.svg'
import arrowUp from './../../assets/images/arrowUp.svg'
import homePage from './../../assets/images/homePage.svg'
import tablePage from './../../assets/images/table.svg'
import SignInUpBlock from "./SingInUpBlock/SingInUpBlock";


const Header = (props) => {


    const onClickSignInButton = () => {
        props.setShowSignInUpBlock()
    }

    const onClickExitButton = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('firstName')
        localStorage.removeItem('lastName')
        props.setAuthorized(false)
    }


    return (
        <div className={style.headerBlock}>
            <div className={style.headerWrapper}>

                <div className={style.navBlock}>
                    <div  >
                        <NavLink to={'/'}><img className={style.imgLink} src={homePage} alt={''} /></NavLink>
                    </div>
                    { props.state.authorized ?
                        <div>
                            <NavLink to={'/adminpage'} ><img className={style.imgLink} src={tablePage} alt={''} /></NavLink>
                        </div>
                        : null }
                </div>
                <div className={style.signInBlockWrapper}>
                    <div className={style.signInBlock}>
                        <img className={style.imgAva} src={ava}  alt={'avatar'}/>
                        {props.state.authorized ?
                            <div className={style.officerNameBlock}>
                                <div>{`${props.state.firstName} ${props.state.lastName}`}</div>
                                <div className={style.exitButton} onClick={onClickExitButton}>выйти</div>
                            </div>

                        :
                        <div onClick={onClickSignInButton}  className={style.signInButton}>
                            <span>войти/регистр.</span>
                            <img className={style.arrow} src={props.state.showSignInUpBlock ? arrowUp : arrowDown} alt={''}/>
                        </div>
                        }
                    </div>
                    {props.state.showSignInUpBlock ? <SignInUpBlock {...props} />: null}

                </div>





            </div>
        </div>
    )
}

export default Header;