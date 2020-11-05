import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';
import ProductDetails from './screens/ProductDetails'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'



test('1. should render App Component', () => {
  const renderer = new ShallowRenderer();


  renderer.render(<App />)
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
});


test('2. should render product details page/ product/:id', () => {
    const initialState = {output:10}
    const mockStore = configureStore()
    let store  = mockStore(initialState)
    const renderer = new ShallowRenderer();
    const result = renderer.getRenderOutput();
    renderer.render(
        <Provider store={store}> 
          <ProductDetails />
        </ Provider > 
    
    )
  expect(result.type).toBe('div');
})
