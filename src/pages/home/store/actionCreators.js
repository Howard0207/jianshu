import * as constants from './constants'
import axios from 'axios'

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreList = () => {
    return dispatch => {
        axios('/api/homeList.json').then(res=> {
            const result = res.data.data
            dispatch(addHomeList(result))
        })
    }
}

export const toggleTopShow = flag => {
    return dispatch => dispatch({ type: constants.TOGGLE_SCROLL_TOP, flag})
}

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

const addHomeList = (result) => ({
    type: constants.ADD_HOME_LIST,
    articleList: result
})