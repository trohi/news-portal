import './App.css';
import Homepage from './Pages/Homepage'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Article from './Pages/Article';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch } from 'react-redux'
import { SearchEngine, GetUsersSortSpec } from './redux/actions/reduxActions'

function App() {
  const dispatch = useDispatch()

  //getting user's input and using that value in request 
  //in order to get articles with matching terms
  const filter = () => {
    let value = document.getElementById("input").value
    dispatch(GetUsersSortSpec(value))
    const url = `https://newsapi.org/v2/everything?q=${value}&apiKey=31e11c95598d4760bc5c73fb2b0417f2`
    fetch(url)
    .then(res=>{
      const data = res.json()
      return data
    })
    .then(data =>{
     // dispatch(ComponentDeterminor("filtered"))
      dispatch(SearchEngine(data.articles))
    })
  }

  return (
    <Router>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" className="text-white" sticky="top">
      
            <Link to="/">
          <Navbar.Brand className="text-light" >News Portal</Navbar.Brand>
          </Link>
        
        <Navbar.Toggle className="ml-auto md-hidden" id="toggler"/>
        <Navbar.Collapse >
          <Nav className="ml-auto d-block">
            <Container>
            <Row className="mx-sm-auto">

            <Form inline className="md-12 mt-xs-4 ml-sm-5">
              <Col xs={8} className="mt-sm-4 mb-sm-4 ">
            <FormControl type="text" placeholder="Search" className="ml-auto secondary" id="input" action="#" />
            </Col>
            <Col>
            <Button variant="dark" className="mx-auto" onClick={filter}>Search</Button>
            </Col>
          </Form>

          </Row>
          </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
        <div className="App-header">
        <Switch>
        <Route path="/article">
          <Article/>
        </Route>

        <Route path="/" exact>
          <Homepage/>
        </Route>
        </Switch>
        </div>
      </div>
      </Router>
       
  );
}

export default App;
