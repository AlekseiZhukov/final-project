import React from 'react';
import s from './TheftReportItem.module.css'
import StatusTableCellTheftReportItem from "./statusTableCellTheftReportItem/statusTableCellTheftReportItem";
import ResolutionTableCellTheftReportItem
    from "./resolutionTableCellTheftReportItem/ResolutionTableCellTheftReportItem";


const TheftReportItem = (props) => {
debugger
    let numberReport = props.numberReport + 1
    let date = new Date(props.createdAt).toLocaleString().split(',')[0]


    return (
        <tr>
            <td>{numberReport}</td>
            <td>{date}</td>
            <td><StatusTableCellTheftReportItem {...props}/></td>
            <td>{props.description}</td>
            <td>{props.officer}</td>
            <td>
                {props.status === 'done'
                ? <ResolutionTableCellTheftReportItem {...props}/>
                : props.resolution}
            </td>
            <td><button>удалить</button></td>
        </tr>
    )
}


export default TheftReportItem