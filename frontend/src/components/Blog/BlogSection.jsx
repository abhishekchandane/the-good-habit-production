import "./BlogSection.css";

const blogs = [
  {
    id: 1,
    image: "/images/blogs/b1.jpg",
    category: "Food",
    readTime: "5 Min Read",
    title: "Behind the Billboard: Meet Charles from our Campaign!",
    description:
      "SuperYou isn’t about that sugar overload life. We keep it light with minimal sugar, giving your...",
    link: "#",
  },
  {
    id: 2,
    image: "/images/blogs/b1.jpg",
    category: "Taste",
    readTime: "8 Min Read",
    title: "Understanding the Nutritional Value of Yeast Protein",
    description:
      "In the realm of alternative proteins, yeast protein has rapidly gained recognition for its imp...",
    link: "#",
  },
  {
    id: 3,
    image: "/images/blogs/b1.jpg",
    category: "Food",
    readTime: "8 Min Read",
    title: "Protein-Packed Powerhouse - The Power of SuperYou",
    description:
      "SuperYou isn’t about that sugar overload life. We keep it light with minimal sugar, giving your...",
    link: "#",
  },
  {
    id: 4,
    image: "/images/blogs/b1.jpg",
    category: "Health",
    readTime: "10 Min Read",
    title: "Fermented Protein: A Gut-Health Superpower",
    description:
      "Years of extensive research have helped highlight the impact a gut has on overall well-being...",
    link: "#",
  },
];

export default function BlogSection() {
  const scrollLeft = () => {
    document.getElementById("blog-list").scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("blog-list").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="blog-section" id="blog-section"> 
      <h2 className="blog-heading">READ OUR LATEST BLOGS</h2>

      <div id="blog-list" className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />

            <div className="blog-meta">
              <span className="blog-category">{blog.category}</span>
              <span className="blog-time">{blog.readTime}</span>
            </div>

            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <a href={blog.link} className="blog-readmore">
              READ MORE
            </a>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="blog-controls">
        <button onClick={scrollLeft}>&lt;</button>
        <button onClick={scrollRight}>&gt;</button>
      </div>
    </section>
  );
}
