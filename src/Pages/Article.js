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
                        <Card className="card" border="secondary" className="md-12 text-light" id="specialCard">    
                            <Card.Header>{article.title}</Card.Header>
                                <Card.Body className="sm-1 ml-5">
                                    <Card.Title>Top News!</Card.Title>
                                    <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                               
                                    <Card.Text>
                                        {article.content}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
}

export default Article