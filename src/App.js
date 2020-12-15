// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// import { connect } from "react-redux";
// import { action1, action2 } from "./action";

// function App(props) {
  
//   return (
//     <div>
//       <button
//         type="button"
//         onClick={() => {
//           props.addCounter();
//         }}       
//       >
//         ADD
//       </button>
      
//       {props.cou}

//       <button
//         onClick={() => {
//           props.removeCounter();
//         }}
//         type="button"
//       >
//         REMOVE
//       </button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return{
//     cou: state.counter
//   }
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCounter:() => {
//       dispatch(action1); 
//     },
//     removeCounter: () => {
//       dispatch(action2);
//     },
//   };
// };



// export default connect(mapStateToProps, mapDispatchToProps)(App);


// import React from 'react';
// import Navigator from './Navigator';
// function App(){
//   return (
//     <div>
//       <Navigator/>
//     </div>
//   )
// }
// export default App



import React from 'react';
import {connect} from 'react-redux';
import {action1} from './action';
 
function App(props){
return (
  <div>
    {props.add ? props.add : ""}
    <input type="input" id="input1" />
    <button onClick={()=>{props.Addthedata(document.getElementById('input1').value)}}>ADD</button>
  </div>
)}
const mapStateToProps=(state)=>{
  return {
    add:state.addTodo
  }
};
const mapDispatchToProps=(dispatch)=>{
  return {
    Addthedata:(text)=>{
      dispatch({...action1, payload:text});
    }
  }
}

export default connect (mapStateToProps , mapDispatchToProps)(App);