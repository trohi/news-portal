import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import { useSelector } from 'react-redux'
import './Homepage.css'

function Homepage(){
    const articles  = useSelector(state => state.articles)
    const isLoading = useSelector(state => state.loading) 

    const Loading = () => {
        return <Col xs={12} md={9} className="text-primary" id="spinner-col" width="100%" height="100%">
                <Spinner animation="grow" variant="danger"></Spinner>
                </Col>
    }

   return(     
        <Container fluid>
            <Row>
              {
                isLoading ? <Loading></Loading> :  articles.map(function(article, index){
                return <Col xs={12} md={9} className="text-primary" key={index}>
                        <Card className="card md-12" border="secondary" >
                                    <Card.Header>{article.title}</Card.Header>
                                  <Card.Body>
                                    <Card.Subtitle className="mb-2"> <strong>Author</strong>: {article.author}</Card.Subtitle>
                                    <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                                    <Card.Text className="mt-3 mb-3 px-2">
                                        {article.description}
                                    </Card.Text>
                                <Button variant="outline-dark" block>Read more...</Button>
                            </Card.Body>
                        </Card>
                      </Col>
                })
              }      
              {/* 
                <Col xs={12} md={9} className=" text-primary">
                    THIS IS HOMEPAGE
                    <Card className="card md-12" border="secondary" >   
                        <Card.Header>TITLEEEEEE</Card.Header>
                        <Card.Body>
                            <Card.Title>Top News!</Card.Title>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw21gs2cwA8hkegKzuPUG3R6kaYkSwUzIiMIQovv_0CjSRDsd_W15O8DSlvr7RXsPao0&usqp=CAU"></Card.Img>
                            <Card.Text>
                                Veniam adipisicing ut non officia sint qui ea aliquip ex.
                            </Card.Text>
                            <Button variant="outline-dark" block>Read more...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} >
                    <Card className="card md-12" border="secondary">   
                        <Card.Header>TITLEEEEEE</Card.Header>
                        <Card.Body >
                            <Card.Title>Top News!</Card.Title>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw21gs2cwA8hkegKzuPUG3R6kaYkSwUzIiMIQovv_0CjSRDsd_W15O8DSlvr7RXsPao0&usqp=CAU"></Card.Img>
                            <Card.Text>
                                Veniam adipisicing ut non officia sint qui ea aliquip ex.
                            </Card.Text>
                            <Button variant="outline-dark" block>Read more...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="card md-12" border="secondary">   
                        <Card.Header>TITLEEEEEE</Card.Header>
                        <Card.Body >
                            <Card.Title>Top News!</Card.Title>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw21gs2cwA8hkegKzuPUG3R6kaYkSwUzIiMIQovv_0CjSRDsd_W15O8DSlvr7RXsPao0&usqp=CAU"></Card.Img>
                            <Card.Text>
                                Veniam adipisicing ut non officia sint qui ea aliquip ex.
                            </Card.Text>
                            <Button variant="outline-dark" block>Read more...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="card md-12" border="secondary" >   
                        <Card.Header>TITLEEEEEE</Card.Header>
                        <Card.Body >
                            <Card.Title>Top News!</Card.Title>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw21gs2cwA8hkegKzuPUG3R6kaYkSwUzIiMIQovv_0CjSRDsd_W15O8DSlvr7RXsPao0&usqp=CAU"></Card.Img>
                            <Card.Text>
                                Veniam adipisicing ut non officia sint qui ea aliquip ex.
                            </Card.Text>
                            <Button variant="outline-dark" block>Read more...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="card md-12" border="secondary">   
                        <Card.Header>TITLEEEEEE</Card.Header>
                        <Card.Body >
                            <Card.Title>Top News!</Card.Title>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw21gs2cwA8hkegKzuPUG3R6kaYkSwUzIiMIQovv_0CjSRDsd_W15O8DSlvr7RXsPao0&usqp=CAU"></Card.Img>
                            <Card.Text>
                                Veniam adipisicing ut non officia sint qui ea aliquip ex.
                            </Card.Text>
                            <Button variant="outline-dark" block>Read more...</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="card md-12" border="secondary" >   
                        <Card.Header>TITLEEEEEE</Card.Header>
                        <Card.Body >
                            <Card.Title>Top News!</Card.Title>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw21gs2cwA8hkegKzuPUG3R6kaYkSwUzIiMIQovv_0CjSRDsd_W15O8DSlvr7RXsPao0&usqp=CAU"></Card.Img>
                            <Card.Text>
                                Veniam adipisicing ut non officia sint qui ea aliquip ex.
                            </Card.Text>
                            <Button variant="outline-dark" block>Read more...</Button>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>
        </Container>
        
    )
} 


export default Homepage