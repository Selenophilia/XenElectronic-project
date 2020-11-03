import data from './seed'
import './App.css';
import Product from './components/Product'
import Navbar from   './components/Navbar'
import Footer from   './components/Footer'
function App() {

    let getProducts = data.products.map((product) => 
                    <Product key={product.id} 
                            name={product.name}
                            price={product.price}
                            image_url={product.image}
                            description={product.description}
                            brand={product.brand} />
    );
  return (
    <div className="container">
        <Navbar />
    
        <section className="products">
          <div className="row center">
               {getProducts}
            </div>              
        </section>
        <Footer />
    </div>
  );
}

export default App;
