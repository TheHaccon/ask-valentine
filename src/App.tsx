import { useState } from 'react'

export default function App() {
  const [noButtonScale, setNoButtonScale] = useState(1)
  const [yesButtonScale, setYesButtonScale] = useState(1)
  const [isAccepted, setIsAccepted] = useState(false)

  const handleNoClick = () => {
    setNoButtonScale((prev) => Math.max(prev - 0.1, 0.1))
    setYesButtonScale((prev) => prev + 0.15)
  }

  if (isAccepted) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fff5f5'
      }}>
        <h1 style={{ fontSize: '3rem', color: '#e91e63', textAlign: 'center' }}>
          Yippiiiii! I love you more! ❤️
        </h1>
        <img
          src="./Love Reaction Gif.gif"
          alt="Valentine GIF"
          style={{ width: '300px', marginTop: '20px', borderRadius: '15px' }}
        />
                <img
          src="./téléchargement.gif"
          alt="Valentine GIF"
          style={{ width: '300px', marginTop: '20px', borderRadius: '15px' }}
        />
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#fff5f5',
      margin: 0,
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#d32f2f', marginBottom: '30px', textAlign: 'center' }}>
        Hello pookie! I am here once to ask if you want to be my Valentine? 🌹
      </h1>
      <img
        src="./valentines-day-gif-4.gif"
        alt="Valentine GIF"
        style={{ width: '300px', marginTop: '20px', borderRadius: '15px' }}
      />

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button
          onClick={() => setIsAccepted(true)}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transform: `scale(${yesButtonScale})`,
            transition: 'transform 0.2s'
          }}
        >
          Yes
        </button>

        <button
          onClick={handleNoClick}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transform: `scale(${noButtonScale})`,
            transition: 'transform 0.2s'
          }}
        >
          No
        </button>
      </div>
    </div>
  )
}