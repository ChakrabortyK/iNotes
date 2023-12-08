import React from 'react'

function Alert(props) {
    return (
        <div style={{ height: '5vh' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>  {props.alert.strong}  </strong>{props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert