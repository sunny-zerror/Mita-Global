import React from 'react'

const CardHover = () => {
  return (
    <>
      <div className="w-full h-full absolute inset-0 z-10 pointer-events-none">
        <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500  bg-[#f2f2f2] group-hover:top-3 group-hover:right-3 absolute"></div>
        <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500 border border-[#f2f2f2] group-hover:top-8 group-hover:right-4.5 absolute"></div>
        <div className="size-2 group-hover:opacity-100 opacity-0  -top-7 -right-6 transition-all duration-500 border border-[#f2f2f2] group-hover:top-4.5 group-hover:right-8 absolute"></div>
        <div className="hover_bar group-hover:opacity-100 opacity-0 absolute right-1 top-1 transition-all duration-500 h-px bg-[#f2f2f2] w-0  group-hover:w-[calc(100%-8px)] z-10"></div>
        <div className="hover_bar group-hover:opacity-100 opacity-0 absolute right-1 top-1 transition-all duration-500 w-px bg-[#f2f2f2] h-0  group-hover:h-[calc(100%-8px)] z-10"></div>
        <div className="hover_bar group-hover:opacity-100 opacity-0 absolute left-1 bottom-1 transition-all duration-500 h-px bg-[#f2f2f2] w-0  group-hover:w-[calc(100%-8px)] z-10"></div>
        <div className="hover_bar group-hover:opacity-100 opacity-0 absolute left-1 bottom-1 transition-all duration-500 w-px bg-[#f2f2f2] h-0  group-hover:h-[calc(100%-8px)] z-10"></div>
      </div>
      </>
  )
}

export default CardHover