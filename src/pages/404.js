import React from 'react'
import Button from '../styles/GlobalComponents/Button';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ fontWeight: 800, fontSize: '56px', lineHeight: '56px', maxWidth: '100%', marginBottom: '16px' }}>404</h1>
      <p style={{ maxWidth: '800px', fontSize: '24px', lineHeight: '40px', fontWeight: 300, paddingBottom: '3.6rem', color: 'rgba(255,255,255,0.5);' }}>I'm sorry, this page was not found!</p>
      <Button onClick={() => window.location.href = '/'}>Go back to home</Button>
    </div>
  )
}

export default NotFound