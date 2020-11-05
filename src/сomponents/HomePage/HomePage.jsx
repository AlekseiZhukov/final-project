import React from 'react';
import Button from "../common/Button/Button";
import TheftReportContainer from "./TheftReport/TheftReportContainer";
import SendingLoader from "../common/SendingLoader/SendingLoader";
import style from './HomePage.module.css'
const HomePage = (props) => {

    const onClickButton = () => {
        props.setUpdateShowFormTheftReport()
    }

    return (
        <div className={style.textBlock}>
            <div className={style.textBlockWrapper}>
                <h1>Учет краж велосипедов</h1>
                <p>Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы
                с частой кражей их имущества (велосипедов). Как возможное решение проблемы, компания хочет вести учет
                этих случаев и отслеживать прогресс.</p>
            {!props.state.showFormTheftReport ? <Button className={style.button} onClick={onClickButton} value={'Сообщить о краже'} disabled={false}/> : null}
            {props.showSendingLoader ? <SendingLoader /> : null}
            {props.state.showFormTheftReport ? <TheftReportContainer /> : null}

            </div>
        </div>
    )
}

export default HomePage;