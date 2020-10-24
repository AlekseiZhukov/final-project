import React from 'react';
import style from './AdminPage.module.css';
import TheftReportItem from "./TheftReportItem/TheftReportItem";
import Preloader from "../common/Preloader/Preloader";

const AdminPage = (props) => {
    if (!props.state.theftReportsIsFetching) {

        return <Preloader />
    }

    const reportItem = props.state.arrayTheftReports.map( r => <TheftReportItem
        key={r._id}
        numberReport={r.__v}
        createdDate={r.createdAt}
        statusReport={r.status}
        description={r.description}
        officer={''}
        resolution={r.resolution}
    />)

    return (
        <div>
            <table>
                <tr>
                    <th>Сообщение №</th>
                    <th>дата создания</th>
                    <th>Статус сообщения</th>
                    <th>описание</th>
                    <th>ответственный сотрудник</th>
                    <th>комментарий</th>
                    <th>удалить</th>

                </tr>
                {reportItem}
            </table>

        </div>
    )
}
export default AdminPage