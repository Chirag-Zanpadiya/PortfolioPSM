import { useState } from "react";
import Combine from "./Components/Combine/Combine";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden" >
        <Combine />
      </div>
    </>
  );
}

export default App;
