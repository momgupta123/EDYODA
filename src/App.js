// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductList from './ProductList';
// import ProductDetails from './ProductDetails';
// import Cart from './Cart';
// import Phoneboot from './comp/Phoneboot';
// import { CartProvider } from './CartContext';

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/products/:id" element={<ProductDetails />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/phoneboot" element={<Phoneboot />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;
import React from 'react'
import Shopify from './project/Shopify/Shopify'
import Phoneboot from './Mock/Phoneboot'
import TaskManager from './Mock/Taskmane'
import Taskmanown from './Mock/Taskmanown'
import Appndandundo from './Mock/Appndandundo'
import Covid19 from './Mock/Covid19'
import Subscription from './project/Subscription'
// import Mom from './project/Mom'
import Compare from './project/Compare'
import Ticktacktoe from './Mock/Ticktacktoe'
import Likeandadd from './Mock/Likeandadd'
import Countbill from './project/Countbill'
const App = () => {
  return (
    <div>
      {/* <Covid19/>
      <Appndandundo/>
<Phoneboot/>
<TaskManager/>

<Taskmanown/> */}

{/* <Mom/> */}
{/* <Compare/> */}
{/* <Ticktacktoe/> */}
{/* <Shopify/> */}
{/* <Phoneboot/> */}
   {/* <Likeandadd/> */}
   <Countbill/>   
{/* <Subscription/> */}
    </div>
  )
}

export default App