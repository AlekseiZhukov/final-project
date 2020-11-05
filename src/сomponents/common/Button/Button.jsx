import React from 'react';

const Button = (props) => {

    return(
        <button  onClick={props.onClick} disabled={props.disabled && true} className={props.className}>
            {props.value}
        </button>
    )
}

export default Button