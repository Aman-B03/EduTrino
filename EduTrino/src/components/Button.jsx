import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-black text-white text-xl border px-6 py-4 rounded-xl getShadow'>{props.title}</button>
    </div>
  )
}

export default Button
