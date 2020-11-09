import React from 'react';
import OfficersTableItem from "./OfficersTableItem/OfficersTableItem";
import Preloader from "../../common/Preloader/Preloader";
import style from './Officers.module.css'

//import {setUpdateShowFormTheftReport} from "../../../redux/homePageReducer";

const Officers = (props) => {

    if (!props.state.allDataIsFetching) {
        return <Preloader/>
    }

    const officerItem = props.state.arrayOfficers.map(r => <OfficersTableItem
        key={r._id}
        setOfficerApproved={props.setOfficerApproved}
        setDeleteOfficer={props.setDeleteOfficer}
        {...r}
    />)


    return (
        <div className={style.blockWrapper}>
            <h1>Список сотрудников</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>имя</th>
                        <th>фамиля</th>
                        <th>e-mail</th>
                        <th></th>
                        <th></th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                    {officerItem}
                </tbody>
            </table>
        </div>
    )
}
export default Officers