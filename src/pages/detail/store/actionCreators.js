import * as constants from './constants'
import axios from 'axios'

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(res => {
            const result = res.data.data
            dispatch(changeDetail(result))
        })
    }
}

const changeDetail = result => ({
    type: constants.CHANGE_DETAIL,
    title: result.title,
    content: result.content
})

