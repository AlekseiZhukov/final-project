import React from 'react'


const ResolutionTableCellTheftReportItem = (props) => {
    debugger
    const handleSubmit = () => {

    }
    const handleChange = (event) => {
        let resolution = event.target.value;
        let id = props._id;
        props.setTheftReportResolution(resolution, id)
    }

    return (
        <form onSubmit={handleSubmit}>

                <textarea value={props.resolution} onChange={handleChange} />

            <input type="submit" value="Отправить" />
        </form>

    )
}
export default ResolutionTableCellTheftReportItem