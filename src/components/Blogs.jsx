import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the content of the first blog post.",
      image:
        "https://cdn.shopify.com/s/files/1/0060/3770/0678/t/19/assets/d8eeeec830b3--Main-image-1669px-x-624px.jpg?v=1720567116",
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
        "https://images.ctfassets.net/tftu3vbfu92u/13BiQrm2mVSr0SDkVNSeDi/4a67ad631485736ee3eb8fe799a99f70/cave-feature.jpg?q=75&&w=1024&fm=webp",
    },
    {
      id: 4,
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      image:
        "https://www.les3vallees.com/media/cache/hero_single/20240627-cyclingtrophy-figurant-ete-coldelaloze-meribel-cc-lailafranchini-expinf-1920x1080-895.jpg",
    },
    {
      id: 5,
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      image:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_640,q_60,w_1600/v1/clients/montroseco/MOBT_winter_002_725c1208-7304-4fcd-bbe2-a33702faab5e.jpg",
    },
    {
      id: 6,
      title: "Third Blog Post",
      content: "This is the content of the third blog post.",
      image:
        "https://www.reserveamerica.com/articles/wp-content/uploads/2024/07/43639c27-4e1d-4ce3-9715-0b1681e37b74.jpg",
    },
  ];

  return (
    <div>
      <div className="mx-auto py-10 px-16">
        <div className="grid grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id}>
              <div
                className="p-6 border-solid border-2 rounded-3xl h-80 relative bg-cover bg-center text-white shadow-lg hover:p-4 transition-all duration-300"
                style={{
                  backgroundImage: `url(${post.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-0 w-full p-4">
                  <h2 className="font-bold text-lg">{post.title}</h2>
                  <p className="truncate">{post.content}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
