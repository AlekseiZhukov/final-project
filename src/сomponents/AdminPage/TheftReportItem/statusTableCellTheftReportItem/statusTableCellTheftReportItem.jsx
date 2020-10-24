import React from 'react'
import * as axios from "axios";


const StatusTableCellTheftReportItem = (props) => {

    //debugger
    const onChangeStatus = (event) => {
        let statusReport = event.target.value;
        let token = localStorage.getItem('token');
        let date = new Date().toISOString().split('T')[0]
        axios.put(`http://84.201.129.203:8888/api/cases/:${props._id}`,
            {
                headers: {Authorization: `Bearer ${token}`},
                status: statusReport,
                licenseNumber: props.licenseNumber,
                color: props.color,
                ownerFullName: props.ownerFullName,
                createdAt: props.createdAt,
                updateAt: date,
                clientId: props.clientId,

            }
        )
        .then(response => {
                console.log(response)
            })

    }
    return (
        <div>
                <div>{props.status}</div>
                <select value={props.status} onChange = {onChangeStatus} >
                    <option value={''}>изменить статус</option>
                    <option value={'in_progress'}>в процессе</option>
                    <option value={'done'}>дело закрыто</option>
                </select>


        </div>
    )
}

export default StatusTableCellTheftReportItem