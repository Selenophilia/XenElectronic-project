import './seed'
import './App.css';

function App() {
  return (
    <div className="container">
       <header className="row">
                <div>
                    <a href="#"> XenElectronic </a>
                </div>
                
                <div>
                    <a href='#'> <span className="icon"><i className="fa fa-shopping-cart"></i></span></a>
                    <a href="#">Sign In </a>  
                </div>
             
        </header>
    
        <section className="products">
          <div className="row center">
                <div className="card">
                    <a href="#">
                      <img className="medium" src="./images/ps4-controller.jpeg" alt='product'/>   
                      </a>
                      <div className="card-body">
                          <div className="product-details">
                              <a href="#">
                                  <h1> Play Station 4</h1>    
                              </a>
                              <span className='price'>
                                  <h2> Price: $200.00</h2>
                              </span>
                              
                          </div>
                          <div className="product-rating">
                              <span><i className="fa fa-star"></i> </span>
                              <span><i className="fa fa-star"></i> </span>
                              <span><i className="fa fa-star"></i> </span>
                              <span><i className="fa fa-star"></i> </span>
                              <span><i className="fa fa-star"></i> </span>             
                          </div>           
                      </div>                        
                  </div>  
                  
                  <div className="card">
                        <a href="#">
                         <img className="medium" src="./images/xbox-ctrl.jpeg" alt='product' />   
                         </a>
                         <div className="card-body">
                             <div className="product-details">
                                 <a href="#">
                                     <h1> XBox 360 controller</h1>    
                                 </a>
                                 <span className='price'>
                                     <h2> Price: $200.00</h2>
                                 </span>
                                 
                             </div>
                             <div className="product-rating">
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>             
                             </div>           
                         </div>                        
                     </div>   


                     <div className="card">
                        <a href="#">
                         <img className="medium" src="./images/keeb-1.jpeg" alt='product' />   
                         </a>
                         <div className="card-body">
                             <div className="product-details">
                                 <a href="#">
                                     <h1> Mechanical Keyboard</h1>    
                                 </a>
                                 <span className='price'>
                                     <h2> Price: $200.00</h2>
                                 </span>
                                 
                             </div>
                             <div className="product-rating">
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>             
                             </div>           
                         </div>                        
                    </div> 

                    <div className="card">
                        <a href="#">
                         <img className="medium" src="./images/mouse-LG.jpeg" alt='product' />   
                         </a>
                         <div className="card-body">
                             <div className="product-details">
                                 <a href="#">
                                     <h1> LG 502</h1>    
                                 </a>
                                 <span className='price'>
                                     <h2> Price: $200.00</h2>
                                 </span>
                                 
                             </div>
                             <div className="product-rating">
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>             
                             </div>           
                         </div>                        
                     </div>  


                    <div className="card">
                        <a href="#">
                        <img className="medium" src="./images/keeb-2.jpeg" alt='product' /> 
                         </a>
                         <div className="card-body">
                             <div className="product-details">
                                 <a href="#">
                                     <h1> Mechanical Keyboard</h1>    
                                 </a>
                                 <span className='price'>
                                     <h2> Price: $200.00</h2>
                                 </span>
                                 
                             </div>
                             <div className="product-rating">
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>             
                             </div>           
                         </div>                        
                     </div> 

                     <div className="card">
                        <a href="#">
                         <img className="medium" src="./images/mouse-Razer.jpeg" alt='product' />   
                         </a>
                         <div className="card-body">
                             <div className="product-details">
                                 <a href="#">
                                     <h1> Play Station 4</h1>    
                                 </a>
                                 <span className='price'>
                                     <h2> Price: $200.00</h2>
                                 </span>
                                 
                             </div>
                             <div className="product-rating">
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>
                                 <span><i className="fa fa-star"></i> </span>             
                             </div>           
                         </div>                        
                     </div> 
          </div>              
        </section>
        <footer className="row center">
            <span> &copy 2020 All rights reserved </span>
            <span> images from: <a href="https://unsplash.com/"> Unsplash</a> </span>
        </footer>
    </div>
    
  );
}

export default App;
