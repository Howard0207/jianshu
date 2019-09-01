import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
class Home extends PureComponent {

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    render() {
        const { showScroll } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="banner" src="/banner.webp"></img>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writter />
                </HomeRight>
                {showScroll && <BackTop onClick={this.handleScrollTop}>顶部</BackTop>}
            </HomeWrapper>
        )
    }
}

const mapState = state => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = dispatch => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)