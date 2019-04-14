import React, { Component } from 'react'

export default class FeaturedVideo extends Component{
  render(){
    return (
      <div className="featured-video-container">
        <iframe width="100%" height="450"
          src={this.props.featuredVideoUrl}>
        </iframe>
      </div>
    )
  }
}
