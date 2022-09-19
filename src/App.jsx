import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HomeScreen />
    </div>
  );
}

export default App;
