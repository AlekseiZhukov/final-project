import React from 'react';
import s from './TheftReportItem.module.css'

const TheftReportItem = (props) => {
    let numberReport = props.numberReport + 1
    let date = new Date(props.createdDate).toLocaleString().split(',')[0]
    let status = () => {
    switch (props.statusReport) {
        case 'new':
            return  'новое сообщение'
        case 'in_progress':
            return 'в работе'
        case 'done':
            return 'дело закрыто'
        default:
            return props.statusReport
    }}

    return (
        <tr>
            <td>{numberReport}</td>
            <td>{date}</td>
            <td>{status()}</td>
            <td>{props.description}</td>
            <td>{props.officer}</td>
            <td>{props.resolution}</td>
            <td>удалить</td>
        </tr>
    )
}


export default TheftReportItem