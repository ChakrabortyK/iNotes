import React from 'react'
import { useState } from 'react'
import initContext from './initContext'

const TestState = (props) => {
    // eslint-disable-next-line
    let notesArr = [
        {
            "_id": "1",
            "title": "Updated_TestNote_V52",
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
            "_id": "2",
            "title": "V54_Test4_Note1",
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
    ]
    const [notes, setNotes] = useState(notesArr)

    //ADD A NOTE
    const addNote = (note) => {

        let newNote = {
            "_id": "3",
            "title": note.title,
            "description": note.description,
            "user": {
                "$oid": "656b7dc545afc19614050fcb"
            },
            "createdAt": {
                "$date": "2023-12-04T19:57:03.606Z"
            },
            "__v": 0,
            "tag": note.tag
        };

        setNotes(notes.concat(newNote));
    }
    //EDIT A NOTE
    const editNote = (id, title, description, tag) => {

    }
    //DLETE A NOTE
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note._id !== id)
        setNotes(newNotes)
    }

    return (
        <initContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
            {props.children}
        </initContext.Provider>
    )
}

export default TestState