import {
     LoadMore, 
     readMore, 
     LoadEm, 
     SetLoading, 
     UnsetLoading,
     SearchEngine,
    }from './actions/reduxActions'
import { compose } from 'redux'
//import { createStore, applyMiddleware } from 'redux'
//import  thunkMiddleware  from 'redux-thunk'
const redux = require('redux')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

//definition of inital state
const initialState = {
    loading: false,
    articles:[],
    article:[],
    filteredArticles:[],
    usersFilterSpec:""
}

//Reducers
export const reducer = (state = initialState, action) =>{
    console.log(action.type)
    switch(action.type){
        case 'FETCH_ARTICLES_SUCCESS':
            return [ ...action.payload]
            ;
        case 'LOAD_THE_DATA':
            return state={
                ...state,
                articles: [...action.payload]
            }
            ;
        case 'SET_LOADING':
            let clone = Object.assign({}, state, {
                loading : true
            }) 
            return clone
            ;
        case 'UNSET_LOADING':
            let clone2 = Object.assign({}, state, {
                loading : false
            })
            return clone2
            ;
        case 'READ_MORE':
            let clone3 = Object.assign({}, state, {
                filteredArticles: action.payload
            })
            return clone3
            ;
        case 'LOAD_MORE':
            //Load more articles and push them inside existing array of articles
            return state.article
            ;
        case 'SEARCH':
            return state.filteredArticles = {
                ...state,
                filteredArticles: [...action.payload] 
            }
            ;
        case 'SORT_BY':
            return state.filteredArticles = {
                ...state,
                filteredArticles: [...action.payload]
            }
            ;
        case 'CLEAR_SEARCH_RESULTS':
            return state.filteredArticles = {
                ...state,
                filteredArticles: []
            }
            ;
        case 'SORT_BY_DATE':
            const newOrder = state.filteredArticles.sort((a, b)=>{
               return Date.parse(a.publishedAt.split("T")[0]) < Date.parse(b.publishedAt.split("T")[0])
            })
             
            return state.filteredArticles = {
                ...state,
                filteredArticles: [...newOrder]
            }
            ;
        case 'SORT_BY_RELEVANCE':
            console.log("SORT BY RELEVANCE WAS CALLED")
            return state.filteredArticles ={

            }
            ;
        case 'SORT_BY_POPULARITY':
            return state.filteredArticles = {

            }
            ;
        case 'GET_USERS_SORT_SPEC':
            let clone4 = Object.assign({}, state, {
                usersFilterSpec: action.payload
            })
            return clone4
            ;
        default:
            return state     
    }
} 
//function with responsibility of fetching initial articles 
export const fetchArticles = () => (dispatch, getState) => {
    dispatch(SetLoading())
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=31e11c95598d4760bc5c73fb2b0417f2")
    .then(res => {
        const data = res.json()
        return data
    })
    .then(data => {
        //console.log(data.articles[0])
        dispatch(LoadEm(data.articles))
        dispatch(UnsetLoading())
    })
    .catch(err => {
        dispatch(UnsetLoading())
        console.log(err)
    })
}



/* export const ReadMoreFunction = (article) =>(dispatch, getState)=> {
    console.log("POZIV IZ INDEXA")
    //problem u pozivu funkcije ispod (problem u dispatch metodi)
    dispatch(readMore(article))
     dispatch(readMore({
        author: "TMZ Staff",
        content: "Michael Strahan may have been joking about \"fixing\" his iconic gap tooth, but now lots of folks who actually want the real procedure are flocking to Strahan's doc.\r\nDr. Lee Gause, Strahan's dentist, … [+849 chars]",
        description: "Michael Strahan's April Fools' joke has triggered a business boom for the dentist who 'fixed' his iconic tooth gap.",
        publishedAt: "2021-04-03T07:50:00Z",
        source:  { id: null, name: "TMZ" },
        title: "Michael Strahan's Driving Huge Business to Dentist Who 'Fixed' Gap Tooth - TMZ",
        url: "https://www.tmz.com/2021/04/03/michael-strahan-gap-teeth-april-fools-joke-business-booming/",
        urlToImage: "https://imagez.tmz.com/image/63/16by9/2021/04/02/636a70bd3cc04a7b889214cafc577fc9_xl.jpg"
    })) 
}   */
/* 
export const searchEngine = (input) => (dispatch, getState) => {
    console.log("poziv search funkcije")
    dispatch(SearchEngine(input))
}
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

store.dispatch(fetchArticles())

//store.subscribe(()=>{ console.log(store.getState()) })
