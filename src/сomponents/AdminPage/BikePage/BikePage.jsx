import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import SelectOfficer from "./SelectOfficer/SelectOfficer";
import {setOfficerId} from "../../../redux/bikePageReducer";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";


const BikePage =(props) => {

    if (!props.bikePage.allDataIsFetching) {
        return <Preloader />
    }

    const createdAt = new Date(props.bikePage.bikePageData.createdAt).toLocaleString().split(',')[0]
    const updateAt = new Date(props.bikePage.bikePageData.updateAt).toLocaleString().split(',')[0]
    const date = new Date(props.bikePage.bikePageData.date).toISOString().split('T')[0]
    const currentDate = new Date().toISOString().split('T')[0]


    const onChangeLicenseNumber = (event) => {
        const licenseNumber = event.target.value
        props.setLicenseNumber(licenseNumber)
    }

    const onChangeStatusValue = (event) => {
        const statusValue = event.target.value
        props.setStatusValue(statusValue)
    }

    const onDateChange = (event) => {
        console.log(event.target.value)
        let newDate = event.target.value
        props.setDateEvents(newDate)
    }

    const onChangeColor = (event) => {
        const color = event.target.value
        props.setColor(color)
    }
    const onChangeOwnerFullName = (event) => {
        const ownerFullName = event.target.value
        props.setOwnerFullName(ownerFullName)
    }
    const onDescriptionChange = (event) => {
        const description = event.target.value
        props.setDescription(description)
    }
    const onChangeTypeBike = (event) => {
        const type = event.target.value
        props.setTypeBike(type)
    }
    const onResolutionChange = (event) => {
        const resolution = event.target.value
        props.setResolution(resolution)
    }

    const onClickSaveData = () => {
        const reportId = props.bikePage.bikePageData._id
        const data = {
            status:props.bikePage.bikePageData.status,
            date:props.bikePage.bikePageData.date,
            licenseNumber:props.bikePage.bikePageData.licenseNumber,
            color:props.bikePage.bikePageData.color,
            type:props.bikePage.bikePageData.type,
            ownerFullName:props.bikePage.bikePageData.ownerFullName,
            officer:props.bikePage.bikePageData.officer,

            updateAt: currentDate,

            description:props.bikePage.bikePageData.description,
            resolution: props.bikePage.bikePageData.resolution

        }
        if(!data.officer || data.officer.length === 0) {
            delete data.officer
        }
        props.saveDataOnBikePage(reportId, data)
    }

    return (
        <>
            <div>Сообщение создано {createdAt}</div>
            <div>последнее обновление {updateAt} </div>

            <div>статус сообщения:
                <select value={props.bikePage.bikePageData.status} onChange = {onChangeStatusValue} >
                    <option value={'new'}>новое</option>
                    <option value={'in_progress'}>идет расследование</option>
                    <option value={'done'}>дело закрыто</option>
                </select>
            </div>
            <div>ответственный сотрудник:
                 <SelectOfficer
                    array={props.bikePage.arrayOfficers}
                    officerId={props.bikePage.bikePageData.officer}
                    setShowListOfficers={props.setShowListOfficers}
                    showListOfficers={props.bikePage.showListOfficers}
                    setOfficerId={props.setOfficerId}
                 />
            </div>
            <div><h1>Характеристики велосипеда</h1></div>
            <div>Дата кражи велосипеда:
                <Input
                    type={'date'}
                    value={date}
                    onChange={onDateChange}
                />
            </div>
            <div>тип велосипеда:
                <select value={props.bikePage.bikePageData.type} onChange = {onChangeTypeBike} >
                    <option value={'sport'}>спортивный</option>
                    <option value={'general'}>повсеместный</option>

                </select>
            </div>
            <div>Номер велосипеда: <Input type={'text'} value={props.bikePage.bikePageData.licenseNumber} onChange={onChangeLicenseNumber}/></div>
            <div>Цвет велосипеда: <Input type={'text'} value={props.bikePage.bikePageData.color} onChange={onChangeColor}/></div>
            <div>Владелец велосипеда: <Input type={'text'} value={props.bikePage.bikePageData.ownerFullName} onChange={onChangeOwnerFullName}/></div>
            <div>
                <label> описание:
                    <textarea
                        value={props.bikePage.bikePageData.description}
                        onChange={onDescriptionChange}
                    />
                </label>
            </div>
            <hr></hr>
            <div><h2>Результат расследования</h2></div>

            <div>
                {props.bikePage.bikePageData.status === 'done' ? <textarea
                    value={props.bikePage.bikePageData.resolution}
                    onChange={onResolutionChange}
                /> : <div>{props.bikePage.bikePageData.resolution}</div>}


            </div>
            <Button onClick={onClickSaveData} value={'сохранить'}/>
        </>
    )
}
export default BikePage