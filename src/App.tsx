import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ShowroomPage from './pages/ShowroomPage';
import ContactPage from './pages/ContactPage';
import type { PageId } from './types/page';

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages: Record<PageId, JSX.Element> = {
    home: <HomePage onNavigate={handleNavigate} />,
    showroom: <ShowroomPage />,
    contact: <ContactPage />,
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="pt-14 md:pt-16">
        {pages[currentPage]}
      </div>
    </div>
  );
}

export default App;

