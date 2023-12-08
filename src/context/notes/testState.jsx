import React from 'react'
import { useState } from 'react'
import initContext from './initContext'

const TestState = (props) => {
    // eslint-disable-next-line
    const [notes, setNotes] = useState([
        {
            "_id": {
                "$oid": "656de3ebe0f9462df1b8f682"
            },
            "name": "Updated_TestNote_V52",
            "description": "This is the updated description",
            "user": {
                "$oid": "656b7eb1d365b9f8aad956ff"
            },
            "createdAt": {
                "$date": "2023-12-04T14:36:27.907Z"
            },
            "__v": 0,
            "tag": "This is updated"
        },
        {
            "_id": {
                "$oid": "656e2f0f9aebaa0d6c910dd8"
            },
            "name": "V54_Test4_Note1",
            "description": "Testing if opt auth works",
            "user": {
                "$oid": "656b7dc545afc19614050fcb"
            },
            "createdAt": {
                "$date": "2023-12-04T19:57:03.606Z"
            },
            "__v": 0,
            "tag": "This is updated"
        }
    ])

    return (
        <initContext.Provider value={{ notes }}>
            {props.children}
        </initContext.Provider>
    )
}

export default TestState