import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../../assets/css/main.css';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-5xl p-8"> {/* ← Hier erfolgt die Anpassung */}
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
