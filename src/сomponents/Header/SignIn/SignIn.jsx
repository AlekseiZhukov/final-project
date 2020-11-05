import React from 'react';
import style from './SignIn.module.css';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {Redirect} from "react-router-dom";
import closedEye from './../../../assets/images/closedEye.svg'
import openEye from './../../../assets/images/openEye.svg'




const SignIn = (props) => {

    if (props.state.authorized) {
        return <Redirect to={'/adminpage'} />
    }
    const onEmailChange = (event) => {
        let newEmail = event.target.value;
        props.setUpdateEmail(newEmail)
    }

    const onPasswordChange = (event) => {
        let password = event.target.value;
        props.setUpdatePassword(password);
    }
    const onClickShowHidePassword = () => {
        props.setShowHidePassword()
    }

    const onClickCancelButton = () => {
        props.setCancelRequestSignIn()
        props.setShowSignInForm(false)
    }

    const onClickButtonSubmit = () => {
        props.setShowSignInForm(false)
        props.onClickButtonSubmit()
    }


    return (

        <div className={style.signInForm}>
            <div className={style.signInFormWrapper}>
                <h3>вход</h3>
                <Input
                    placeholder = {'введите e-mail'}
                    type={'email'}
                    value={props.state.email}
                    onChange={onEmailChange}
                    className={style.inputSignIn}
                />
                <div className={style.passwortInput}>
                    <Input
                        type={ props.state.showPassword ? 'text' : 'password'}
                        value={props.state.password}
                        onChange={onPasswordChange}
                        className={style.inputSignIn}
                        placeholder = {'введите password'}
                    />
                    <div onClick={onClickShowHidePassword}>
                        <img className={style.eyePassword} src={props.state.showPassword ? openEye : closedEye} alt={''}/>
                    </div>
                </div>
                <div className={style.passwortInput}>
                    <Button value={'войти'} onClick={onClickButtonSubmit} className={style.signInFormButton}/>
                    <Button value={'Отменить'} onClick={onClickCancelButton} className={style.signInFormButton}/>
                </div>
            </div>
        </div>
    )
}

export default SignIn;