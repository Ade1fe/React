import React from 'react'

const AnimeCom = ({compOne,compTwo}) => {
  return (
    <div className="w-full gap-7 grid justify-center sm:justify-evenly sm:flex lg:grid lg:w-[25%]">
          <div className=""> {compOne}</div>
          <div className=""> {compTwo}</div>
        </div>
  )
}

export default AnimeCom
