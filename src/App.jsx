import Home from './Pages/Home';
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Favorites from './Pages/Favorites';

function App() {
  return (
    <main className="main-content">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
     </Routes>
      </main>
  );
}

export default App ;
