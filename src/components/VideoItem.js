import React, {Component} from 'react'
import './VideoItem.css'

export default class VideoItem extends Component {
  render(){
    return (
      <div onClick={this.props.updateVideoEmbedUrl} data-video={this.props.video.id.videoId} className="video-item row no-gutters">
        <div className="col-sm-3 img-container">
          <img src={this.props.video.snippet.thumbnails.default.url} alt="video thumbnail"/>
        </div>
        <div className="col-sm-9">
          <h6>{this.props.video.snippet.title}</h6>
          <hr />
          <p>{this.props.video.snippet.description.substring(0,40) + '...'}</p>
        </div>
      </div>
    )
  }
}
