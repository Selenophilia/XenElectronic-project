import './App.css';
import Navbar from   './components/Navbar'
import Footer from   './components/Footer'
import  { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import ProductDetails from './screens/ProductDetails'
import Cart from './screens/Cart';
import SignIn from './screens/Sigin';
function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Navbar /> 
                <section className="products">
                    <Route path='/product/:id' component={ProductDetails} ></Route>        
                    <Route path='/' component={Home}  exact></Route>  
                    <Route path='/cart/:id?' component={Cart}  ></Route>          
                    <Route path='/login' component={SignIn}  ></Route>              
                </section>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
