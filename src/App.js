import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NavBar from './components/navbar/NavBar';
import SignIn from './Authentication/Authentication';
import CheckOut from './pages/CheckOut';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/auth' element={<SignIn />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
