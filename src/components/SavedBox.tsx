import React from 'react'

const 
SavedBox = ({saved} : {saved: React.ReactNode}) => {
  return (
    <div className='px-5 text-xl overflow-scroll max-h-[130px]'>
        {saved}
    </div>
  )
}

export default 
SavedBox