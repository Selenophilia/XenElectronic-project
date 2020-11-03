import './App.css';
import Navbar from   './components/Navbar'
import Footer from   './components/Footer'
import  { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import ProductDetails from './screens/ProductDetails'
function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Navbar /> 
                <section className="products">
                    <Route path='/product/:id' component={ProductDetails} ></Route>        
                    <Route path='/' component={Home}  exact></Route>        
                </section>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
