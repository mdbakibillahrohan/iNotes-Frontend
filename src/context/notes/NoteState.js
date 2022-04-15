import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "6256693b5b7841f9a9bbbb02",
            "user": "6252c1e3f96252a1e448c96e",
            "title": "demo title1",
            "tag": "personal",
            "timestamp": "2022-04-13T06:10:03.414Z",
            "__v": 0
        },
        {
            "_id": "6256695a5d99b6101c284446",
            "user": "6252c1e3f96252a1e448c96e",
            "title": "demo title1",
            "tag": "personal",
            "timestamp": "2022-04-13T06:10:34.613Z",
            "__v": 0
        },
        {
            "_id": "6256698d680c509e7985c901",
            "user": "6252c1e3f96252a1e448c96e",
            "title": "demo title1",
            "desc": "demo description1",
            "tag": "personal",
            "timestamp": "2022-04-13T06:11:25.071Z",
            "__v": 0
        },
        {
            "_id": "6256a1965039f95897d76153",
            "user": "6252c1e3f96252a1e448c96e",
            "title": "demo title1",
            "description": "demo description1",
            "tag": "personal",
            "timestamp": "2022-04-13T10:10:30.384Z",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(initialNotes)


    return (
        <noteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState;