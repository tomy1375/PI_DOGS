import React from 'react'
import Card from '../card/card.component'
import "./cards.styles.css"


function Cards({allUser}) {
  const userList = allUser
  return (
    <div className='card-list'>
       {userList?.map(user=>
        <Card user = {user}/>)}
    </div>
  )
}

export default Cards