import Nav from "react-bootstrap/Nav";

const Header = ({sideBar, setSideBar})=> {

    return (
        <div className="container-fluid">
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="d-flex justify-content-start">
              <button onClick={()=>setSideBar(!sideBar)} style={{ alignItems: "left" }} className="btn btn-outline-primary">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div>
              <div className="boldTop">
                <h1>Lotion</h1>
              </div>
              <div style={{ color: "grey" }}>Like notion, but worse.</div>
            </div>
            <div>
          </div>
        </Nav>
      </div>
    );
}

export default Header;