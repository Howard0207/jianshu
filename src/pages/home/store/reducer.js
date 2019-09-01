import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    showScroll: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            })
        case constants.ADD_HOME_LIST:
            return state.set('articleList', state.get('articleList').concat(fromJS(action.articleList)))
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.flag)
        default:
            return state
    }
}