import React from 'react'
import MeetupItem from './meetupItem'

const MeetupList = ({meetups}) => {
 

  return (
    <ul className='flex flex-col gap-4 py-6'>
      {meetups?.map(item => (
        <MeetupItem key={item.id} title={item.title} id={item.id} image={item.image} address={item.address} />
      ))}
    </ul>
  )
}

export default MeetupList