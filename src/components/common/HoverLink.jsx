import React from 'react'

const HoverLink = ({ text, color = "dark", className = "text-sm uppercase" }) => {
    return (
        <>
            <p className={` leading-none relative  flex items-center overflow-hidden cursor-pointer transition-all duration-300 group-hover:pl-3 group-hover:gap-x-1 ${className}`}>
                <span className={`absolute -left-2 group-hover:left-0 size-1.5  transition-all duration-300 ${color === "dark" ? "bg-[#0f1219] " : "bg-[#f2f2f2]"}`} />
                {text}
            </p>
        </>
    )
}

export default HoverLink