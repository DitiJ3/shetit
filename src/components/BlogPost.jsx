import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Fishing in Batllava lake",
      content: `This is the best fishing spot for trout in all of kosovo. A calm unique lake which you can hop on a boat and catch the freshest fish. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image:
        "https://cdn.shopify.com/s/files/1/0060/3770/0678/t/19/assets/d8eeeec830b3--Main-image-1669px-x-624px.jpg?v=1720567116",
    },
  ];

  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Blog post not found!</p>;
  }

  return (
      <>
            <h2 className="text-xl text-center p-1 font-semibold bg-white bg-gradient-to-r from-blue-500 to-green-500 text-white">View these unique blog posts made by our amazing community</h2>
      <div className="p-10 ">
        <div>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <img src={post.image} alt={post.title} className="rounded-lg mb-4" />
          <p>{post.content}</p>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default BlogPost;
