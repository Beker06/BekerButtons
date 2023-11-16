'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button06.css'

const Button06 = () => {

    const html = (
        <button className="btn6">
            <span>Hover me</span>
        </button>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button06;