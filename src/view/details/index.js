import React from 'react';
import {Card,Avatar} from 'antd';
import TxtTag from '../TxtTag';

class Details extends React.Component{
    render(){
        console.log(this.props);
        let title=(<div>
            <h1></h1>
        </div>)
        return (
            <div className="wrap">
                <Card>
                    <Card.Meta
                        title={title}
                    ></Card.Meta>
                </Card>
            </div>
        )
    }
}
export default Details;