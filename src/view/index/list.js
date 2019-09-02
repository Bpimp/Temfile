import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {List,Avatar} from 'antd';
import TxtTag from '../TxtTag';

import axios from 'axios';

class IndexList extends Component{
    constructor(props){
        super(props)
        this.state={
            page:1
        }
        this.getData(this.props.tab);
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.tab!==nextProps.tab){
            this.getData(nextProps.tab)
            return false
        }
        return true
    }
    getData(tab){
        this.props.dispatch(dispatch=>{
            dispatch({
                type:"LIST_UPDATE"
            })
        })
        this.props.dispatch(dispatch=>{
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`)
            .then(res=>{
                dispatch({
                    type:"LIST_UPDATE_SUCC",
                    data:res.data
                })
            })
            .catch(err=>{
                dispatch({
                    type:"LIST_UPDATE_ERR",
                    data:err
                })
            })
        });
    }
    render(){
        let {loading,data}=this.props;
        console.log(this.props)
        return (
            <List
                loading={loading}
                dataSource={data}
                renderItem={item=>(<List.Item
                    actions={[item.reply_count+'/'+item.visit_count]}
                    key={item.id}
                >
                    <List.Item.Meta
                        avatar={<Avatar 
                                    src={item.author.avatar_url}
                                    shape='square'    
                                />}
                        title={ <div>
                                    <TxtTag
                                        data={item}
                                    />
                                    <Link to={"/details/"+item.id}>{item.title}</Link>
                                </div>}
                        description={(<p>
                                <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                发表于:{item.create_at.split("T")[0]}
                            </p>)}
                    />
                </List.Item>)}
            >
            </List>
        )
    }
}
export default connect(state=>state.list)(IndexList);