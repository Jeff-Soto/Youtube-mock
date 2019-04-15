import React, { Component } from 'react'
import './VideoList.css'

export default class VideoList extends Component{

  createList = (videos) => {
    return videos.map(video => {
      return <div onClick={this.props.updateVideoEmbedUrl} key={video.id.videoId} data-video={video.id.videoId} className="video-item row no-gutters">
        <div className="col-sm-3 img-container">
          <img src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="col-sm-9">
          <h6>{video.snippet.title}</h6>
          <p>{video.snippet.description.substring(0,80) + '...'}</p>
        </div>
      </div>
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
