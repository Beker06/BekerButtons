'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button09.css'

const Button09 = () => {

    const html = (
        <a className="btn9">
            <i></i>
            <span>Explore</span>
        </a>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button09;