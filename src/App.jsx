import React, { useEffect, useState } from 'react';
import videos from './data/mockData';
import VideoCard from './components/VideoCard';
import BottomNav from './components/BottomNav';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake fetch simulation
    setTimeout(() => {
      console.log("data loaded", videos);
      setItems(videos);
      setIsLoading(false);
    }, 1200);
  }, []);

  if (isLoading) return (
    <div className="h-screen bg-black flex justify-center items-center text-white">
      Loading...
    </div>
  );

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white pb-20 sm:pb-16">
      {items.map((vid) => (
        <VideoCard key={vid.id} item={vid} />
      ))}
      <BottomNav />
    </div>
  );
}

export default App;