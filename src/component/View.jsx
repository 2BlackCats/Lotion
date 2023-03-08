import { useOutletContext } from "react-router-dom";
import ReactQuill from "react-quill";
function View() {
    const [activeNote] = useOutletContext();
    if (!activeNote) return <div className="no-active-note">No Active Note</div>;
    return (<>
        <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactQuill theme="bubble" value={activeNote.body} readOnly="true" placeholder="Nothing here..."/>
        </div>
        <link
        rel="stylesheet"
        href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
      />
      <script
        src="https://unpkg.com/react@16/umd/react.development.js"
        crossorigin
      ></script>
      <script
        src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
        crossorigin
      ></script>
      <script src="https://unpkg.com/react-quill@1.3.3/dist/react-quill.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      <script type="text/babel" src="/my-scripts.js"></script>
      </>
    );
}

export default View;