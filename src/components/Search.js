import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
  render(){
    return (
      <div className="form-group search-container">
        <input className="form-control search"
          type="text"
          placeholder="enter something..."
          value={this.props.value}
          onChange={this.props.handleValueUpdate}
          onKeyPress={this.props.handleSubmit}
          />
      </div>
    )
  }
}
