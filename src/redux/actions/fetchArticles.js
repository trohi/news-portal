export const fetchArticlesSuccess = articles => ({
    type: 'FETCH_ARTICLES_SUCCESS',
    payload: articles
})

export const LoadEm = articles =>({
    type:'LOAD_THE_DATA',
    payload: articles
})

export const SetLoading = () =>({
    type: 'SET_LOADING',
})

export const UnsetLoading = () =>({
    type: 'UNSET_LOADING'
})
