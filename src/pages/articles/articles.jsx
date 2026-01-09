// src/pages/Articles.jsx
import { useState, useMemo } from "react";
import { blogCards } from "../../data/blogs.data";
import { Link, useNavigate, useMatch, Outlet } from "react-router-dom";

import { categories } from "../../data/categories";

const Articles = () => {
  let navigate = useNavigate();
  let isMatch = useMatch("/articles");
  let catStyle =
    "focus:bg-black focus:text-white cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border";
  let [category, setCetegory] = useState(null);

  let matchedCategory = blogCards.filter((blog) => blog.category === category);
  return (
    <>
      {isMatch && (
        <section className="md:pt-10">
          {/* Page Title */}
          <h1
            className="heading1"
            style={{ fontSize: "36px", marginBottom: "10px" }}
          >
            Articles
          </h1>
          <p style={{ color: "#666", marginBottom: "30px" }}>
            Browse articles by category or search for topics you love
          </p>

          {/* Search */}
          <input
            type="text"
            placeholder="Search articles..."
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              marginBottom: "24px",
            }}
          />

          {/* Categories */}
          <div className="flex gap-3 flex-wrap">
            <button
              style={{ background: "black", color: "white" }}
              className={catStyle}
            >
              All
            </button>
            {categories.map((cats, index) => {
              return (
                <button
                  onClick={() => setCetegory(cats)}
                  className={catStyle}
                  key={index}
                >
                  {cats}
                </button>
              );
            })}
          </div>

          {/* Blog Grid */}
          <div
            className="md:mt-10 "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {/*  */}
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 h-70 md:h-auto ">
              {blogCards.map((blog) => (
                <div
                  onClick={() => navigate(`article/${blog.id}`)}
                  key={blog.id}
                  className="h-full  rounded flex flex-col gap-5 border border-gray-200 p-1 "
                >
                  <img
                    className="aspect-video w-full rounded  "
                    src={blog.image}
                    alt={blog.title}
                  />
                  <span>{blog.category}</span>
                  <h3 className="font-bold">{blog.title}</h3>
                  <p>{blog.description}</p>

                  <div className="flex justify-between items-center px-2">
                    <div className="flex gap-3 items-center">
                      <img
                        className="rouned rounded-full h-14 w-14 border-white"
                        src={blog.author.avatar}
                        alt={blog.author.name}
                      />
                      <strong>{blog.author.name}</strong>
                    </div>
                    <div>
                      <small>{blog.author.createdAt}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* / */}
          </div>
        </section>
      )}

      <Outlet />
    </>
  );
};

export default Articles;
