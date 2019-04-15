import React, { Component } from 'react'
import './FeaturedVideo.css'

export default class FeaturedVideo extends Component{
  render(){
    return (
      <div className="featured-video-container">
        <iframe width="100%" height="450" title="Featured Video"
          src={this.props.featuredVideoUrl}>
        </iframe>
      </div>
    )
  }
}
