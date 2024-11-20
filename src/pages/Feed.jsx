import Header from "../components/header";
import Blogs from "../components/Blogs";

const Feed = () => {

    const userName = localStorage.getItem("userName");
    return (
        <>
            <Header/>
            <div>
                <h1>Welcome to your feed, {userName}</h1>
                <h2>Here you can see all the latest updates</h2>
            </div>
            <Blogs/>
        </>
    );
}

export default Feed;