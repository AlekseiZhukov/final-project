import React from 'react'
import style from "./resolutionTableCellTheftReportItem.module.css";


const ResolutionTableCellTheftReportItem = (props) => {

    const handleSubmit = (event) => {
        let reportId = props.reportId
        props.setWriteFinalCommentTheftReport(reportId)
        console.log("кнопка коментария нажата")
        event.preventDefault();
    }

    const handleChange = (event) => {
        let resolution = event.target.value;
        let id = props.reportId;
        props.setTheftReportResolution(resolution, id)
    }

    return (
        <div className={style.theftReportBlock}>
            <div className={style.theftReportBlockWrapper}>
                <h3>Заполните завершающий комментарий:</h3>
                <form onSubmit={handleSubmit} className={style.form}>
                        <textarea
                            placeholder={'напишите свой комментарий к делу'}
                            className={style.textarea}
                            value={props.resolution}
                            onChange={handleChange}
                        />
                    <input className={props.resolution ? style.button : style.buttonOff} type="submit" value="Отправить" disabled={!props.resolution}/>
                </form>
            </div>
        </div>
)
}
export default ResolutionTableCellTheftReportItem