import './Homepage.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Badge from 'react-bootstrap/Badge'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { readMore, ClearSearchResults, SearchEngine, SortBy} from '../redux/actions/reduxActions'

function Homepage(){ 
    //getters for state's data
    const articles  = useSelector(state => state.articles)
    const isLoading = useSelector(state => state.loading)
    const filteredArticles = useSelector(state => state.filteredArticles)
    const getUsersSearchValue = useSelector(state => state.usersFilterSpec)
     
    const dispatch = useDispatch()
    //sorting filtered articles based on users value entered in search form
    const sort_by = (payload) => {
        const url =`https://newsapi.org/v2/everything?q=${getUsersSearchValue}&sortBy=${payload}&apiKey=31e11c95598d4760bc5c73fb2b0417f2`
        fetch(url)
        .then(res =>{
            const data = res.json()
            return data
        })
        .then(data=>{
            dispatch(SortBy(data.articles))
        })
    }
    const Loading = () => {
        return <Col xs={12} md={9} className="text-primary" id="spinner-col" width="100%" height="100%">
                <Spinner animation="grow" variant="danger"></Spinner>
                </Col>
    }
    //Component with functionality of determining what chunk of code
    //will be rendered based on user's action
    const ComponentRender = () =>{
        if(filteredArticles.length < 1){
            return filteredArticles.length < 1 ?
                articles.map(function(article, index){
                return <Col xs={12} md={9} className="text-primary" key={index}>
                        <Card className="card md-12" border="secondary" >
                            <Card.Header>{article.title}</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                                <Card.Text className="mt-3 mb-3 px-2">
                                    {article.description}
                                </Card.Text>
                             <Router>
                             <a href="/article" ><Button variant="outline-dark" block onClick={()=> dispatch(readMore(article))}>Read full article</Button></a>
                             </Router>
                            </Card.Body>
                        </Card>
                    </Col>   
                    }) : <div></div>
                } else if(filteredArticles.length > 1) {
                return !isLoading && filteredArticles.length > 1  ? filteredArticles.map(function(article, index){
                return <Col xs={12} md={9} className="text-primary" key={index}>
                        <Card className="card md-12" border="secondary" >
                            <Card.Header>{article.title}</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                                {article.publishedAt.split("T")[0]}
                                <Card.Text className="mt-3 mb-3 px-2">
                                    {article.description}
                                </Card.Text>
                             <Router>
                             <a href="/article" ><Button variant="outline-dark" block onClick={()=> dispatch(readMore(article))}>Read full article</Button></a>
                             </Router>
                            </Card.Body>
                        </Card>
                      </Col>
                    }) : <Loading></Loading>  
        }
    }


   return(     
        <Container fluid>
            <Row>
                {
                   filteredArticles.length > 1 ?
                   <Col xs={12} id="actionCol"> <Badge variant="dark" className="mr-auto pt-2" onClick={()=> dispatch(ClearSearchResults())}>Back to Home </Badge> 
                   <Dropdown id="dropdown">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Sort by 
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>sort_by("publishedAt")}>Publish date</Dropdown.Item>
                            <hr/>
                            <Dropdown.Item onClick={()=>sort_by("relevancy")}>Relevance </Dropdown.Item>
                            <hr/>
                            <Dropdown.Item onClick={()=>sort_by("popularity")}>Popularity</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                   </Col>: false
                }  
                <Col xs={12} md={9} className="text-primary">
                        <Card className="card md-12" border="secondary" >
                            <Card.Header>The dummy title</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src="data:image/jpeg;base64,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"></Card.Img>
                                <Card.Text className="mt-3 mb-3 px-2">
                                    Pariatur in nostrud ut nostrud. Voluptate culpa et cupidatat sunt incididunt adipisicing proident laboris aliqua tempor sint sit incididunt. Reprehenderit qui magna quis minim mollit. Velit eu elit velit do labore nulla laborum dolor. Sint nisi et minim ullamco incididunt aliqua fugiat ea dolor.
                                </Card.Text>
                             <Router>
                             <a href="/article" ><Button variant="outline-dark" block >Read full article</Button></a>
                             </Router>
                            </Card.Body>
                        </Card>
                    </Col>    
                <ComponentRender></ComponentRender>
            </Row>
        </Container>
        
    )
} 
export default Homepage