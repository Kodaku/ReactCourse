//Import the react and react DOM libraries
import React from "react";
import ReactDOM  from "react-dom";

function getButtonText(){
  return "Click On Me!";
}

function getTime(){
  return (new Date()).toLocaleTimeString();
}

//Create a React component
const App = () => {
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = { text: 'Enter name: '};
    return ( 
      <div>
        <label className="label" htmlFor="name"> { labelText.text } </label>
        <input id="name" />
        <button style={ style }>{ getButtonText() }</button>
        <div>
          <h3>Current Time: {getTime()}</h3>
        </div>
      </div>
    );
};

//Take the React component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root') 
);