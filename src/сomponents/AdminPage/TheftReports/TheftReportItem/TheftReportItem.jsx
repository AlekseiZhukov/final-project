import React from 'react';
import style from './TheftReportItem.module.css'
import checkOk from './../../../../assets/images/ok.svg'
import greenCheckOk from './../../../../assets/images/greenOk.svg'
import trash from './../../../../assets/images/trash.svg'
import pen from './../../../../assets/images/pen.svg'
import ResolutionTableCellTheftReportItem
    from "./resolutionTableCellTheftReportItem/ResolutionTableCellTheftReportItem";
import * as axios from "axios";
import {NavLink} from "react-router-dom";


const TheftReportItem = (props) => {

    let numberReport = props.numberReport + 1
    let date = new Date(props.createdAt).toLocaleString().split(',')[0]

    const onChangeStatus = (event) => {
        let statusReport = event.target.value;
        let id = props._id;
        props.setTheftReportStatus(statusReport, id);
    }

    const onClickButtonSaveButton = () => {

        const date = new Date().toISOString().split('T')[0];
        const token = localStorage.getItem('token');
        const reportId = props._id;

        axios.put(`http://84.201.129.203:8888/api/cases/${reportId}`,
            {
                status: props.status,
                resolution: props.resolution,
                updateAt: date,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(response => {
                if (response.status == 200) {
                    props.setDataChangedFalse(reportId)
                    props.setWriteFinalCommentTheftReportFalse(reportId)
                }
            })
    }

    const onClickButtonDelete = () => {
        const reportId = props._id;

        const token = localStorage.getItem('token');
        axios.delete(`http://84.201.129.203:8888/api/cases/${reportId}`,
            {headers: {Authorization: `Bearer ${token}`}})
            .then(res => {
                console.log(res)
                props.deleteReport(reportId);
            })
    }

    const officerFullName = props.arrayOfficers.map(officer => {
        if (officer._id === props.officer) {
            return `${officer.firstName} ${officer.lastName}`
        }
        return 'сотрудник не назначен'
    })

    return (
        <tr>
            <td><NavLink to={`/reports/${props._id}`}><img className={style.img} src={pen} alt={''}/></NavLink></td>

            <td>{date}</td>
            <td>
                <select className={style.inputSelect} value={props.status} onChange={onChangeStatus}>
                    <option value={'new'}>новое</option>
                    <option value={'in_progress'}>в процессе</option>
                    <option value={'done'}>закрыто</option>
                </select>
            </td>
            <td>{props.description}</td>
            <td>{props.officer ? officerFullName : 'сотрудник не назначен'}</td>
            <td>
                {props.status === 'done' && props.dataChanged && !props.writeFinalComment
                    ? <ResolutionTableCellTheftReportItem
                        resolution={props.resolution}
                        setTheftReportResolution={props.setTheftReportResolution}
                        setWriteFinalCommentTheftReport={props.setWriteFinalCommentTheftReport}
                        reportId={props._id}
                    />
                    : props.resolution}
            </td>
            <td>
                <div onClick={onClickButtonSaveButton}>
                    <img
                        className={!props.dataChanged ? style.img : style.imgOk}
                        src={!props.dataChanged ? checkOk : greenCheckOk}
                        alt={''}
                    />
                </div>

            </td>
            <td>
                <div onClick={onClickButtonDelete}>
                    <img
                        className={style.trash}
                        src={trash}
                        alt={''}
                    />
                </div>

            </td>
        </tr>
    )
}


export default TheftReportItem