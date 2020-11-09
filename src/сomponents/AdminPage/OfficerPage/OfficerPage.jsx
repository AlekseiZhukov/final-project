import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import style from "./OfficerPage.module.css";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {Redirect} from "react-router-dom";


const OfficerPage = (props) => {

    if (!props.state.officerDataIsFetching) {
        return <Preloader />
    }
    if (props.state.allDataSaved) {
        return <Redirect to={'/adminpage'} />
    }
    const onChangeOfficerFirstName = (event) => {
        const firstName = event.target.value
        props.setOfficerFirstName(firstName)
    }
    const onChangeOfficerLastName = (event) => {
        const lastName = event.target.value
        props.setOfficerLastName(lastName)
    }
    const onChangeOfficerEmail = (event) => {
        const email = event.target.value
        props.setOfficerEmail(email)
    }
    const onClickApprovedButton = () => {
        props.setApprovedInOfficerPage()

    }
    const onPasswordChange = (event) => {
        const newPassword = event.target.value
        props.setNewPasswordInOfficerPage(newPassword)
    }

    const onClickCancelButton = () => {
        props.setAllDataSavedInOfficerPage()
        setTimeout(props.setAllDataSavedInOfficerPage, 10)
    }

    const onClickSaveDataButton = () => {
        const officerId = props.state.officerData._id
        const data = {
            email: props.state.officerData.email,
            firstName: props.state.officerData.firstName,
            lastName:props.state.officerData.lastName,
            password: props.state.officerData.password,
            approved:props.state.officerData.approved,

        }
        if(!data.password || data.password.length === 0) {
            delete data.password
        }
        props.saveDataOnOfficerPage(officerId, data)
    }


    return (
        <div className={style.block}>
            <h3>OFFICER ID: {props.state.officerData._id}</h3>
            <div className={style.line}></div>
            <div className={style.inputsBlockWrapper}>
                <div className={style.inputBlock}>Имя:
                     <Input
                    className={style.inputText}
                    type={'text'}
                    value={props.state.officerData.firstName}
                    onChange={onChangeOfficerFirstName}/>
                </div>

                <div className={style.inputBlock}>Фамилия:
                    <Input
                        className={style.inputText}
                        type={'text'}
                        value={props.state.officerData.lastName}
                        onChange={onChangeOfficerLastName}/>
                </div>
                <div className={style.inputBlock}>E-mail:
                    <Input
                        className={style.inputText}
                        type={'email'}
                        value={props.state.officerData.email}
                        onChange={onChangeOfficerEmail}/>
                </div>
            </div >
            <div className={style.passwordBlockWrapper}>
                <div className={style.inputPasswordBlock}>Изменить пароль:
                    <Input
                        placeholder = {'введите новый пароль'}
                        type={'text'}
                        value={props.state.newPassword}
                        onChange={onPasswordChange}
                        className={style.inputTextPassword}
                    />
                </div>

                <div onClick={onClickApprovedButton} className={props.state.officerData.approved ? style.approved  : style.no_approved}>
                     {props.state.officerData.approved ? 'сотрудник одобрен' : 'одобрить сотрудника'}
                </div>
            </div>


            <div className={style.line}></div>
            <div className={style.buttonBlock}>
                <Button className={style.button} onClick={onClickSaveDataButton} value={'сохранить'}/>
                <Button className={style.button} onClick={onClickCancelButton} value={'отменить'}/>
            </div>
        </div>
    )
}
export default OfficerPage