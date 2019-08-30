import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {List,Avatar} from 'antd';
import TxtTag from '../TxtTag';

class IndexList extends Component{
    render(){
        let {data}=this.props;
        return (
            <List
                loading={false}
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
export default IndexList;