// tipos de componentes - CLASS & FUNCTIONAL
/*
COMPONENT CLASS


import React from "react";

class MyClassComponent extends React.Component{
  render(){
    return(
      <div> Hola estamos trabajando con react.js</div>
    );
  }
}

export default MyClassComponent;

import { Component } from "react";

export default class MyClassComponent extends Component{
  render(){
    return(
      <div>My component class</div>
    );
  }
}*/

/*
Component funcional


// *1.
import React from "react";
function MyFuntionalComponent(){
  return(
    <div>Soy un componente funcional</div>
  )
}

export default MyFuntionalComponent;

// *2.
const MyFuntionalComponent = () =>{
  return(
    <div>Soy un componente funcional</div>
  )
}

export default MyFuntionalComponent;*/

import React from "react";

export const App = () =>{
  return(
    <div>App</div>
  )
}
export default App;