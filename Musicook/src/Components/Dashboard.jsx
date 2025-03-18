import React from 'react'
import Admin from './Admin'
import User from './User'
function Dashboard(props) {
  return (
    <div>
      <h1>{props.role==="Admin"? <Admin/> : null}</h1>
    <h1>{props.role==="User"? <User/> : null}</h1>
    </div>
  )
}

export default Dashboard
