import React from 'react'
import * as axios from "axios";

const StatusTableCellTheftReportItem = (props) => {
    const onChangeStatus = (event) => {
        let statusReport = event.target.value;
        let id = props._id;
        let token = localStorage.getItem('token');
        let date = new Date().toISOString().split('T')[0]
        props.changeReportStatus(statusReport, id);
        axios.put(`http://84.201.129.203:8888/api/cases/${props._id}`,
            {
                status: statusReport,
                updateAt: date,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
    }
    return (
        <div>
            <select value={props.status} onChange = {onChangeStatus} >
                <option value={'new'}>новое</option>
                <option value={'in_progress'}>в процессе</option>
                <option value={'done'}>дело закрыто</option>
            </select>
          </div>
    )
}

export default StatusTableCellTheftReportItem