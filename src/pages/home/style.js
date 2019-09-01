import styled from 'styled-components'
export const HomeWrapper = styled.div`
    margin: 0 auto;    
    width: 960px;
    overflow: hidden;
`
export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img{
        width: 100%;
        border-radius: 3px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const TopicWrapper = styled.div`
    margin-left: -18px;
    padding: 20px 0 10px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    margin-bottom: 10px;
    margin-left: 18px;
    padding-right: 10px;
    heihgt: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #333;
    border: 1px slolid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    cursor: pointer;
    .topic-pic{
        margin-right: 10px;
        display: block;
        float: left;
        width: 32px;
        height: 32px;
    }
`
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 3px;
    }
`
export const ListInfo = styled.div`
    float: left;
    width: 500px;
    .title {
        line-heihgt: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    margin-bottom: 10px;
    width: 276px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    cursor: pointer;
`

export const WritterWrapper = styled.div`
    width: 278px;
    height: 300px;
`

export const WriterHeader = styled.div`
    overflow: hidden;
    height: 20px;
    font-size: 14px;
    color: #969696
    .recommend-writter{
        float: left;
    }
    .change-recommend-list{
        float: right;
        .spin{
            margin-right: 3px;
            font-size: 12px;
        }
    }
`

export const WriterItem = styled.div`
    margin-top: 15px;
    width: 280px;
    height: 48px;
    overflow: hidden;
    .avatar{
        float: left;
        margin-right: 10px;
        display: block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    .follow {
        float: right;
        margin-top: 5px;
        font-size: 13px;
        color: #42c02e;
    }
    .writer-name{
        margin-right: 60px;
        padding-top: 5px;
        line-height: 20px;
        font-size: 14px;
        color: #333;
    }
    .writer-desc{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`
export const LoadMore = styled.div`
    margin: 30px 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #fff;
    border: 1px solid #ccc;
    font-size: 14px;
`