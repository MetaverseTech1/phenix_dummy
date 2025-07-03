'use client'

import { useRouter } from 'next/navigation'

export default function RedirectPage() {
  const router = useRouter()

  const handleRedirect = () => {
    window.open('https://dhruvrugs.global', '_blank')
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* <button 
        onClick={handleBack}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'none',
          border: '1px solid #ccc',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '13px',
          color: '#666',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = '#e9e9e9';
          target.style.borderColor = '#999';
        }}
        onMouseOut={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = 'transparent';
          target.style.borderColor = '#ccc';
        }}
      >
        Click to go back, hold to see history
      </button> */}
      
      <div style={{
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#2c3e50',
          marginBottom: '0.5rem',
          lineHeight: '1.2'
        }}>
          The Phenix Carpet
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#7f8c8d',
          marginBottom: '2rem'
        }}>
          Is Now
        </p>
        
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#3b82f6',
          marginBottom: '0.5rem'
        }}>
          Dhruv Rugs
        </h2>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#3b82f6',
          marginBottom: '3rem'
        }}>
          International
        </h3>
        
        <button
          onClick={handleRedirect}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginBottom: '2rem'
          }}
          onMouseOver={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = '#2563eb';
            target.style.transform = 'translateY(-2px)';
            target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
          }}
          onMouseOut={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = '#3b82f6';
            target.style.transform = 'translateY(0)';
            target.style.boxShadow = 'none';
          }}
        >
          Visit Dhruv Rugs
        </button>
        
        <p style={{
          color: '#6b7280',
          fontSize: '1rem',
          marginTop: '1rem'
        }}>
          Please update your bookmarks accordingly .
        </p>
      </div>
    </div>
  )
}