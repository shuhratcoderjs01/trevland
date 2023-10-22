import React from 'react'

function Button({children}) {
  return (
    <a href="#j" className=' text-white bg-[#C9453B] px-9 py-3 rounded-md inline-block'>
        {children || "link"}
    </a>
  )
}

export default Button