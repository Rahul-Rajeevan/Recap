import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';

function App() {
  const location=useLocation()
  console.log(location);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
