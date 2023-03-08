import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";
const Sidebar = ({
    sideBar,
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    if (!sideBar) return null;
    return (
      <Col sm={4}>
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <Link to="/view">
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
              to="/view"
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <div className="row">
                  <div><button className="btn btn-danger" onClick={(e) => {if(window.confirm('Delete the item?')) {onDeleteNote(id)}}}>Delete</button></div>
                  <Link to="/"><button className="btn btn-success" onClick={(e) => {setActiveNote(id)}}>Edit</button></Link>
                </div>
              </div>
  
              <p>{(body && body.substr(0, 100) + "...").replace(/<[^>]+>/g, '')}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-MD", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </small>
            </div>
            </Link>
          ))}
        </div>
      </div>
      </Col>
    );
  };
  
  export default Sidebar;