import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

class List extends PureComponent {
    render() {
        const { list, getMoreList } = this.props
        return (
            <>
                {
                    list.map(item => {
                        return (
                            <Link to={'/detail/'+ item.get('id')}  key={Math.random()}>
                                <ListItem>
                                    <img className="pic" src={item.get('imgUrl')} alt="listItem" />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>

                        )
                    })
                }
                <LoadMore onClick={getMoreList}>更多</LoadMore>
            </>
        )
    }
}

const mapState = state => ({
    list: state.getIn(['home', 'articleList'])
})

const mapDispatch = dispatch => ({
    getMoreList() {
        dispatch(actionCreators.getMoreList())
    }
})

export default connect(mapState, mapDispatch)(List)