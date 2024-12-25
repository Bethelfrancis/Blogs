import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BlogDetails from './component/BlogDetail';
import Create from './pages/Create';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/create" element={<Create />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
