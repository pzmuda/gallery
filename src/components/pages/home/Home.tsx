import { Card, Col, Container, Image, Row } from "react-bootstrap";

const Home = () => {
  return (
    <main>
      <Container>
        <Row className='px-4 my-5'>
          <Col sm={7}>
            <Image
              src='http://1.bp.blogspot.com/-O5dxPSw-z5I/T56EjjoMYnI/AAAAAAAAHr0/XNInjmUb1L4/s1600/100_118JPG'
              fluid
              rounded
            />
          </Col>
          <Col sm={5}>
            <h1 className='font-weight-light py-1'>Gallery</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
        <Row>
          <Card className='text-center bg-secondary text-white'>
            <Card.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              incidunt impedit esse, maiores accusantium facere.
            </Card.Body>
          </Card>
        </Row>
        <Row className='px-4 my-5'>

        </Row>
      </Container>
    </main>
  );
}

export default Home;