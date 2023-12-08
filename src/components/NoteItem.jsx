import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-lg-4 ">
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{note.name}</h5>
                    <p className="card-text">{note.description}.</p>
                </div>
            </div>
        </div >

    )
}

export default NoteItem