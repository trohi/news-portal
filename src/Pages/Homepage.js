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
import { Link } from 'react-router-dom'
import { readMore, ClearSearchResults, SortBy} from '../redux/actions/reduxActions'

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
        return <Col xs={12} md={9}  id="spinner-col" width="100%" height="100%">
                <Spinner animation="grow" variant="warning"></Spinner>
                </Col>
    }
    //Component with functionality of determining what chunk of code
    //will be rendered based on user's action
    const ComponentRender = () =>{
        if(filteredArticles.length < 1){
            return !isLoading ?
                articles.map(function(article, index){
                return <Col xs={12} md={9} className="text-primary" key={index}>
                        <Card className="card md-12" border="secondary" >
                            <Card.Header>{article.title}</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                                <Card.Text className="mt-3 mb-3 px-2">
                                    {article.description}
                                </Card.Text>
                             <Link to="/article">
                                <Button variant="outline-dark" block onClick={()=> dispatch(readMore(article))}>Read full article</Button>
                             </Link>
                            </Card.Body>
                        </Card>
                    </Col>   
                    }) : <Loading></Loading>  
                } else if(filteredArticles.length > 1) {
                return !isLoading && filteredArticles.length > 1  ? filteredArticles.map(function(article, index){
                return <Col xs={12} md={9} className="text-primary" key={index}>
                        <Card className="card md-12" border="secondary" >
                            <Card.Header>{article.title}</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                                Publish date: {article.publishedAt.split("T")[0]}
                                <Card.Text className="mt-3 mb-3 px-2">
                                    {article.description}
                                </Card.Text>
                             <Link to="/article">
                                <Button variant="outline-dark" block onClick={()=> dispatch(readMore(article))}>Read full article</Button>
                             </Link>
                            </Card.Body>
                        </Card>
                      </Col>
                    }) : <div></div>
        } else {
            return false
        }
    }

   return(     
        <Container fluid>
            <Row>
                {
                   filteredArticles.length > 1 ?
                   <Col xs={12} id="actionCol">
                    <Badge variant="dark" className="mr-auto " onClick={()=> dispatch(ClearSearchResults())}>Back to Home </Badge> 
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
                <ComponentRender></ComponentRender>
            </Row>
        </Container>
        
    )
} 
export default Homepage