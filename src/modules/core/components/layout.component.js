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
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <div className='col-lg-2 ms-auto'>
                <button className='btn btn-danger' onClick={logout}>logout</button>
            </div>
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
