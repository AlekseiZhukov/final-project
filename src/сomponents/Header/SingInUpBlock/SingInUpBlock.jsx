import React from 'react';
import style from './SignInUpBlock.module.css';
import SignUp from "./../SignUp/SignUp";
import SignIn from "./../SignIn/SignIn";


const SignInUpBlock = (props) => {


    const onClickSignIn = () => {
        props.setShowSignInForm(true)
    }

    const onClickSignUp = () => {
        props.setShowSignUpForm(true)
    }


    return (

        <div className={style.signInSubBlock}>
            <div onClick={onClickSignIn} className={style.blockItem}><span>вход</span></div>
            {props.state.showSignInForm ? <SignIn {...props}/>: null}
            <div  onClick={onClickSignUp} className={style.blockItem}>регистрация</div>
            {props.state.showSignUpForm ? <SignUp {...props}/>: null}
        </div>
    )
}

export default SignInUpBlock;