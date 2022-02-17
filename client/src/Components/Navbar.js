import { Link } from "react-router-dom";
import axios from 'axios'
const Navbar = ({ admin, setAdmin }) => {

  const handleSignOut = () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

    axios.get('/admin/logout')
      .then(res => {
        setAdmin(null)
        console.log(res)
      })
      .catch(err => console.log(err.message))
  }
  return (
    <div className="sticky" >
      <nav className="navbar navbar-expand-lg navbar-dark " style={{ padding: "5px" }} >
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>Code Easy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{ color: "white" }}><i className="fa fa-fw fa-ninja"></i> Home</Link>

              </li>
              {/* <li className="nav-item">

                <Link className="nav-link" to="/" style={{ color: "white" }}><i className="fa fa-fw fa-envelope"></i> Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false" style={{ color: "white" }}>
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">Laptops</Link></li>
                  <li><Link className="dropdown-item" to="/">Mobiles</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><Link className="dropdown-item" to="/">Aur nhi hmre pass!</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" style={{ color: "white" }}>Search</button>
            </form> */}
            <div>

              <div>
                {!admin && <Link to="/admin">
                  <button className="btn btn-outline-success">
                    Admin
                  </button>
                </Link>}
                {admin && <Link to="/">
                  <button className="btn btn-outline-danger" onClick={() => handleSignOut()}>
                    Sign Out
                  </button>
                </Link>}
              </div>

              {/* {!props.profile && <Link to="/User">
                <button className="btn btn-outline-success" id="show-login" type="submit" style={{ color: "white", borderRadius: "10px", margin: "0px" }}>Sign In</button>
              </Link>}
              {props.profile && (<Link >
                <Dropdown align="end">
                  <Dropdown.Toggle variant="success" id="dropdown-basic"><i className="fa fa-fw fa-user"></i></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item ><Link  to="/Profile" style={{textDecoration:"none"}}>Profile</Link></Dropdown.Item>
                    <Dropdown.Item onClick={() => props.setProfile(false)}><Link to="/" style={{textDecoration:"none"}}>Log out</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>)} */}
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;