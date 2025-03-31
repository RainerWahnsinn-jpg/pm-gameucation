import Header from './Header';
import Footer from './Footer';
import Sidebar from '../Sidebar';
import '../assets/css/main.css';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}