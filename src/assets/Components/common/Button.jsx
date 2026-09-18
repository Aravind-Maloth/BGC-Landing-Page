import React from 'react'

const Button = ({children}) => {
  return (
    <div className="bg-(--color-primary) text-(--color-text) px-4 py-2 rounded-md">
      {children}
    </div>
  )
}

export default Button
