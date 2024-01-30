import React, { useRef } from 'react'

const Contact = ({refVal}) => {
  return (
    <div 
      ref={refVal}
      className='bg-yellow-100 h-[500px]'>
      Contact
    </div>
  )
}

export default Contact
