import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NavBar from './components/navbar/NavBar';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
