import React, { Component } from 'react';
// { Component } means import react and pull of the property component as a variable named component
// syntactic  sugar for... const Component = React.Component;

// class cmp, used when we want to have some sort of internal record keeping
// ability for it to be aware of itself, whats happened since it rendered
// ability to tell other components what has changed


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term:''};
  }
  render(){
    //this.state.term = event.target.value = BAD!!!! always use setState method to inform react so it can do its magic
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
          />
      </div>
    );
  }
  onInputChange(event){
    console.log(event.target.value);

  }
}

export default SearchBar;
