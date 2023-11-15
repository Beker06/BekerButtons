'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button02.css'

const Button02 = () => {

    const html = (
        <button className="btn2">Button</button>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button02;