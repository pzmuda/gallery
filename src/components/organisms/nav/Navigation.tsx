import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand className={styles.title}>Gallery Image</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#features'>
              <NavLink className={styles.link} to='/'>
                HOME
              </NavLink>
            </Nav.Link>
            <Nav.Link href='#pricing'>
              <NavLink className={styles.link} to='/gallery'>
                GALLERY
              </NavLink>
            </Nav.Link>
            <Nav.Link href='#pricing'>
              <NavLink className={styles.link} to='/favorite'>
                FAVORITE
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
