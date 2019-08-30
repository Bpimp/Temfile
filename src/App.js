import React from 'react';
import './App.css';
import RouteIndex from './router/index';
import Header from './view/header';
import Footer from './view/footer';
import './App.css';

class App extends React.Component {
  render(){
    return (
          <div className="pageWrap">
            <Header/>
            <main className="main">
              <RouteIndex/>
            </main>
            <Footer/>
          </div>
    );
  }
}

export default App;
