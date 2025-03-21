import React from 'react'

const Recent = ({recent} : {recent: React.ReactNode}) => {
  return (
    <div className='px-5 text-xl'>
        {recent}
    </div>
  )
}

export default Recent