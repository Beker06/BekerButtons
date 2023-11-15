'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button03.css'

const Button03 = () => {

    const html = (
        <a className="btn3">
            <span>Button</span>
            <span>Button</span>
        </a>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button03;