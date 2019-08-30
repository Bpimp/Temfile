import React from 'react';
import {Row,Col} from 'antd';
import axios from 'axios';
import IndexMenu from './indexMenu';
import IndexList from './list';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
          data:[]
        }
      }
      componentWillMount(){
          axios.get('https://cnodejs.org/api/v1/topics')
          .then(res=>{
            this.setState({
              data:res.data.data
            })
          })
          .catch(err=>{
            console.log(err)
          })
      }
    render(){
        return (
            <Row className="wrap">
                <Col md={6} xs={0} className="indexSider">
                    <IndexMenu
                        mode="vertical"
                        id="indexMenu"
                    />
                </Col>
                <Col md={0} xs={24}>
                    <IndexMenu 
                        id="indexXsMenu" 
                        mode="horizontal"
                    />
                </Col>
                <Col 
                    md={18}
                    xs={24}
                    className="indexList"    
                >
                    <IndexList
                        data={this.state.data}
                    />
                </Col>
            </Row>
        )
    }
}
export default Index;