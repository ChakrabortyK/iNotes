import { useContext } from 'react';
import React from 'react'
import initContext from '../context/notes/initContext';

const NoteItem = (props) => {
    const { note, updateNote } = props;
    const { deleteNote } = useContext(initContext)
    return (
        <div className="col-lg-4 ">
            <div className="card my-2">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-circle-minus mx-2" onClick={() => { deleteNote(note._id); props.showAlert("error", note.title, "Deleted!") }}></i>
                        <i className="fa-solid fa-file-pen " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { updateNote(note) }}></i>
                    </div>
                    <p className="card-text">{note.description}.</p>
                </div>
            </div>
        </div >

    )
}

export default NoteItem