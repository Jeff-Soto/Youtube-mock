import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import FeaturedVideo from './components/FeaturedVideo'
import './index.css'
const axios = require('axios');


class App extends Component{

  state = {
    value: '',
    videos: [],
    baseURL: 'https://www.googleapis.com/youtube/v3',
    apiKey: 'AIzaSyBTeLG156TAxmbEdPdvr2yaLLpViA4BvSY',
    featuredVideoUrl: ''
  }

  handleSubmit = (e) => {
    if (e.which !== 13) return;
     // Make API request

     axios(this.state.baseURL + '/search?part=snippet&q=' + this.state.value + '&type=video&videoCaption=closedCaption&key=' + this.state.apiKey)
     .then(response => this.setState({ videos: response.data.items, featuredVideoUrl: this.getVideoEmbedUrl(response.data.items[0]) }))
     .catch(err => console.log("Error making Req, ", err))
  }

  handleValueUpdate = (e) => {
    this.setState({ value: e.target.value })
  }

  getVideoEmbedUrl = (video) => {
    return 'https://youtube.com/embed/' + video.id.videoId + '?autoplay=1'
  }

  render(){
    return (
      <div className="container app">
        <div className="row">
          <div className="col-sm-12">
            <div className="jumbotron">
              <h1>Youtube Search API</h1>
              <p>This is a mock API project using React</p>
            </div>
            <Search value={this.state.value}
              handleValueUpdate={this.handleValueUpdate}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <h4>Featured Video</h4>
            <FeaturedVideo featuredVideoUrl={this.state.featuredVideoUrl}/>
          </div>
          <div className="col-sm-4">
            <h4>Related Videos</h4>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
