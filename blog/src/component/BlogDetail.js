import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import { useState } from "react";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blogs, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`)
    const [ isPendingDelete, setIsPendingDelete ] = useState(false)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE',
        })
        .then(() => {  
            setTimeout(() => {
                navigate('/')
            }, 2000)
            setIsPendingDelete(true)
        })
    }

    return (
        <div className="px-10 py-12">
            { error && <h2 className="text-[25px] text-center text-blue-600 font-semibold">{ error }</h2> }
            { isPending && <h2 className="text-[20px] text-center text-blue-600 font-semibold">Loading...</h2> }
            { blogs && (
                <div>
                    <h1 className="text-3xl text-gray-800 font-semibold">Blog Details</h1>
                    
                        { isPendingDelete ?
                            <h1 className="text-2xl text-center text-red-500 font-semibold mt-14">Blog was successfully deleted!</h1>
                            :   <div className="p-14">
                                    <h1 className="text-3xl font-semibold text-gray-800">
                                        {blogs.title}
                                    </h1>
                                    <p className="text-gray-600 mt-2">
                                        {blogs.description}
                                    </p>
                                    <p className="text-gray-600 mt-2 font-semibold">
                                        Written by <span className="font-medium text-blue-600">{blogs.author}</span>
                                    </p>
                                    <button
                                        className="mt-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                        onClick={handleDelete}
                                    >
                                        Delete Blog
                                    </button>
                                </div>
                        }
                    </div>
            ) }
        </div>
    );
}
 
export default BlogDetail;