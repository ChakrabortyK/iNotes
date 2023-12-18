import React from 'react'
import { useState } from 'react'
import initContext from './initContext'

const TestState = (props) => {
    const host = "http://localhost:5000"
    const [notes, setNotes] = useState([])

    //ADD A NOTE
    const addNote = async (note) => {
        const response = await fetch(`${host}/api/notes/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmI3ZGM1NDVhZmMxOTYxNDA1MGZjYiIsImlhdCI6MTcwMTcxOTYyOH0.IREKF9PoMHcCyoVQyKpLtQC7xPZ692fE-Obahc3XMAk"
            },
            body: JSON.stringify({ title: note.title, description: note.description, tag: note.tag }),
        });
        const jsonData = await response.json();
        // console.log(jsonData)
        let updatedNotes = JSON.parse(JSON.stringify(notes))
        updatedNotes.push(jsonData.notes)
        setNotes(updatedNotes)
        // console.log(notes)
    }

    //EDIT A NOTE
    const editNote = async (id, title, description, tag) => {

        await fetch(`${host}/api/notes/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmI3ZGM1NDVhZmMxOTYxNDA1MGZjYiIsImlhdCI6MTcwMTcxOTYyOH0.IREKF9PoMHcCyoVQyKpLtQC7xPZ692fE-Obahc3XMAk"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        // getAllNotes(); //but does more api calls per edit


        let updatedNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < updatedNotes.length; index++) {
            const element = updatedNotes[index];
            if (element._id === id) {
                updatedNotes[index].title = title;
                updatedNotes[index].description = description;
                updatedNotes[index].tag = tag;
                break;
            }
        }
        setNotes(updatedNotes)
    }

    //DLETE A NOTE
    const deleteNote = async (id) => {

        await fetch(`${host}/api/notes/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmI3ZGM1NDVhZmMxOTYxNDA1MGZjYiIsImlhdCI6MTcwMTcxOTYyOH0.IREKF9PoMHcCyoVQyKpLtQC7xPZ692fE-Obahc3XMAk"
            },
        });

        const newNotes = notes.filter((note) => note._id !== id)
        setNotes(newNotes)
    }

    //GET ALL NOTES
    const getAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/allnotesjwt`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmI3ZGM1NDVhZmMxOTYxNDA1MGZjYiIsImlhdCI6MTcwMTcxOTYyOH0.IREKF9PoMHcCyoVQyKpLtQC7xPZ692fE-Obahc3XMAk"
            }
        });

        const jsonData = await response.json();
        // console.log(jsonData)
        setNotes(jsonData.notes)

    }


    return (
        <initContext.Provider value={{ notes, addNote, editNote, deleteNote, getAllNotes }}>
            {props.children}
        </initContext.Provider>
    )
}

export default TestState