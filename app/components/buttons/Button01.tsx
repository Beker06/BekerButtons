'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button01.css'

const Button01 = () => {

    const html = (
        <a className="btn-1" href="#">
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

export default Button01