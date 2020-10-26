import React from 'react'

const StatusTableCellTheftReportItem = (props) => {

    const onChangeStatus = (event) => {
        let statusReport = event.target.value;
        let id = props.id;
        props.changeReportStatus(statusReport, id);
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