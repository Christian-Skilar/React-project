import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../context/AuthContext";
import logo from "../../img/logo.png";

function Navigation() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link className="logo" to="/"><img src={logo} alt="logo"></img></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <nav className="stroke">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                        {auth ? (
                                <>
                                    <li href="/admin">Admin</li> <button className="login-btn" onClick={logout}>Log out</button>
                                </>
                            ) : (
                                <li><a href="/login">Login</a></li>
                            )}
                    </ul>
                </nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
	);
}

export default Navigation;

