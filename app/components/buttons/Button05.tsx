'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button05.css'

const Button05 = () => {

    const html = (
        <a className="btn5">
            <span>Button</span><i></i>
        </a>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button05;