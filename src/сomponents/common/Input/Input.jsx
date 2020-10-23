import React from 'react';

const Input = (props) => {

    return(
        <input type={props.type} value={props.value} onChange={props.onChange} className={props.className ? props.className : 'simpleInput'}/>
    )
}

export default Input