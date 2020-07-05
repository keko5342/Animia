import React from 'react'

export default () =>
  <div className='loading-wrapper fadein-slow'>
    <h4>Sorry! Server is offline.</h4>
    <div className='loading'>
      <div className='background'>
        <i className='icon-heroku'></i>
      </div>
      <div className='spinner' />
    </div>
  </div>