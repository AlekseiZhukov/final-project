import React from 'react';
import s from './TheftReportItem.module.css'
import StatusTableCellTheftReportItem from "./statusTableCellTheftReportItem/statusTableCellTheftReportItem";
import ResolutionTableCellTheftReportItem
    from "./resolutionTableCellTheftReportItem/ResolutionTableCellTheftReportItem";
import * as axios from "axios";
import {NavLink} from "react-router-dom";


const TheftReportItem = (props) => {

    let numberReport = props.numberReport + 1
    let date = new Date(props.createdAt).toLocaleString().split(',')[0]

    const onclickCellResolution = () => {
        let reportId = props._id
        props.setWriteFinalCommentTheftReport(reportId)
    }

    const onClickButtonRefresh =() => {
        let resolution = props.resolution;
        let statusReport = props.status
        let date = new Date().toISOString().split('T')[0];
        let token = localStorage.getItem('token');
        let reportId = props._id;

        axios.put(`http://84.201.129.203:8888/api/cases/${reportId}`,
            {
                status: statusReport,
                resolution: resolution,
                updateAt: date,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        );
        props.setChangStatusReportFalse(reportId)
    }


    return (
        <tr>
            <td><NavLink to={`/report/${props._id}`} onClick={() => {}}>{numberReport}</NavLink></td>
            <td>{props.licenseNumber}</td>
            <td>{date}</td>
            <td><StatusTableCellTheftReportItem
                changeReportStatus={props.changeReportStatus}
                id={props._id}
                status={props.status}
            /></td>
            <td>{props.description}</td>
            <td>{props.officer ? props.officer :  'сотрудник не назначен'}</td>
            <td onClick={onclickCellResolution} >
                {props.status === 'done' && props.writeFinalComment
                ? <ResolutionTableCellTheftReportItem {...props}/>
                : props.resolution}
            </td>
            <td><button disabled={!props.changReport } onClick={onClickButtonRefresh}>обновить сообщение</button> </td>
            <td><button>удалить</button></td>
        </tr>
    )
}


export default TheftReportItem