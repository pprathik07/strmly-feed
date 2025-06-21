// 📁 src/components/BottomNav.jsx
import { Play, Video, Plus, Search } from "lucide-react";

function BottomNav() {
  // temp state for active tab
  const activeTab = 'home';
  
  console.log("rendering bottom nav");

  return (
    <div className="fixed bottom-0 w-full z-50 bg-black px-4 flex justify-around items-center text-white h-14" 
         style={{ borderTop: '0.5px solid #333' }}>
      
      <button className="p-3 hover:bg-gray-800 rounded-full transition-colors">
        <Play size={24} fill={activeTab === 'home' ? 'white' : 'none'} />
      </button>

      <button className="p-3 hover:bg-gray-800 rounded-full transition-colors">
        <Video size={24} />
      </button>

      <button className="p-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
        <Plus size={22} strokeWidth={2.5} />
      </button>

      <button className="p-3 hover:bg-gray-800 rounded-full transition-colors">
        <Search size={24} />
      </button>

      <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
        <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-600">
          <img
            src="/assets/user1.jpg"
            alt="me"
            className="w-full h-full object-cover"
          />
        </div>
      </button>
      
    </div>
  );
}

export default BottomNav;