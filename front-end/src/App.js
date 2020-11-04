import './App.css';
import Navbar from   './components/Navbar'
import Footer from   './components/Footer'
import  { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import ProductDetails from './screens/ProductDetails'
import Cart from './screens/Cart';
import SignIn from './screens/Sigin';
import Register from './screens/Register';
import ShippingAddrs from './screens/ShippingAddrs';
import Payment from './screens/Payment'
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
                    <Route path='/register' component={Register}  ></Route>     
                    <Route path='/shipping' component={ShippingAddrs}  ></Route>              
                    <Route path='/payment' component={Payment}  ></Route>              

                </section>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
