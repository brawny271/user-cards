import React from 'react';
import '../components/Info.css'

function Info({user}) {
  return (
    <div className='card'>
      <img src={user.avatar_url} alt={user.login}/>
      <h2>{user.login}</h2>
      <p>No. of public repos: {user.public_repos} </p>
      <p>No. of public gists: {user.public_gists }</p>
      <p>Profile created at: {new Date(user.created_at).toLocaleDateString()} </p>
    </div>
  )
}

export default Info
