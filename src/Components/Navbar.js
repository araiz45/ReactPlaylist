import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark`} style={{backgroundColor: props.color}}>
            <div className="container-fluid">
                <Link className="navbar-brand customTitle" to="/">
                    TextUtils
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" id="change-li" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="change-li-about" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-light`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" style={{cursor: "pointer"}} id="flexSwitchCheckDefault" />
                        <label style={{cursor: "pointer"}}  className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'? 'Enable':'Disable'} Dark Mode</label>
                    </div>
                    <input type="color" className="form-control mx-3" name="color" id="color" style={{width: "50px"}}/>
                </div>
            </div>
        </nav>
    );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Navbar.defaultProps = {
//     title: 'Set Title here',
//     aboutText: 'you about here'
//   };
