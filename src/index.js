//go find the library 'react' installed in node_modules
//and assign it to variable React
import React from 'react'; //core react library creates and manages components
import ReactDOM from 'react-dom'; //seperate library to handle rendering components to the DOM

// Create a new component. this should produce some html
// this is a class/type of a component, not an instance
// this function is a factory that produces instances of the component
const App = () => {
  return <div>Hi!</div>;
}


// take this component's generated html and put it in the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //2nd argument is the target where to render teh component


// js modules encapsulates the idea that all the code that we write in seperate files is siloed (isolate from others)
// isolated from other code we write in other libraries that we install in our project
// code that is declared in other files that we produce will have 0 contact with this file unless we explicitly say
// hay i want access to the some other code in that file over there
