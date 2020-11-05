import React from 'react';
import style from './SignUp.module.css';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import closedEye from './../../../assets/images/closedEye.svg'
import openEye from './../../../assets/images/openEye.svg'

const SignUp = (props) => {

    const onEmailChange = (event) => {
        let newEmail = event.target.value;
        props.setUpdateEmail(newEmail)
    }
    const onFirstNameChange = (event) => {
        let firstName = event.target.value;
        props.setUpdateFirstName(firstName)
    }
    const onLastNameChange = (event) => {
        let lastName = event.target.value;
        props.setUpdateLastName(lastName)
    }
    const onPasswordChange = (event) => {
        let password = event.target.value;
        props.setUpdatePassword(password);
        props.setPasswordMatched();
    }
    const onRePasswordChange = (event) => {
        let repassword = event.target.value;
        props.setUpdateRePassword(repassword);
        props.setPasswordMatched();
    }
    const onClientIdChange = (event) => {
        let clientId = event.target.value
        props.setUpdateClientId(clientId)
    }

    const onClickShowHidePassword = () => {
        props.setShowHidePassword()
    }

    const onClickCancelButton = () => {
        props.setCancelRequestRegistry()
        props.setShowSignUpForm(false)
    }

    const onClickAddEmployee = () => {
        props.onClickAddEmployee()
    }

    return (

        <div className={style.signUpForm}>
            <div className={style.signUpFormWrapper}>
                <h3>регистрация</h3>
                <Input
                    placeholder = {'введите e-mail'}
                    type={'email'}
                    value={props.state.email}
                    onChange={onEmailChange}
                    className={style.inputSignUp}
                />
                <Input
                    placeholder = {'введите имя'}
                    type={'text'}
                    value={props.state.firstName}
                    onChange={onFirstNameChange}
                    className={style.inputSignUp}
                />
                <Input
                    placeholder = {'введите фамилию'}
                    type={'text'}
                    value={props.state.lastName}
                    onChange={onLastNameChange}
                    className={style.inputSignUp}
                />


                <div className={style.passwordBlock}>
                    <div className={style.passwordWrapper}>
                        <Input
                            placeholder = {'введите пароль'}
                            type={ props.state.showPassword ? 'text' : 'password'}
                            value={props.state.password}
                            onChange={onPasswordChange}
                            className={props.state.passwordMatched ? `${style.passwordMatched}` : `${style.passwordNotMatch}`}
                        />
                        <Input
                            placeholder = {'повторите пароль'}
                            type={ props.state.showPassword ? 'text' : 'password'}
                            value={props.state.repassword}
                            onChange={onRePasswordChange}
                            className={props.state.passwordMatched ? `${style.passwordMatched}` : `${style.passwordNotMatch}`}
                        />
                    </div>
                    <div onClick={onClickShowHidePassword}>
                        <img className={style.eyePassword} src={props.state.showPassword ? openEye : closedEye} alt={''}/>
                    </div>
                </div>
                <Input
                    placeholder = {'введите client id'}
                    type={'text'}
                    value={props.state.clientId}
                    onChange={onClientIdChange}
                    className={style.inputSignUp}
                />
                <div className={style.buttonBlock}>
                    <Button value={'регистрация'} onClick={onClickAddEmployee} className={style.signInFormButton}/>
                    <Button value={'отменить'} onClick={onClickCancelButton} className={style.signInFormButton}/>
                </div>

            </div>
        </div>
    )
}

export default SignUp;