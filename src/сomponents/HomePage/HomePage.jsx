import React from 'react';

import Button from "../common/Button/Button";
import TheftReportContainer from "../TheftReport/TheftReportContainer";

const HomePage = (props) => {

    const onClickButton = () => {
        props.setUpdateShowFormTheftReport()
    }

    return (
        <div>
            <h1>Учет краж велосипедов</h1>
            <p>Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы
                с частой кражей их имущества (велосипедов). Как возможное решение проблемы, компания хочет вести учет
                этих случаев и отслеживать прогресс.</p>
            {!props.state.showFormTheftReport ? <Button onClick={onClickButton} value={'Сообщить о краже'}/> : null}

            {props.state.showFormTheftReport ? <TheftReportContainer /> : null}
        </div>
    )
}

export default HomePage;