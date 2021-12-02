import logo from './logo.svg';
import './App.css';
import Dashboard from "./Components/Dashboard/dashboard"
import  Score from "./Components/Score/score"
import { Routes ,Route,useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar  bg="dark"  variant="secondary" expand="lg">
        <Container>
          <Navbar.Brand   href="#home">CRICKET</Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate("/") }}>SCORE</Nav.Link>
              <Nav.Link  onClick={() => { navigate("/admin") }}>Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>




       <Routes>
      <Route path='/' element={<Score/>} />
      <Route path='/admin' element={<Dashboard/>} />
      </Routes> 




    </div>
  );
}

export default App;
