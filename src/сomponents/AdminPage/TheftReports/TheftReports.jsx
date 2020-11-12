import React from 'react';
import TheftReportItem from "./TheftReportItem/TheftReportItem";
import Preloader from "../../common/Preloader/Preloader";
import style from './TheftReports.module.css'
import TheftReportContainer from "../../HomePage/TheftReport/TheftReportContainer";


const TheftReports = (props) => {

    if (!props.state.allDataIsFetching) {
        return <Preloader/>
    }

    const reportItem = props.state.arrayTheftReports.map((r, i) => <TheftReportItem
        key={r._id}
        setTheftReportStatus={props.setTheftReportStatus}
        setTheftReportResolution={props.setTheftReportResolution}
        setWriteFinalCommentTheftReport={props.setWriteFinalCommentTheftReport}
        setDataChangedFalse={props.setDataChangedFalse}
        setWriteFinalCommentTheftReportFalse={props.setWriteFinalCommentTheftReportFalse}
        deleteReport={props.deleteReport}
        numberReport={i}
        arrayOfficers={props.state.arrayOfficers}
        {...r}
    />)

    const onClickAddNewButton = () => {
        props.setUpdateShowFormTheftReport()
    }
    return (
        <div className={style.blockWrapper}>
                <h1>Сообщения о кражах</h1>
            {props.showFormTheftReport.showFormTheftReport ? <TheftReportContainer updateCases={props.updateCases}/> : null}
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>дата создания</th>
                        <th>Статус сообщения</th>
                        <th>описание</th>
                        <th>сотрудник</th>
                        <th>комментарий</th>
                        <th></th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                {reportItem}
                </tbody>
            </table>

            <div onClick={onClickAddNewButton} className={style.buttonAddNewReport}>новое сообщение</div>

        </div>
    )
}
export default TheftReports