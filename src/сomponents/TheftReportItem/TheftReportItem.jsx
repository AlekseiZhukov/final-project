import React from 'react';
import s from './TheftReportItem.module.css'

const TheftReportItem = (props) => {

    return (
        <tr>
            <td>{props.numberReport}</td>
            <td>{props.createdDate}</td>
            <td>{props.statusReport}</td>
            <td>{props.description}</td>
            <td>{props.officer}</td>
            <td>{props.resolution}</td>
            <td>удалить</td>
        </tr>
    )
}


export default TheftReportItem