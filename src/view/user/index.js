import React from 'react';
import {Avatar,Row,Col} from 'antd';
import {connect} from 'react-redux';
import UserList from './userList';

class User extends React.Component{
    render(){
        return (
            <div className="wrap">
                <Avatar 
                    src={data.avatar_url}
                    className="userAvatar"
                    />
                    <Row className="userInfo">
                        <Col md={8}>用户名:<a>{data.loginname}</a></Col>
                        <Col md={8}>积分:<a>{data.score}</a></Col>
                        <Col md={8}>注册时间:<a>{data.create_at.split("T")[0]}</a></Col>
                    </Row>
                    <UserList
                        loading={false}
                        title="最近创建的话题"
                        data={data.recent_topics}
                    />
                    <UserList
                        loading={false}
                        title="最近回复的话题"
                        data={data.recent_replies}
                    />
            </div>
        )
    }
}
export default connect(state=>state.user)(User);