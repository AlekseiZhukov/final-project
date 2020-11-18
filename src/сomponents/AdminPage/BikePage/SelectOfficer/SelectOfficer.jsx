import React from 'react'
import pen from '../../../../assets/images/pen.svg'
import style from '../BikePage.module.css'
const SelectOfficer = (props) => {

    const onClickShowListOfficers = () => {
        props.setShowListOfficers()

    }

    const onClickListItem = (event) => {
        const officerId = event.target.id
        props.setOfficerId(officerId)
        //console.log(event.target.id)
        props.setShowListOfficers()
    }

    const officerFullName = props.array.map(officer => {
        if (officer._id === props.officerId) {
            return `${officer.firstName} ${officer.lastName}`
        }
        return 'сотрудник не назначен'
    })

    const optionItem =props.array.map(officer => {
        return <li key = {officer._id } id={officer._id} onClick={onClickListItem}> {`${officer.firstName} ${officer.lastName}`}</li>
    })


    return (
        <>
            <div>{officerFullName}</div>
            <div className={style.penWrapper} onClick={onClickShowListOfficers}><img className={style.pen} src={pen} alt={'изменит'} /></div>
            {props.showListOfficers ?
                <ul className={style.listOfficers}>
                    {optionItem}
                </ul>
                : null }

        </>
    )
}

export default SelectOfficer