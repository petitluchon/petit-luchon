import { useEffect } from 'react';

export default function StudioPage() {
  useEffect(() => {
    // Rediriger vers le Studio Sanity dans un nouvel onglet
    window.location.href = 'https://petit-luchon.sanity.studio';
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#f7f4ef'
    }}>
      <div style={{
        maxWidth: '600px',
        padding: '3rem',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          marginBottom: '1rem', 
          color: '#333' 
        }}>
          Accès au Studio de Gestion
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          marginBottom: '2rem', 
          color: '#666',
          lineHeight: 1.6
        }}>
          Vous allez être redirigé vers le panneau d'administration...
        </p>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #F03E2F',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto'
        }} />
        <p style={{ 
          marginTop: '2rem', 
          fontSize: '0.9rem', 
          color: '#999'
        }}>
          Si la redirection ne fonctionne pas,{' '}
          <a 
            href="https://petit-luchon.sanity.studio" 
            style={{ color: '#F03E2F', textDecoration: 'underline' }}
          >
            cliquez ici
          </a>
        </p>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}