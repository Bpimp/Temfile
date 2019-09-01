import React from 'react';
import {Avatar,Row,Col} from 'antd';
import data from './data';
import UserList from './userList';

class User extends React.Component{
    render(){
        return (
            <div className="wrap">
                <Avatar 
                    src={data.data.avatar_url}
                    className="userAvatar"
                    />
                    <Row className="userInfo">
                        <Col md={8}>用户名:<a>{data.data.loginname}</a></Col>
                        <Col md={8}>积分:<a>{data.data.score}</a></Col>
                        <Col md={8}>注册时间:<a>{data.data.create_at.split("T")[0]}</a></Col>
                    </Row>
                    <UserList
                        loading={false}
                        title="最近创建的话题"
                        data={data.data.recent_topics}
                    />
                    <UserList
                        loading={false}
                        title="最近回复的话题"
                        data={data.data.recent_replies}
                    />
            </div>
        )
    }
}
export default User;