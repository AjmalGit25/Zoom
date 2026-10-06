import { Outlet } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-linear-to-tl from-orange-950 via-orange-800 to-orange-900'>
      <Outlet />
    </div>
  );
}

export default App