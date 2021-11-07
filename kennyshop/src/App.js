
import './App.css';
import { Container } from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import Cart from './components/Cart';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Container>

      </main>
      <Footer />
    </Router>
  );
}

export default App;
