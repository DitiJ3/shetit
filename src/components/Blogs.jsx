const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the content of the first blog post.",
      image:
        "https://skyhookcontentful.imgix.net/6MPvB1nbHtL2AQbxMi2D7y/af0829fe9fc4733a754e15705d99d33d/pixabay-pehrlich-himalayas.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=1%3A1&w=576px&ixlib=react-9.7.0",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "This is the content of the second blog post.",
      image:
        "https://skyhookcontentful.imgix.net/6MPvB1nbHtL2AQbxMi2D7y/af0829fe9fc4733a754e15705d99d33d/pixabay-pehrlich-himalayas.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=1%3A1&w=576px&ixlib=react-9.7.0",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      image:
        "https://skyhookcontentful.imgix.net/6MPvB1nbHtL2AQbxMi2D7y/af0829fe9fc4733a754e15705d99d33d/pixabay-pehrlich-himalayas.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=1%3A1&w=576px&ixlib=react-9.7.0",
    },
    {
      id: 4,
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      image:
        "https://skyhookcontentful.imgix.net/6MPvB1nbHtL2AQbxMi2D7y/af0829fe9fc4733a754e15705d99d33d/pixabay-pehrlich-himalayas.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=1%3A1&w=576px&ixlib=react-9.7.0",
    },
    {
      id: 5,
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      image:
        "https://skyhookcontentful.imgix.net/6MPvB1nbHtL2AQbxMi2D7y/af0829fe9fc4733a754e15705d99d33d/pixabay-pehrlich-himalayas.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=1%3A1&w=576px&ixlib=react-9.7.0",
    },
  ];

  return (
    <div>
      <div className="mx-auto p-20 ">
        <div className="grid grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              className="p-6 shadow-xl rounded-3xl h-80 relative overflow-hidden"
              key={post.id}
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>

              {/* Text Content at the Bottom */}
              <div className="absolute bottom-0 w-full p-4 text-white bg-opacity-80">
                <h2 className="font-bold text-lg">{post.title}</h2>
                <p className="text-sm">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
