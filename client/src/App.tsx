import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Pages/AllRoutes";

import { Home } from "./Components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
