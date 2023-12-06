import React from 'react'
import { useState } from 'react'
import initContext from './initContext'

const TestState = (props) => {
    const [first, setFirst] = useState({ key: 1, value: 'HighValue' })
    const update = () => {
        setTimeout(() => {
            setFirst({ key: 2, value: 'LowValue' })
        }, 3000);
    }
    return (
        <initContext.Provider value={{ first, update }}>
            {props.children}
        </initContext.Provider>
    )
}

export default TestState