import React, { useContext } from 'react'
import initContext from "../context/notes/initContext";
import NotesItem from "./NoteItem";

function Notes() {
    // eslint-disable-next-line
    const { notes } = useContext(initContext);

    return (
        <div className="row my-5">
            {notes.map((note) => { return <NotesItem key={note.title} className="card-title" note={note} /> })}
        </div>
    )
}

export default Notes