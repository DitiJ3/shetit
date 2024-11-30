import Header from "../components/Header";
import Blogs from "../components/Blogs";

const Feed = () => {
    
    return (
        <>
            <Header/>
            <h2 className="text-xl text-center p-1 font-semibold mt-16 bg-white bg-gradient-to-r from-blue-500 to-green-500 text-white">Grab a read about our newest and trendiest travel places</h2>
            <Blogs/>
        </>
    );
}

export default Feed;