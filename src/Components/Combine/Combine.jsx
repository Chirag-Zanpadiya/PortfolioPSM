import React from 'react'
import LeftSide from '../LeftSide/LeftSide'
import RightSideMain from '../RightSide/RightSideMain'

function Combine() {
  return (
    <div  className='bg-black min-w-screen overflow-y-hidden overflow-x-hidden min-h-screen  p-6 flex flex-col md:flex-row gap-6'>
      <LeftSide/>
      <RightSideMain/>
    </div>
  )
}

export default Combine
