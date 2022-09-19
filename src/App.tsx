import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Character from './components/Character';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
