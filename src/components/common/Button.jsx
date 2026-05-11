import React from 'react'

const Button = ({text}) => {
  return (
    <>
      <button className='uppercase text-xs bg-[#0f1219] text-[#f2f2f2] w-fit p-3  leading-none'>{text}</button>
    </>
  )
}

export default Button