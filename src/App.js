import './App.css';
import Homepage from './Pages/Homepage'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Article from './Pages/Article';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  {  fetchArticlesSuccess, LoadEm }  from './redux/actions/fetchArticles'
import {fetchArticles } from './redux/index'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  
  const onLoad = ()=>{
    return dispatch(fetchArticles())
  }
  return (
      <div className="App">
        <Navbar collapseOnSelect bg="dark" expand="lg" className="text-white">
          <Router>
            <Nav.Link eventKey="1" href="/">
          <Navbar.Brand className="text-light" >News Portal</Navbar.Brand>
          </Nav.Link>
          </Router>
        <Navbar.Toggle className="ml-auto md-hidden" id="toggler"/>
        <Navbar.Collapse >
          <Nav className="ml-auto d-block">
            <Container>
            <Row className="mx-sm-auto">

            <Form inline className="md-12 mt-xs-4 ml-sm-5">
              <Col xs={8} className="mt-sm-4 mb-sm-4 ">
            <FormControl type="text" placeholder="Search" className="ml-auto" action="#"/>
            </Col>
            <Col>
            <Button variant="outline-light" className="mx-auto" onClick={onLoad}>Search</Button>
            </Col>
          </Form>

          </Row>
          </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Router>
        <header className="App-header">
          <Route path="/" exact component={Homepage}/>
          <Route path="/article" component={Article}/>
        </header>
        </Router>
      </div>
  );
}

export default App;
