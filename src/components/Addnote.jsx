import React, { useContext, useState } from 'react'
import initContext from '../context/notes/initContext'


const Addnote = (props) => {
    const context = useContext(initContext)
    const { addNote } = context
    const [note, setnote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (event) => {
        event.preventDefault();
        addNote(note)
        props.showAlert("success", note.title, " Added!")
        setnote({ title: "", description: "", tag: "" })
    }
    const onChange = (event) => {
        setnote({ ...note, [event.target.name]: event.target.value })
    }

    return (
        <div className="container my-3">
            <h2>Add A NOTE</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Note Title</label>
                    <input type="text" value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your Notes with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description/Text</label>
                    <textarea className="form-control" value={note.description} id="description" name="description" rows="3" onChange={onChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" value={note.tag} className="form-control" id="tag" name="tag" aria-describedby="emailHelp" onChange={onChange} />
                </div>


                <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.length < 5 || note.description.length < 5}>Add Note</button>
            </form>

        </div>

    )
}

export default Addnote