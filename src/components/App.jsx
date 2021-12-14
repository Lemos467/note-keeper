import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){
    const [notesArray,setNote] = useState([]);

    function addNote(note){
        setNote( prev => [...prev,note]);
    }

    function deleteNote(id){
        
        setNote(notesArray.filter(
            (prev,index) => {
                return index != id;
            }
        ));
    }

    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {notesArray.map((note, idx) => (
                <Note 
                    key={idx}
                    id={idx}
                    title={note.title}
                    content={note.content}
                    addNote={addNote}
                    onDelete={deleteNote}
                />
            ))}
            
            <Footer />
        </div>
        );
};

export default App;
