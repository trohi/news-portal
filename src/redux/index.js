import { LoadData, SetLoading, UnsetLoading }from './actions/reduxActions'
import { compose } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import  thunkMiddleware  from 'redux-thunk'

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
    switch(action.type){
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
                article: action.payload
            })
            return clone3
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
        const clone4 = Object.assign({}, state, {
            filteredArticles:[]
            })
            return clone4
            ;
        case 'GET_USERS_SORT_SPEC':
        const clone5 = Object.assign({}, state, {
            usersFilterSpec: action.payload
        })
        return clone5
        ;
        default:
            return state     
    }
} 

//function with responsibility of fetching initial articles 
export const fetchArticles = () => (dispatch, getState) => {
    dispatch(SetLoading())
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=31e11c95598d4760bc5c73fb2b0417f2",{
        mode:"cors"
    })
    .then(res => {
        const data = res.json()
        return data
    })
    .then(data => {
        dispatch(LoadData(data.articles))
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