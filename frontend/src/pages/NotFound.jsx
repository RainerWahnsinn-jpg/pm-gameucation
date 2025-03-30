import { Link } from 'react-router-dom';
import meme404 from '../assets/images/meme404.png';

export default function NotFound() {
    return (
        <div style={{ 
            textAlign: 'center',
            marginTop: '50px',
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', 
            backgroundColor: '#f9fafb' 
        }}>
            <h2>Oops! Seite nicht gefunden.</h2>
            <img 
                src={meme404} 
                alt="404 Meme"
                style={{ width: '300px', height: 'auto', maxWidth: '100%' }}
            />
            <br />
            <Link to="/">Zurück zur Startseite</Link>
        </div>
    );
}
