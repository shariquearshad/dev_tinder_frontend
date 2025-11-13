import React from 'react'

function UserCard({user}) {
  return (
   <div className="card bg-base-100 w-96 m-auto shadow-amber-200 shadow-2xs">
  <figure>
    <img
      src={user.photoUrl}
      alt={user.firstName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
    <p>{user.about}</p>
    <div className="card-actions flex gap-4 justify-center ">
      <button className="btn btn-primary">ignore</button>
      <button className="btn btn-secondary">intrested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard