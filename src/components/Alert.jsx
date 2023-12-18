import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const AlertCustom = (props) => {
    return (
        <div className='container' style={{ height: '5vh' }}>
            {props.alert && <Alert severity={props.alert.type}>
                <AlertTitle>{props.alert.msg}</AlertTitle>
                <strong>{props.alert.strong}</strong>
            </Alert>}
        </div>
    )
}

export default AlertCustom