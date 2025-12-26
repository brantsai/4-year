import Landing from './components/Landing';
import Timeline from './components/Timeline';
import { useState, useEffect } from "react";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("unlocked");

    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    localStorage.setItem("unlocked", "true");
  };

  return (
    <div className="min-h-screen bg-pastelPink font-vollkorn">
      {isUnlocked ? (
        <Timeline />
      ) : (
        <Landing onUnlock={handleUnlock}/>
      )}
    </div>
  );
}

export default App;
