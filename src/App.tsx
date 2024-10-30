import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Layout from './layout/Layout';
import { Home, Shop, Product, Cart, Checkout, Orders} from './pages'


const App = () => {
  return (
    <>
      <div className='font-display text-primary'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/my-orders' element={<Orders />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;