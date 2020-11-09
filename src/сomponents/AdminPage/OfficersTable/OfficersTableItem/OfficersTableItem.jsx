import React from 'react';
import style from './OfficersTableItem.module.css'
import trash from './../../../../assets/images/trash.svg'
import pen from './../../../../assets/images/pen.svg'

import * as axios from "axios";
import {NavLink} from "react-router-dom";


const OfficersTableItem = (props) => {

    const onChangeApproved = () => {
        const token = localStorage.getItem('token');
        const officerId = props._id;
        axios.put(`http://84.201.129.203:8888/api/officers/${officerId}`,
            {  approved: props.approved},
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(response => {
                if (response.status === 200) {
                    console.log('officer approved')
                    props.setOfficerApproved(true, officerId)
                }
            })
    }


    const onClickButtonDelete = () => {
        const officerId = props._id;
        const token = localStorage.getItem('token');
        axios.delete(`http://84.201.129.203:8888/api/officers/${officerId}`,
            {headers: {Authorization: `Bearer ${token}`}})
            .then(res => {
                console.log(res)
                props.setDeleteOfficer(officerId);
            })
    }


    return (
        <tr>
            <td><NavLink to={`/officers/${props._id}`}><img className={style.img} src={pen} alt={''}/></NavLink></td>

            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>
                <div onClick={onChangeApproved} className={!props.approved ? style.no_approved : style.approved}>
                    {props.approved ? 'одобрен' : 'одобрить'}
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


export default OfficersTableItem