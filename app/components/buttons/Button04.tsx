'use client'

import ItemGrid from "../ItemGrid"
import '@/public/styles/button04.css'

const Button04 = () => {

    const html = (
        <a className="btn4">
            Button
        </a>
    )

  return (
    <ItemGrid
        html={html}
    />
  )
}

export default Button04;