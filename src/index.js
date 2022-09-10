import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';
function App() {
    return <Router>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login /> } />
        </Routes>
    </Router>
}

const container = document.getElementById('main');
const root = createRoot(container);
root.render(<App />);