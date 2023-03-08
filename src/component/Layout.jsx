import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import uuid from "react-uuid"
import Sidebar from "./Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Layout() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const [sideBar, setSideBar]=useState(true);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

    return (
      <div>
        <Header sideBar={sideBar} setSideBar={setSideBar} />
          <Row>
              <Sidebar 
              sideBar={sideBar}
              notes={notes} 
              onAddNote={onAddNote} 
              onDeleteNote={onDeleteNote} 
              setActiveNote={setActiveNote} 
              activeNote={activeNote}/>
            <Col>
              <Outlet context={[getActiveNote(), onUpdateNote]}/>
            </Col>
          </Row>
      </div>
    );
}

export default Layout;
