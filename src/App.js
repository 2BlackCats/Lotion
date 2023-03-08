import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./component/Main";
import View from "./component/View";
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/view" element={<View />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
