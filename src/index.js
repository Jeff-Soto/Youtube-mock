import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'

class App extends Component{

  state = {
    value: ''
  }

  handleSubmit = (e) => {
    if (e.which !== 13) return;

    // make API request

    // https://www.googleapis.com/youtube/v3/search?part=snippet
    //                  &q=soccer
    //                  &type=playlist
    //                  &key=AIzaSyBTeLG156TAxmbEdPdvr2yaLLpViA4BvSY
  }

  handleValueUpdate = (e) => {
    this.setState({ value: e.target.value })
  }

  render(){
    return (
      <div className="container app">
        <div className="row">
          <div className="col-xs-12">
            <Search value={this.state.value}
              handleValueUpdate={this.handleValueUpdate}
              handleSubmit={this.handleSubmit}
            />



          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
