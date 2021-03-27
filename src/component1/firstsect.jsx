import React, { Component } from 'react';
import search from './search.png';
import profilepic from './profilepic.png';
import Prof from './profile';





class Firstsect extends Component {
    
    state={
         visible: false,
         
         }
 
    


   render() { 
      


        return(<div>
           
        <table style={{zIndex:"100",position:"fixed",width:"1700px", height:"150px",background:"linear-gradient(#4563b7,#8629b1)",marginTop:"-8px", marginLeft:"-8px"}}>
            <tbody><tr>
                <td style={{alignContent:"center",width:"500px"}}></td>

                <td style={{alignContent:"center",width:"500px"}}>
                    <input type="text" placeholder="Search"></input>
                    <a href=""><img src={search} height="35px" width="35px"style={{position:"relative",top:"-2px"}}></img> </a> </td>
               
               
                <td style={{width:"500px"}}>
                    <img onClick={()=>{this.setState({visible: !this.state.visible});}} src={profilepic} height="40px" width="40px" style={{position:"relative",top:"0px"}}></img>
                    <h5  style={{float:"left",fontFamily:"cursive",color:"white"}}>My name </h5>
               
                </td>

            </tr></tbody>
        </table>
        
        <div style={{marginLeft:"-8px",zIndex:"99",position:"fixed",width:"200px",height:"1000px",background:"linear-gradient(#8629b1,#4563b7)"}}>
            <button className={"btn btn-primary "} style={{width:"100px",position:"relative",top:"200px",left:"50px"}}>Home</button><br/><br/>
            <button className={"btn btn-primary "} style={{width:"100px",position:"relative",top:"200px",left:"50px"}}>Articles</button><br/><br/>
            <button className={"btn btn-primary "} style={{width:"100px",position:"relative",top:"200px",left:"50px"}}>Posts</button><br/><br/>
            <button className={"btn btn-primary "} style={{width:"100px",position:"relative",top:"200px",left:"50px"}}>Videos</button><br/><br/>
        </div>
        
        <div  >{this.state.visible? <Prof/>:null}</div>
        
        </div>

     

        
        
        
        )}




}
 
export default Firstsect;