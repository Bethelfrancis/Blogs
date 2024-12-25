import { Link } from "react-router-dom";

const Bloglist = ({ blogs }) => {
    return (
        <div className='w-full '>

            {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg p-6 mb-4 cursor-pointer shadow-xl transition-shadow duration-500 transform hover:shadow-md">
                    <Link to={`/blog/${blog.id}`}>
                        <h1 className="text-xl font-semibold text-gray-800">
                            {blog.title}
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Written by <span className="font-medium text-blue-600">{blog.author}</span>
                        </p>
                    </Link>
                </div>
            ))}



        </div>
    );
}
 
export default Bloglist;