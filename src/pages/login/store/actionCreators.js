import * as constants from './constants'
import axios from 'axios'

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password)
        .then(res => {
            const result = res.data.data
            if (result) {
                dispatch(changeLogin(result))
            } else {
                alert('登录失败')
            }
        })
    }
}

export const logout = () => {
    return dispatch => dispatch(changeLogout())
}

const changeLogin = result => ({
    type: constants.CHANGE_LOGIN,
    login: result
})

const changeLogout = () => ({
    type: constants.CHANGE_LOGOUT,
    login: false
})