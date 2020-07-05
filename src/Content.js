import React, { Component } from 'react'
import Requester from './Requester'
const titles = ['profile', 'timeline']

export default class Content extends Component {
  render() {
    const buttons = (titles) =>
      titles.map(title =>
        <Requester
          title={title}
          key={title}
        />
      )
    return(
      <div className='loading-wrapper fadein-slow'>
        <h4>Seaver is awaked</h4>
        <div className='buttonContainer'>
          {buttons(titles)}
        </div>
        <h4>Responce:</h4>
      </div>
    )
  }
}
