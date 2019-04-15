import React, { Component } from 'react'
import './VideoList.css'
import VideoItem from './VideoItem'

export default class VideoList extends Component{

  createList = (videos) => {
    return videos.map(video => {
      return <VideoItem key={video.id.videoId}
              updateVideoEmbedUrl={this.props.updateVideoEmbedUrl}
              video={video}
              />
    })
  }

  render(){
    return (
      <div className="video-list-container row">
        {this.createList(this.props.videos)}
      </div>
    )
  }
}
