import './App.css';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])


  const [products, setProducts] = useState([
    {name: "Jacket",price: 100},
    {name: "pants", price: 50},
    {name: "hat", price: 20}
  ])

  //function buy() {}
  const buy = (e,index) => {
    e.preventDefault()
    const product = products[index]
    setCart([...cart,products])
  }

  return (
    <div id="container">
      <h1>My web shop</h1>
      <p><FaShoppingCart />{cart.length}</p>
      {
        products.map((product,index) =>(
          <div key={index}>
            <form onSubmit={(e) => buy(e,index)}>
             <h3>{product.name}</h3>
             <p>{product.price} €</p>
            <button>Buy</button>
            </form>
          </div>
        ))

      }



    </div>

  );
}

export default App;
