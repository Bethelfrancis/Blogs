import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        const blog = { title, description: desc, author }
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added')
            setIsPending(false)
            navigate('/')
        })
    }

    return (
        <div className="px-10 py-12"> 
            <h1 className="text-3xl text-gray-800 font-semibold mb-4">Create New Blog</h1> 
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg"> 
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Title</label> 
                    <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    /> 
                </div> 
                <div className="mb-4"> 
                    <label className="block text-gray-700 mb-2">Description</label> 
                    <textarea 
                        className="w-full p-2 border border-gray-300 rounded" 
                        required
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    /> 
                </div> 
                <div className="mb-4"> 
                    <label className="block text-gray-700 mb-2">Author</label> 
                    <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded" 
                        required 
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    /> 
                </div> 
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    { !isPending ? 'Create Blog' : 'Adding Blog...' }
                </button>
            </form>
            {/* {error && <h2 className="text-red-600 text-center">{error}</h2>} 
            {success && <h2 className="text-green-600 text-center">Blog created successfully!</h2>}  */}
        </div>
    );
}

export default Create;