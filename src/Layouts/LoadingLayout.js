import React from 'react'

export default function LoadingLayout() {
    return (
      <div className='h-100 w-100 position absolute d-flex'>
      <div className='m-auto'>
        <div className="spinner-border primaryText" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      </div>
  
    )
  }
