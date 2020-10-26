import React from 'react';

import TheftReportItem from "./TheftReportItem/TheftReportItem";
import Preloader from "../../common/Preloader/Preloader";

const TheftReports = (props) => {

    if (!props.state.theftReportsIsFetching) {
        return <Preloader />
    }

    const reportItem = props.state.arrayTheftReports.map( (r,i) => <TheftReportItem
        key={r._id}
        changeReportStatus={props.setTheftReportStatus}
        setTheftReportResolution={props.setTheftReportResolution}
        setWriteFinalCommentTheftReport={props.setWriteFinalCommentTheftReport}
        setWriteFinalCommentTheftReportFalse={props.setWriteFinalCommentTheftReportFalse}
        setChangStatusReportFalse={props.setChangStatusReportFalse}
        setChangStatusReportTrue={props.setChangStatusReportTrue}
        numberReport={i}
        {...r}
    />)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Сообщение №</th>
                        <th>№ велосипеда</th>
                        <th>дата создания</th>
                        <th>Статус сообщения</th>
                        <th>описание</th>
                        <th>ответственный сотрудник</th>
                        <th>комментарий</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {reportItem}
                </tbody>

            </table>

        </div>
    )
}
export default TheftReports