'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button11.css'

const Button11 = () => {

    const html = (
        <a className="btn11">
            <span>NEUMORFISMO</span>
        </a>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button11;