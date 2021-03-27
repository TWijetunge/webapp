import React from 'react';
import profilepic from './profilepic.png';
//import Test from '/.test';

function FunctionTest(){
    function clickhandler() {return(
       <h1 style={{top:"500px"}}>hello world</h1>
    )
    }
    return(
        <div>
           <img  onClick={clickhandler} src={profilepic} height="40px" width="40px" style={{position:"absolute",top:"0px",zIndex:110}}></img>

        </div>
    )
}

export default FunctionTest;