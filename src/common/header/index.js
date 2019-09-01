import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';


class Header extends PureComponent {

    getListArea = () => {
        const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handlePageChange } = this.props
        if (focused || mouseIn) {
            const newList = list.toJS()
            const pageList = []
            for (let i = (page - 1) * 10; i < page * 10 && newList.length > 0; i++) {
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                                <SearchInfoSwitch onClick={handlePageChange.bind(this, page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                            换一批
                                </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
    }

    render() {
        const { focused, list, handleInputFocus, handleInputBlur, login, logout } = this.props

        return (
            <HeaderWrapper>
                <Link to='/'><Logo /></Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ?
                            <NavItem className="right" onClick={logout}>退出</NavItem> :
                            <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={handleInputFocus.bind(this, list)}
                                onBlur={handleInputBlur}
                                placeholder="搜索">
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className="writing">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>

                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}



const mapStateToProps = state => {
    return {
        mouseIn: state.get('header').get('mouseIn'),
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispathToProps = dispatch => {
    return {
        handleInputFocus(list) {
            list.size === 0 && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handlePageChange(page, totalPage, spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + "deg)"
            if (page < totalPage) {
                dispatch(actionCreators.changePage(++page))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)