import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import SelectOfficer from "./SelectOfficer/SelectOfficer";
import style from "./BikePage.module.css";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import {Redirect} from "react-router-dom";


const BikePage =(props) => {

    if (!props.bikePage.allDataIsFetching) {
        return <Preloader />
    }
    if (props.bikePage.savedAllDataToServer) {
        return <Redirect to={'/adminpage'} />
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

    const onClickCancel = () => {
        props.setSavedAllDataToServer()
        setTimeout(props.setSavedAllDataToServer, 10)
    }


    return (
        <div className={style.block}>
            <h3>ДЕЛО № {props.bikePage.bikePageData._id}</h3>
            <div className={style.line}></div>
            <div className={style.dateBlock}>
                <div>создано: {createdAt}</div>
                <div>обновлено: {updateAt} </div>
                <div className={style.label}>статус:
                    <select  className={style.inputSelect} value={props.bikePage.bikePageData.status} onChange = {onChangeStatusValue} >
                        <option value={'new'}>новое</option>
                        <option value={'in_progress'}>идет расследование</option>
                        <option value={'done'}>дело закрыто</option>
                    </select>
                </div>
            </div>
            <div className={style.line}></div>

            <div className={style.officerBlock}>
                <div>ДЕЛО ведет:</div>
                     <SelectOfficer
                        array={props.bikePage.arrayOfficers}
                        officerId={props.bikePage.bikePageData.officer}
                        setShowListOfficers={props.setShowListOfficers}
                        showListOfficers={props.bikePage.showListOfficers}
                        setOfficerId={props.setOfficerId}
                     />

            </div>
            <div className={style.line}></div>
            <div className={style.subTitle}>Характеристики велосипеда</div>
            <div className={style.inputsBlockWrapper}>
                <div className={style.inputBlock}>Дата кражи велосипеда:
                    <Input
                        className={style.inputDate}
                        type={'date'}
                        value={date}
                        onChange={onDateChange}
                    />
                </div>
                <div className={style.inputBlock}>тип велосипеда:
                    <select className={style.inputDate} value={props.bikePage.bikePageData.type} onChange = {onChangeTypeBike} >
                        <option value={'sport'}>спортивный</option>
                        <option value={'general'}>повсеместный</option>

                    </select>
                </div>

            </div>
            <div className={style.inputsBlockWrapper}>
                <div className={style.inputBlock}>Номер велосипеда: <Input className={style.inputText} type={'text'} value={props.bikePage.bikePageData.licenseNumber} onChange={onChangeLicenseNumber}/></div>
                <div className={style.inputBlock}>Цвет велосипеда: <Input className={style.inputText} type={'text'} value={props.bikePage.bikePageData.color} onChange={onChangeColor}/></div>
            </div >
            <div className={style.inputBlock}>Владелец велосипеда: <Input className={style.inputText} type={'text'} value={props.bikePage.bikePageData.ownerFullName} onChange={onChangeOwnerFullName}/></div>
            <div>
                <label  className={style.textareaBlockWrapper}> описание:
                    <textarea
                        className={style.textarea}
                        value={props.bikePage.bikePageData.description}
                        onChange={onDescriptionChange}
                    />
                </label>
            </div>
            <div className={style.line}></div>
            <div className={style.subTitle}>Результат расследования</div>

            <div className={style.textareaResolution}>
                {props.bikePage.bikePageData.status === 'done' ? <textarea
                    className={style.textarea}
                    value={props.bikePage.bikePageData.resolution}
                    onChange={onResolutionChange}
                /> : <div >{props.bikePage.bikePageData.resolution}</div>}


            </div>
            <div className={style.line}></div>
            <div className={style.buttonBlock}>
                <Button className={style.button} onClick={onClickSaveData} value={'сохранить'}/>
                <Button className={style.button} onClick={onClickCancel} value={'отменить'}/>
            </div>
        </div>
    )
}
export default BikePage