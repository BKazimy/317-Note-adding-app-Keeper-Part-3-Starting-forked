import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function addNote(note) {
    setNotes((prev) => {
      // use [] for combining as list items and {} as dict items
      return [note, ...prev];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          clicked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
