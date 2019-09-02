import React from 'react';
import {Link} from 'react-router-dom';
import {Card,List,Icon,Avatar} from 'antd';

class ReplyList extends React.Component{
    render(){
        let {replyCount,replies,loading}=this.props;
        return (
            <Card
                loading={loading}
                title={replyCount+'条回复'}
                type="inner"
            >
                <List
                    itemLayout="vertical"
                    dataSource={replies}
                    className="replyList"
                    renderItem={item=>(
                        <List.Item
                            key={item.id}
                            extra={item.ups.length>0?<span><Icon type="like"/>{item.ups.length}</span>:''}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url}/>}
                                description={<p><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link><span style={{marginLeft:"5px"}}>{item.create_at.split("T")[0]}</span></p>}
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            >
                            </div>
                        </List.Item>
                    )}
                ></List>
            </Card>
        )
    }
}
export default ReplyList;