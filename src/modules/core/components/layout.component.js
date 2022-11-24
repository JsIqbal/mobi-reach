import { useNavigate } from 'react-router-dom';

import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';

import Footer from '../common/footer.component';

function Layout (props) {
    let navigate = useNavigate();
    const logout = () => {
        console.log(localStorage)
        localStorage.clear();
        navigate('/login');
    };
    return (
        <div className="Layout">
            <div>
                {props.children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
