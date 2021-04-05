import './Article.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector, connect } from 'react-redux'


function Article(){
    const article = useSelector(state => state.article)
        return(
            <Container fluid>
                <Row >
                    <Col xs="12" className="text-primary">
                        <Card className="card" className="md-12 text-light" id="specialCard">    
                            <Card.Header>{article.title}</Card.Header>
                                <Card.Body className="sm-1 ml-5">
                                    <Card.Title className="mb-4">{article.description}</Card.Title>
                                    <Card.Subtitle className="mb-3">Source: {article.source.name}</Card.Subtitle>
                                    <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                                    <Card.Text className="mt-2">
                                        {article.content}
                                    </Card.Text>
                                    <Card.Footer >Author: {article.author}</Card.Footer>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
}

export default Article