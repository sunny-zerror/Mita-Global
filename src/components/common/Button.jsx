import { Link } from 'next-view-transitions'
import React from 'react'

const Button = ({ text, link = "/", theme = "dark", className = "text-sm pb-2" }) => {
  return (
    <Link href={link} className={` shrink-0 h-fit block uppercase group  ${theme === "dark" ? " bg-[#0f1219] text-[#f2f2f2] " : "bg-[#f2f2f2] text-[#0f1219]"} w-fit p-3   leading-none ${className}` }>
      <p className=" leading-none relative uppercase  flex items-center overflow-hidden cursor-pointer transition-all duration-300 group-hover:pl-3 group-hover:gap-x-1">
        <span className={`absolute -left-2 group-hover:left-0 size-1.5  transition-all duration-300 ${theme === "dark" ? "bg-[#f2f2f2] " : "bg-[#0f1219]"}`} />
        {text}
      </p>
    </Link>
  )
}

export default Button