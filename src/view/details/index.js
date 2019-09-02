import React from 'react';
import {Card,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import axios from 'axios';
import TxtTag from '../TxtTag';
import ReplyList from './ReplyList';

class Details extends React.Component{
    constructor(props){
        super(props)
        this.getData(this.props.match.params.id)
    }
    getData(id){
        this.props.dispatch(dispatch=>{
            dispatch({
                type:"DETAILS_UPDATE"
            })
        })
        this.props.dispatch(dispatch=>{
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
            .then(res=>{
                dispatch({
                    type:"DETAILS_UPDATE_SUCC",
                    data:res.data.data
                })
            })
            .catch(err=>{
                dispatch({
                    type:"DETAILS_UPDATE_ERR",
                    data:err
                })
            })
        })
    }
    render(){
        let {loading,data}=this.props;
        console.log(this.props)
        let title=(<div>
            <h2>{data.title}</h2>
            <div style={{display:'flex',alignItem:'center'}}>
                <TxtTag data={data}/>
                <Avatar src={data.author.avatar_url}/>
                <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
                发表于：{data.create_at.split("T")[0]}
            </div>
        </div>)
        return (
            <div className="wrap">
                <Card
                    loading={loading}
                    title={title}
                >
                    <div
                        dangerouslySetInnerHTML={{
                           __html:data.content
                        }}
                    ></div>   
                </Card>
                <ReplyList
                    loading={loading}
                    replies={data.replies}
                    replyCount={data.reply_count}
                />
            </div>
        )
    }
}
export default connect(state=>state.details)(Details);