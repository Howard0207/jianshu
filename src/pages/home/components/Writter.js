/* eslint-disable no-script-url */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
    WritterWrapper,
    WriterHeader,
    WriterItem
} from '../style'


class Writter extends PureComponent {
    render() {
        const { writerList } = this.props
        return (
            <WritterWrapper>
                <WriterHeader>
                    <p className="recommend-writter">推荐作者</p>
                    <p className="change-recommend-list"><i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>换一批</p>
                </WriterHeader>
                {
                    writerList.map(item => {
                        const total_wordage = item.get('total_wordage')
                        const like = item.get('total_likes_count')
                        return (
                            <WriterItem key={item.get('id')}>
                                <img className="avatar" src={item.get('avatar_source')} alt="" />
                                <p className="follow" >+关注</p>
                                <p className="writer-name">{item.get('nickname')}</p>
                                <p className="writer-desc">写了{total_wordage / 1000 > 1 ? Number(total_wordage / 1000).toFixed(1) + 'k' : total_wordage}字 · {like / 1000 > 1 ? Number(like / 1000).toFixed(1) + 'k' : like}喜欢</p>
                            </WriterItem>
                        )
                    })
                }

            </WritterWrapper>
        )
    }
}

const mapState = state => ({
    writerList: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writter)