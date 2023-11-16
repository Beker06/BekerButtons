'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button06.css'

const Button06 = () => {

    const html = (
        <button className="btn6">
            <span>Button</span>
        </button>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button06;