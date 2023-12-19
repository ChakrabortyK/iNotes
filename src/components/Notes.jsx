import React, { useContext, useEffect, useState } from 'react'
import initContext from "../context/notes/initContext";
import NotesItem from "./NoteItem";
import { useNavigate } from 'react-router-dom'



// import EditNote from './EditNote';

function Notes(props) {
    // eslint-disable-next-line
    const { notes, getAllNotes, editNote } = useContext(initContext);
    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    let navigate = useNavigate();


    useEffect(() => {
        let token = localStorage.getItem("token");
        // console.log(token)
        if (!token || token === "undefined") {
            // console.log({ token: localStorage.getItem('token') })
            navigate('/login');
            props.showAlert("error", "You are not logged in", "Please login to continue")
        } else {
            getAllNotes();
            // console.log({ token: localStorage.getItem('token') })
        }
        // eslint-disable-next-line
    }, []);

    const handleClick = () => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        props.showAlert("info", note.etitle, " is Updated")
    }
    const updateNote = (currentNote) => {
        setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })

    }
    const onChange = (event) => {
        setnote({ ...note, [event.target.name]: event.target.value })
    }



    return (<>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Note Title</label>
                                <input type="text" value={note.etitle} className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} />
                                <div id="emailHelp" className="form-text">We'll never share your Notes with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description/Text</label>
                                <textarea className="form-control" value={note.edescription} id="edescription" name="edescription" rows="3" onChange={onChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" value={note.etag} className="form-control" id="etag" name="etag" aria-describedby="emailHelp" onChange={onChange} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={handleClick} disabled={note.etitle.length < 5 || note.edescription.length < 5} data-bs-dismiss='modal' className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>


        <div className="row my-5">
            <h2>Your Notes</h2>
            {localStorage.getItem("token") ? (
                <div className="container mx-2">
                    {Array.isArray(notes) && notes.length === 0 && "No Notes to display LOL..."}
                </div>
            ) : (
                <p className="container mx-2">Login to see your notes.</p>
            )}
            {Array.isArray(notes) && notes.map((note) => { return <NotesItem key={note._id} className="card-title" updateNote={updateNote} showAlert={props.showAlert} note={note} /> })}
        </div>
    </>
    )
}

export default Notes