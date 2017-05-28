//go find the library 'react' installed in node_modules
//and assign it to variable React
import React, { Component } from 'react'; //core react library creates and manages components
import ReactDOM from 'react-dom'; //seperate library to handle rendering components to the DOM
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC0DI7yGZouRUGxUER25puxIf--2Dh3Ub8';



class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos:[] };

    YTSearch({key:API_KEY, term:'surfboards'},(videos)=>{
      this.setState({ videos });
      //this.setState({ videos : videos }); //this will get transpiled from es6 to es5
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
