import React, { Component } from 'react';
// { Component } means import react and pull of the property component as a variable named component
// syntactic  sugar for... const Component = React.Component;

// class cmp, used when we want to have some sort of internal record keeping
// ability for it to be aware of itself, whats happened since it rendered
// ability to tell other components what has changed


class SearchBar extends Component {
  render(){
    return <input onChange={event => console.log(event.target.value)}/>
  }
  onInputChange(event){
    console.log(event.target.value);

  }
}

export default SearchBar;
