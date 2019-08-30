import React from 'react';
import {Card,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TxtTag from '../TxtTag';
import ReplyList from './ReplyList';
import Data from './data';

class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isDown:false,
            data:[]
        }
        axios.get("https://cnodejs.org/api/v1/topic/"+this.props.match.params.id)
        .then(res=>{
            this.setState({
                data:res.data,
                isDown:true
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        let title=(<div>
            <h2>{Data.data.title}</h2>
            <div style={{display:'flex',alignItem:'center'}}>
                <TxtTag data={Data.data}/>
                <Avatar src={Data.data.author.avatar_url}/>
                <Link to={"/user/"+Data.data.author.loginname}>{Data.data.author.loginname}</Link>
                发表于：{Data.data.create_at.split("T")[0]}
            </div>
        </div>)
        return (
            <div className="wrap">
                <Card
                    title={title}
                >
                    <div
                        dangerouslySetInnerHTML={{
                           __html:Data.data.content
                        }}
                    ></div>   
                </Card>
                <ReplyList
                    replies={Data.data.replies}
                    replyCount={Data.data.reply_count}
                />
            </div>
        )
    }
}
export default Details;