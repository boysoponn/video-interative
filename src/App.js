import React from 'react';
import 'antd/dist/antd.css';
import './app.css';
import Homepage from './components/homepage';
import Interactive from './components/interactive';
import Suggestion from './components/suggestion';
import "../node_modules/video-react/dist/video-react.css";
import { BrowserRouter as  Router, Route} from 'react-router-dom';

class App extends React.Component {

  render(){
      return (
    <div>
      <Router> 
        <div> 
          <Route exact path="/" component={Homepage} />       
          <Route path="/interactive" component={Interactive} />   
          <Route path="/suggestion" component={Suggestion} />          
        </div>
      </Router>
    </div>
    
  );
  }
}

export default App;
