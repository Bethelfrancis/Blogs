import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4  px-5">
            <div className="flex justify-between items-center">
                <h1 className="text-white text-3xl font-semibold">Blogs</h1>
                <ul className="flex space-x-16 text-xl">
                    <li>
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    </li>
                    <li>
                        <Link to="/create" className="text-gray-300 hover:text-white">New Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;