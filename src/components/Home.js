import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

export default function Home() {
    const context = useContext(noteContext);
    return (
        <div className='container'>
            <h1 className='mt-5'>Add your notes</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Note Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" rows={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Add Your Note</button>
            </form>
            <h1 className='mt-5'>You can read your notes</h1>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Tag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {context.notes.map((note) => {

                            return (
                                <tr>
                                    <th scope="row">{ }</th>
                                    <td>{note.title}</td>
                                    <td>{note.description}</td>
                                    <td>{note.tag}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
