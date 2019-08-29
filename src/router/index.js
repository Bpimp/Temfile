import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Index from "../view/index/index";
import About from "../view/about/index";
import Book from "../view/book/index";
import Details from "../view/details/index";
import User from "../view/user/index";

class RouteIndex extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' render={()=>(
                    <Redirect to="/index/all"/>
                )}/>
                <Route path="/index/:id" render={()=>(
                    <Index
                        data={this.props.data}
                    />)}/>
                <Route path="/about" component={About}/>
                <Route path="/details/:id" render={(props)=>(
                    <Details
                        props={props}
                        data={this.props.data}
                    />
                )}/>
                <Route path="/book" component={Book}/>
                <Route path="/user" component={User}/>
            </Switch>
        )
    }
}
export default RouteIndex;