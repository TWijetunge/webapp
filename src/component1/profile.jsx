import React, { Component } from 'react';
class Click extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{left:"1250px",top:"60px",position:"absolute",zIndex:107}}><ul className={"bg-info"} style={{padding:"30px"}}>
               <li style={{color:"white"}}>Profile</li>
               <li style={{color:"white"}}>Settings</li>
           </ul></div> 
         );
    }
}
 
export default Click;