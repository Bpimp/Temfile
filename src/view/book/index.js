import React from 'react';
import {Card} from 'antd';
import data from './data';

class Book extends React.Component{
    render(){
        return (
            <div className="wrap">
                {data.map((item,index)=>(
                    <Card
                        key={index}
                        title={item.title}
                        type='inner'
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html:item.content
                            }}
                        ></div>
                    </Card>
                ))}
            </div>
        )
    }
}
export default Book;