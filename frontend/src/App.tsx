import { Col, Container, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <NavbarBrand>Smart Shop</NavbarBrand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer className="text-center">
        <div>All right reserved</div>
      </footer>
    </div>
  )
}

export default App
