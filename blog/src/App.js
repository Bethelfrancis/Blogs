import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
// import Bloglist from './component/Bloglist';
import Posts from './component/Posts';
import Contact from './component/Contact';
// import Bloglist from './component/Bloglist';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<Bloglist />} /> */}
                <Route path="/posts" element={<Posts />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
