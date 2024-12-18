import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {
            title: "My new website",
            content: "Lorem ipsum...",
            author: "John Doe",
            id: 1,
        },
        {
            title: "Welcome Party",
            content: "Lorem ipsum...",
            author: "Alex Maddison",
            id: 2,
        },
        {
            title: "Web dev tools",
            content: "Lorem ipsum...",
            author: "Lukas Graham",
            id: 3,
        },
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect ran")
    }, [])

    return (
        <div className='mt-10'>

            <Bloglist blogs={blogs} handleDelete={handleDelete}/>

        </div>
    );
}
 
export default Home;