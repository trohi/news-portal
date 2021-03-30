import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Article.css'

function Article(){
        return(
            <Container fluid>
                <h1>This is article page...</h1>
                <Row >
                    <Col xs="12" className="text-primary">
                        <Card className="card" border="secondary" class="md-12">   
                            <Card.Header>TITLEEEEEE</Card.Header>
                                <Card.Body className="sm-1 ml-5">
                                    <Card.Title>Top News!</Card.Title>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw21gs2cwA8hkegKzuPUG3R6kaYkSwUzIiMIQovv_0CjSRDsd_W15O8DSlvr7RXsPao0&usqp=CAU"></Card.Img>
                               
                                    <Card.Text>
                                        Veniam adipisicing ut non officia sint qui ea aliquip ex.
                                    </Card.Text>
                                    <Button variant="primary">Click me</Button>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
}

export default Article