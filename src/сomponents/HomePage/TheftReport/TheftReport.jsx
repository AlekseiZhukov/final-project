import Button from "../../common/Button/Button";

import React from "react";
import Input from "../../common/Input/Input";
import * as axios from "axios";

const TheftReport = (props) => {


    const onClickButtonCancel = () => {
        props.setUpdateShowFormTheftReport()
    }

    const onDateChange = (event) => {
        let date = new Date(event.target.value).toISOString().split('T')[0]
        props.setUpdateData(date)
    }
    const onlicenseNumberChange = (event) => {
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

    const onClickButtonSendTheftReport = () => {
        let date = new Date().toISOString().split('T')[0]
        axios.post('http://84.201.129.203:8888/api/public/report',
            {
                status: 'new',
                date: props.state.date,
                licenseNumber: props.state.licenseNumber,
                color: props.state.color,
                type: props.state.typeBike,
                ownerFullName: props.state.ownerFullName,
                //officer: '',
                createdAt: date,
                updateAt: date,
                clientId: '099ebf16951b434e2ed9dbac12633f42',
                description: props.state.description,
                resolution: '',
            })
            .then(response => {
                console.log(response)
                if (response.status === 200 ) {
                    alert('Сообщение принято');
                }

            })

            .catch(error => {
                if (error.response) {
                    alert(`${error.response.statusText}, ${error.response.data.error.message}`)
                }
            })
    }



    return (

        <div>
            <h1>Сообщение о краже:</h1>

            <div>
                <label> Дата кражи:
                    <Input
                        type={'date'}
                        value={props.state.date}
                        onChange={onDateChange}
                    />
                </label>
            </div>
            <div>
                <label> Номер велосипеда:
                    <Input
                        type={'text'}
                        value={props.state.licenseNumber}
                        onChange={onlicenseNumberChange}
                    />
                </label>
            </div>
            <div>
                <label> Цвет велосипеда:
                    <Input
                        type={'text'}
                        value={props.state.color}
                        onChange={onColorChange}
                    />
                </label>
            </div>
            <div>
                <label> Тип велосипеда:
                    <select value={props.state.typeBike} onChange = {onTypeChange} >
                        <option value={''}>выберите тип велосипеда</option>
                        <option value={'sport'}>спортивный</option>
                        <option value={'general'}>дорожный</option>
                    </select>

                </label>
            </div>
            <div>
                <label> Имя владельца:
                    <Input
                        type={'text'}
                        value={props.state.ownerFullName}
                        onChange={onOwnerFullNameChange}
                    />
                </label>
            </div><div>
                <label> Доп информация:
                    <textarea
                        value={props.state.description}
                        onChange={onDescriptionChange}
                    />
                </label>
            </div>


            { (props.state.date).length
                && (props.state.licenseNumber).length
                && (props.state.color).length
                && (props.state.typeBike).length
                && (props.state.ownerFullName).length ?
            <Button onClick={onClickButtonSendTheftReport} value={'Сообщить о краже'}/> : null}
            <Button onClick={onClickButtonCancel} value={'Закрыть форму'}/>


        </div>
    )
}

export default TheftReport;

