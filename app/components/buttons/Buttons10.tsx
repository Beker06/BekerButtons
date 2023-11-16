'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button10.css'

const Button10 = () => {

    const html = (
        <a className="btn10">
            <span>Button</span>
        </a>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button10;