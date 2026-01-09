// src/pages/Article.jsx
import { useParams } from "react-router-dom";
import { blogCards } from "../../data/blogs.data";

const Article = () => {
  const { id } = useParams();

  // find blog by id
  const blog = blogCards.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return <h2>Article not found</h2>;
  }

  return (
    <article >
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", borderRadius: "12px" }}
      />

      <p style={{ marginTop: "16px", color: "#555" }}>
        {blog.category}
      </p>

      <h1 style={{ margin: "12px 0" }}>{blog.title}</h1>

      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <img
          src={blog.author.avatar}
          alt={blog.author.name}
          width="40"
          height="40"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <strong>{blog.author.name}</strong>
          <p style={{ fontSize: "14px", color: "#777" }}>
            {blog.author.createdAt}
          </p>
        </div>
      </div>

      <p style={{ lineHeight: "1.7", fontSize: "18px" }}>
        {blog.description}
      </p>
    </article>
  );
};

export default Article;
