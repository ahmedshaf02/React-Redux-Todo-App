

import React from "react";
import "../styles.css";
import { connect } from "react-redux";
 function Counter(props){
  const { handleDecrement, handleIncrement, counter, isLogin, handleLogin } = props;
  console.log(props)
  return (
    <>
      <div className="App">
          <h1>react Redux</h1>
        <h1>Counter: {counter}</h1>
        <div>
          <button onClick={()=>handleIncrement(10)}> Increment</button>
          <button onClick={()=>handleDecrement(10)}> Decrement</button>
        </div>
        <h1>{isLogin && "login "}</h1>
        <button onClick={()=>handleLogin(!isLogin)}>login</button>
      </div>
    </>
  );

}
  const mapStateToProps = state => ({
    counter: state.counter,
    isLogin:state.login
  });
  
  const mapDispatchToProps = dispatch => ({
    handleIncrement: (count) => dispatch({type:"ADD_COUNTER",payload:count}),
    handleDecrement: (count) => dispatch({type:"REDUCE_COUNTER",payload:count}),
    handleLogin: (data) => dispatch({type:"LOGIN_DATA",payload:data})
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);


