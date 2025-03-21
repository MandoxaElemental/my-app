import React from 'react'

const 
SavedBox = ({saved} : {saved: string}) => {
  return (
    <div className='px-5 text-xl overflow-scroll'>
        {saved}
    </div>
  )
}

export default 
SavedBox