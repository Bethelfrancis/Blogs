import Bloglist from "../component/Bloglist";
import useFetch from "../customHook/useFetch";

const Home = () => {
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className='py-10 px-16'>
            <h1 className="text-3xl text-gray-800 font-semibold mb-4">All Blogs!</h1>

            { error && <h2 className="text-[25px] text-center text-blue-600 font-semibold">{ error }</h2> }
            { isPending && <h2 className="text-[20px] text-center text-blue-600 font-semibold">Loading...</h2> }
            { blogs && <Bloglist blogs={blogs} /> }

        </div>
    );
}
 
export default Home;