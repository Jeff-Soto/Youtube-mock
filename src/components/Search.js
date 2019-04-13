import React, { Component } from 'react'

export default class Search extends Component {
  render(){
    return (
      <div className="form-group">
        <input className="form-control"
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
