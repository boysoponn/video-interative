import React from 'react';
import './../../css/hotspot.css';
import styled from 'styled-components'
  
class Hotspot extends React.Component {
  
  render(){
      return (

        <HotspotComponent>
            <div className="item-inner">
                <div className="slack"></div>
            </div>
        </HotspotComponent>

  );
  }
}

export default Hotspot;
const HotspotComponent = styled.div`
    position: absolute;
    z-index: 50;
    top:29%;
    left:36%;
`;