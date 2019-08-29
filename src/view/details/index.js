import React from 'react';
import {Card,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import TxtTag from '../TxtTag';
import ReplyList from './ReplyList';
import Data from './data';

class Details extends React.Component{
    render(){
        let data={"data":this.props.data.find(item=>item.id===this.props.props.match.params.id)};
        console.log(Data.data,data.data);
        /* let title=data.map(item=>(<div
            key={item.id}
        >
            <h2>{item.title}</h2>
            <div style={{display:'flex',alignItem:'center'}}>
                <TxtTag data={item}/>
                <Avatar src={item.author.avatar_url}/>
                <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                发表于：{item.create_at.split("T")[0]}
            </div>
        </div>)) */
        return (
            <div className="wrap">
                <Card
                    //title={title}
                >
                    <div
                        /* dangerouslySetInnerHTML={{
                            __html:data.map(item=>item.content)
                        }} */
                    ></div>   
                </Card>
                <ReplyList
                    //replies={}
                />
            </div>
        )
    }
}
export default Details;