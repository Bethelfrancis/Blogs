const Bloglist = ({ blogs, handleDelete }) => {
    return (
        <div className='max-w-2xl mx-auto p-4'>

            {blogs.map((blog) => (
                <div key={blog.id} className="bg-white shadow-md rounded-lg p-6 mb-4 transition-transform transform hover:scale-105">
                    <h1 className="text-xl font-semibold text-gray-800">
                        {blog.title}
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Written by <span className="font-medium text-blue-600">{blog.author}</span>
                    </p>
                    <button 
                        onClick={() => handleDelete(blog.id)}
                        className="mt-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                        Delete Blog
                    </button>
                </div>
            ))}

        </div>
    );
}
 
export default Bloglist;