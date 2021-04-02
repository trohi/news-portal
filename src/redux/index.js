import { fetchArticlesSuccess }from './actions/fetchArticles'
import { LoadEm } from './actions/fetchArticles'
import { SetLoading, UnsetLoading } from './actions/fetchArticles'
import {compose} from 'redux'
const redux = require('redux')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

const initialState = {
    loading: false,
    articles:[],
    art:0
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
            //return state.loading
            ;
        default:
            return state     
    }
} 

export const fetchArticles = () => (dispatch, getState) => {
   // const articles = getState().articles
    dispatch(SetLoading())
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=31e11c95598d4760bc5c73fb2b0417f2")
    .then(res => {
        console.log("GOT EM!")
        const data = res.json()
        return data
    })
    .then(data => {
        dispatch(LoadEm(data.articles))
        console.log(store.getState().articles[0])
        dispatch(UnsetLoading())
    })
    .catch(err => {
        dispatch(UnsetLoading())
        console.log(err)
    })
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
store.dispatch(fetchArticles())
//store.subscribe(()=>{ console.log(store.getState()) })
