import React from 'react';
import s from './TheftReportItem.module.css'
import StatusTableCellTheftReportItem from "./statusTableCellTheftReportItem/statusTableCellTheftReportItem";


const TheftReportItem = (props) => {

    let numberReport = props.__v + 1
    let date = new Date(props.createdAt).toLocaleString().split(',')[0]
    //const status = () => {
    //switch (props.statusReport) {
        //case 'new':
           // return  'новое сообщение'
        //case 'in_progress':
       //     return 'в работе'
       // case 'done':
       //     return 'дело закрыто'
       // default:
       //     return props.statusReport
    //}}
    //let statusReport = status()

    return (
        <tr>
            <td>{numberReport}</td>
            <td>{date}</td>
            <td><StatusTableCellTheftReportItem {...props}/></td>
            <td>{props.description}</td>
            <td>{props.officer}</td>
            <td>{props.resolution}</td>
            <td><button>удалить</button></td>
        </tr>
    )
}


export default TheftReportItem