import Header from "../components/header";

const Feed = () => {

    const userName = localStorage.getItem("userName");
    return (
        <>
            <Header/>
        </>
    );
}

export default Feed;