import { useState } from "react";
import './app.css'

function App() {

  const[count, setCount] = useState(0)
  return (
    <div className="background" >
      <h1>Tatsächlich Counter</h1>
      <h2>{count}</h2>
      <br />
      <button onClick={()=>setCount(prev=> prev + 1)}>Tatsächlich</button>
    </div>
  );
}

export default App;
