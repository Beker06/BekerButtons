'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button07.css'

const Button07 = () => {

    const html = (
        <a className="btn7">
            <span>Click me</span><i></i>
        </a>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button07;