import React from 'react';
import {Row,Col} from 'antd';
import IndexMenu from './indexMenu';
import IndexList from './list';

class Index extends React.Component{
    render(){
        let tab=this.props.match.params.id;
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
                        tab={tab}
                    />
                </Col>
            </Row>
        )
    }
}
export default Index;