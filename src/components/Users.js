import React from 'react'

const Users = ({name}) => {
  return (
    <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: Amravati, Maharastra</h3>
        <h4>Contact: @faisalai541</h4>
    </div>
  )
}

export default Users