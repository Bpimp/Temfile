import React from 'react';
import './App.css';
import axios from 'axios';
import RouteIndex from './router/index';
import Header from './view/header';
import Footer from './view/footer';
import './App.css';

class App extends React.Component {
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
          <div className="pageWrap">
            <Header/>
            <main className="main">
              <RouteIndex
                data={this.state.data}
              />
            </main>
            <Footer/>
          </div>
    );
  }
}

export default App;
