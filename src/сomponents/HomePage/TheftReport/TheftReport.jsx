import Button from "../../common/Button/Button";
import React from "react";
import Input from "../../common/Input/Input";
import style from './TheftReport.module.css'

const TheftReport = (props) => {

    const onClickButtonCancel = () => {
        props.setUpdateShowFormTheftReport()
    }

    const onDateChange = (event) => {
        let date = new Date(event.target.value).toISOString().split('T')[0]
        props.setUpdateData(date)
    }
    const onLicenseNumberChange = (event) => {
        let licenseNumber = event.target.value
        props.setUpdateLicenseNumber(licenseNumber)
    }
    const onColorChange = (event) => {
        let color = event.target.value
        props.setUpdateColor(color)
    }
    const onTypeChange = (event) => {
        let type = event.target.value
        props.setUpdateTypeBike(type)
    }
    const onOwnerFullNameChange = (event) => {
        let ownerFullName = event.target.value
        props.setOwnerFullName(ownerFullName)
    }
    const onDescriptionChange = (event) => {
        let description = event.target.value
        props.setUpdateDescription(description)
    }

    const onClickButtonSendTheftReport =() => {
        props.onClickButtonSendTheftReport()
    }

    const disabledButtonSendReport = props.state.description.length > 0
        && props.state.ownerFullName.length > 0 && props.state.typeBike.length > 0 &&
                    props.state.color.length > 0 && props.state.licenseNumber.length > 0 &&
                            props.state.date.length > 0

    return (

        <div className={style.theftReportBlock}>
            <div className={style.theftReportBlockWrapper}>
            <h3>Сообщение о краже:</h3>
                <label className={style.label}> <span>Дата кражи:</span>
                    <Input
                        className={style.inputDate}
                        type={'date'}
                        value={props.state.date}
                        onChange={onDateChange}
                    />
                </label>
                <label className={style.label}> <span>Номер велосипеда:</span>
                    <Input
                        className={style.input}
                        type={'text'}
                        value={props.state.licenseNumber}
                        onChange={onLicenseNumberChange}
                    />
                </label>
                <label className={style.label}> <span>Цвет велосипеда:</span>
                    <Input
                        className={style.input}
                        type={'text'}
                        value={props.state.color}
                        onChange={onColorChange}
                    />
                </label>
                <label className={style.label}> <span>Тип велосипеда:</span>
                    <select className={style.inputSelect} value={props.state.typeBike} onChange = {onTypeChange} >
                        <option value={''}>выберите тип</option>
                        <option value={'sport'}>спортивный</option>
                        <option value={'general'}>дорожный</option>
                    </select>

                </label>
                <label className={style.label}> <span>Имя владельца:</span>
                    <Input
                        className={style.input}
                        type={'text'}
                        value={props.state.ownerFullName}
                        onChange={onOwnerFullNameChange}
                    />
                </label>
                <textarea
                    className={style.textarea}
                        placeholder={'введите дополнительную информация'}
                        value={props.state.description}
                        onChange={onDescriptionChange}

                />
            <div className={style.buttonBlock}>
            <button className={style.button} onClick={onClickButtonSendTheftReport}  disabled={!disabledButtonSendReport} >Отправить</button>
            <Button className={style.button} onClick={onClickButtonCancel} value={'Отмена'}/>
            </div>
            </div>
        </div>
    )
}

export default TheftReport;

