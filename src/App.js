import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import Header from './components/Header';
import Card from './components/Card';
import {product} from './data/products';
import './styles/main.css';
import CartModal from './components/Cart';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const removeFromCart = (productId) => {
        const newCart = cart.filter(item => item.id !== productId);
        setCart(newCart);
    }

    return (
        <Router>
        <div className="App">
            {/* FIX 1: Передаем функцию открытия в Хедер */}
            <Header 
              cartCount={cart.length} 
              onCartClick={() => setIsCartOpen(true)} 
            />
            
            <Routes>
                <Route path="/" element={
                    <div className="hero">
                        <h1>Добро пожаловать в <span style={{color: '#7B1E3A'}}>ONe</span>Boutique</h1>
                        <p>Откройте для себя эксклюзивную коллекцию одежды, где классика встречается с современным минимализмом.</p>
                        <Link to="/catalog" className="hero-btn">
                            Перейти в каталог →
                        </Link>
                    </div>
                } />

                <Route path="/catalog" element={
                    <main style={{ padding: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {/* Тут всё ок */}
                    {product.map(item => (
                        <Card key={item.id} product={item} onAdd={(p) => setCart([...cart, p])} />
                    ))}
                    </main>
                } />

            </Routes>

            {isCartOpen && (
                <CartModal 
                    cartItems={cart}
                    // FIX 2: Здесь должно быть false для закрытия
                    onClose={() => setIsCartOpen(false)} 
                    onRemove={removeFromCart}
                />
            )}
        </div>
        <Footer />

        </Router>
    );
}

export default App;