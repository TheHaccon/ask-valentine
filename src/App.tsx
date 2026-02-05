import { useState } from 'react'

function App() {
  const [noButtonScale, setNoButtonScale] = useState(1)
  const [isAccepted, setIsAccepted] = useState(false)

  const handleNoClick = () => {
    setNoButtonScale((prev) => Math.max(prev - 0.1, 0.1))
  }

  if (isAccepted) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', backgroundColor: '#fff5f5' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#e91e63', fontFamily: 'cursive' }}>Youppi! I love you more! ❤️</h1>
        <img src="https://media.tenor.com/gU_PbByqnuEAAAAM/tkthao219-bubududu.gif" alt="Happy" style={{ borderRadius: '15px' }} />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '30px', backgroundColor: '#fff5f5', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#d32f2f', fontSize: '2.5rem' }}>Will you be my Valentine? 🌹</h1>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button
          onClick={() => setIsAccepted(true)}
          style={{
            padding: '15px 30px',
            fontSize: '1.5rem',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Yes
        </button>

        <button
          onClick={handleNoClick}
          style={{
            padding: '15px 30px',
            fontSize: '1.5rem',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transform: `scale(${noButtonScale})`,
            transition: 'transform 0.2s ease'
          }}
        >
          No
        </button>
      </div>
    </div>
  )
}

export default App