import React from 'react';
import {isMobile} from 'react-device-detect';
import InteractiveMobile from './interactiveMobile';
import InteractiveDesktop from './interactiveDesktop';

class Interactive extends React.Component {

  render(){
let Mobile = isMobile
      return (
        Mobile?
          <InteractiveMobile/>
          :
          <InteractiveDesktop/>
      );
  }
}

export default Interactive;
