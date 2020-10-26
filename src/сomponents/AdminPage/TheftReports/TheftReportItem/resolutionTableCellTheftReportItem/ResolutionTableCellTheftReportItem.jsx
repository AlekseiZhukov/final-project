import React from 'react'


const ResolutionTableCellTheftReportItem = (props) => {

    const handleSubmit = () => {
        let reportId = props._id
        props.setChangStatusReportTrue(reportId)
        props.setWriteFinalCommentTheftReportFalse(reportId)
    }
    const onBlurTextarea = () => {
        let reportId = props._id
        props.setWriteFinalCommentTheftReportFalse(reportId)
}
    const handleChange = (event) => {
        let resolution = event.target.value;
        let id = props._id;
        props.setTheftReportResolution(resolution, id)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Заполните коментарий:
                <textarea value={props.resolution} onChange={handleChange} onBlur={onBlurTextarea}/>
            </label>
            <input type="submit" value="Отправить" />
        </form>
)
}
export default ResolutionTableCellTheftReportItem