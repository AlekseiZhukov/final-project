import React from 'react';
import style from './AdminPage.module.css'
import TheftReportsContainer from "./TheftReports/TheftReportsContainer";
import OfficersContainer from "./Officers/OfficersContainer";



const AdminPage = (props) => {

    const showOfficers = () => {
        props.setShowOfficers(true)
        props.setShowTheftReports(false)
    }
    const showTheftReports = () => {
        props.setShowOfficers(false)
        props.setShowTheftReports(true)
    }

    return (

        <div className={style.mainBlock}>
            <div className={style.navLinkBlock}><span onClick={showTheftReports}>Сообщения о кражах</span><span onClick={showOfficers}>Список сотрудников</span></div>

            {props.showTheftReports ? <TheftReportsContainer updateCases={props.updateCases}/> : null}
            {props.showOfficers ? <OfficersContainer /> : null}
        </div>
    )
}
export default AdminPage