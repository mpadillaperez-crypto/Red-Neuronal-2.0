
import React, { useState } from 'react';
import MainPage from './components/MainPage';
import ImportancePage from './components/ImportancePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [page, setPage] = useState<'main' | 'importance'>('main');

  const handleNavigate = (targetPage: 'main' | 'importance') => {
    setPage(targetPage);
    window.scrollTo(0, 0); // Asegura que la nueva página se muestre desde el principio
  };

  return (
    <div className="min-h-screen bg-slate-deep font-sans leading-relaxed">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {page === 'main' ? (
          <MainPage onNavigate={() => handleNavigate('importance')} />
        ) : (
          <ImportancePage onNavigate={() => handleNavigate('main')} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
