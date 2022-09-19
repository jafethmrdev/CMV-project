import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen">
      <HomeScreen />
    </div>
  );
}

export default App;
