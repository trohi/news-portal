export const LoadData = articles =>({
    type:'LOAD_THE_DATA',
    payload: articles
})

export const SetLoading = () =>({
    type: 'SET_LOADING',
})

export const UnsetLoading = () =>({
    type: 'UNSET_LOADING'
})

export const readMore = article =>({
    type: 'READ_MORE',
    payload: article
})

export const SearchEngine = (input) =>({
    type: 'SEARCH',
    payload: input
})

export const SortBy = (payload) =>({
    type: 'SORT_BY',
    payload: payload
})

export const ClearSearchResults = () =>({
    type: 'CLEAR_SEARCH_RESULTS'
})

export const ComponentDeterminor = (type) =>({
    type: 'COMPONENT_RENDER_DETERMINATION',
    payload: type
})

export const GetUsersSortSpec = (value) =>({
    type: 'GET_USERS_SORT_SPEC',
    payload: value
})
