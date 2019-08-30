import React from 'react';
import {Avatar,Row,Col} from 'antd';
import data from './data';

class User extends React.Component{
    render(){
        return (
            <div className="wrap">
                <Avatar 
                    src={data.data.avatar_url}
                    className="userAvatar"
                    />
                    <Row className="userInfo">
                        <Col md={8}>用户名:<a href="javascript:;">{data.data.loginname}</a></Col>
                        <Col md={8}>积分:<a href="javascript:;">{data.data.score}</a></Col>
                        <Col md={8}>注册时间:<a href="javascript:;">{data.data.create_at.split("T")[0]}</a></Col>
                    </Row>
            </div>
        )
    }
}
export default User;