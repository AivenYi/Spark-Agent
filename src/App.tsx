import { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Functions from './sections/Functions';
import Team from './sections/Team';
import Partners from './sections/Partners';
import Footer from './sections/Footer';
import ChatInterface from './sections/ChatInterface';

function App() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Check if URL has chat parameter
    const params = new URLSearchParams(window.location.search);
    if (params.get('chat') === 'true') {
      setShowChat(true);
    }
  }, []);

  if (showChat) {
    return <ChatInterface />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Functions />
        <Team />
        <Partners />
      </main>
      <Footer />
      
      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg shadow-red-200 flex items-center justify-center transition-all hover:scale-110 group"
        title="与延生对话"
      >
        <img
          src="/images/星火延生角色形象插画-可以只用圆形把人物圈出来.jpg"
          alt="与延生对话"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          与延生对话
        </span>
      </button>
    </div>
  );
}

export default App;
