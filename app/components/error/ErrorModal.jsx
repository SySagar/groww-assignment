import React from 'react'

export default function ErrorModal() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
    }}>
      Transaction not found. You will be directed to the home page in 10 seconds.
    </div>
  )
}
