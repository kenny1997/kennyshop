import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Link to='/'>

                        <Navbar.Brand >KennyShop</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to='/cart'>
                                <Button variant="primary"><i className='fas fa-shopping-cart'></i>cart</Button>

                            </Link>
                            <Link to='/login'>
                                <Button variant="primary"><i className='fas fa-user'></i>Sign in</Button>

                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
