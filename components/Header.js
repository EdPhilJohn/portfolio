import Link from 'next/link'
import {Nav,Navbar} from 'react-bootstrap'
import 'bootswatch/dist/lux/bootstrap.min.css';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Amal Edward</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="mr-auto">
                        <Nav.Link href="/technicalskills">Technical Skills</Nav.Link>       
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div> 
        )
}
export default Header
