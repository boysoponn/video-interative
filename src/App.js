import React from 'react';
import 'antd/dist/antd.css';
import Homepage from './components/homepage';
import Ho from './components/interactive';
import "../node_modules/video-react/dist/video-react.css";
import { BrowserRouter as  Router, Route} from 'react-router-dom';

class App extends React.Component {

  render(){
      return (
    <div>
      <Router> 
        <div> 
          <Route exact path="/" component={Homepage} />       
          <Route exact path="/test" component={Ho} />          
        </div>
      </Router>
    </div>
    
  );
  }
}

export default App;
