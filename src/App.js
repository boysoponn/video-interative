import React from 'react';
import 'antd/dist/antd.css';
import './app.css';
import Homepage from './components/homepage';
import Interactive from './components/interactive';
import "../node_modules/video-react/dist/video-react.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render(){
      return (
        <BrowserRouter  basename="/oth/money-happiness-center/">
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />       
              <Route path="/interactive" component={Interactive} />  
            </Switch>
          </div>
        </BrowserRouter>
    
  );
  }
}

export default App;
