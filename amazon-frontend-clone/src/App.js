import './App.css';
import NavBar from "./Components/NavBar/Navigation"
import MainPage from './Components/HomePage/MainPage';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Checkout from './Components/Checkout/Checkout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CartContextProvider from './Components/CartContext';

function App() {
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/display' element={ <DisplayContent /> } />
            <Route path='/order/:id' element={ <PlaceOrder /> } />
            <Route path='/checkout' element={ <Checkout /> } />
            <Route path='' element={ <MainPage /> } />
          </Routes>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
