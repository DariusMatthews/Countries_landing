import React from 'react'

export default function Header({toggle, onClick}) {
  return (
    <div>
      <button onClick={onClick}>
        {toggle ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  )
}
