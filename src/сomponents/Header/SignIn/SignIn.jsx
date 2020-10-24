import React from 'react';
import style from './SignIn.module.css';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import * as axios from "axios";



const SignIn = (props) => {

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
        props.cetCancel()
    }

    const onClickButtonSubmit = () => {

        axios.post('http://84.201.129.203:8888/api/auth/sign_in',
            {
                email: props.state.email,
                password: props.state.password,
            })
            .then(response => {
                console.log(response, response.data.token)
                if (response.status === 200 ) {
                    alert('вы авторизованы');
                    localStorage.setItem('token', response.data.token);
                    props.cetCancel()
                    props.setAuthorized()
                }

            })
            .catch(error => {
                if (error.response) {
                    alert(`${error.response.statusText}, ${error.response.data.error.message}`)
                    props.cetCancel()
                }
            })

    }


    return (

        <div>
            <div>
                <label> email:
                    <Input
                        type={'email'}
                        value={props.state.email}
                        onChange={onEmailChange}
                    />
                </label>
            </div>

            <div>
                <label> password:
                    <Input
                        type={ props.state.showPassword ? 'text' : 'password'}
                        value={props.state.password}
                        onChange={onPasswordChange}
                        className={style.password}
                    />
                    <Button
                        value={props.state.showPassword ? 'Hide password' : 'Show password'}
                        onClick={onClickShowHidePassword}
                    />

                </label>
            </div>

            <div>

            </div>
            <Button value={'авторизоваться'} onClick={onClickButtonSubmit}/>
            <Button value={'Отменить'} onClick={onClickCancelButton}/>

        </div>
    )
}

export default SignIn;