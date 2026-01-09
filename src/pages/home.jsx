import React from "react";
import Button from "../components/button";
import { features } from "../data/data.features";
import { cards } from "../data/cards";
import { blogCards } from "../data/blogs.data";
import { useNavigate } from "react-router-dom";
import {
  PenTool,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  BarChart,
  ArrowRight,
} from "lucide-react";

import FAQs from "./faqs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ArticlesSection />
      <FAQs />
    </>
  );
};

function ArticlesSection() {
  let navigate = useNavigate();
  return (
    <section className="flex flex-col items-center mt-12   md:mt-20 gap-3 ">
      <h3 className="heading1"> Lettest Articles </h3>
      <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 h-70 md:h-auto ">
        {blogCards.map((blog) => (
          <div
            onClick={() => navigate(`articles/article/${blog.id}`)}
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
    </section>
  );
}

function HeroSection() {
  let navigate = useNavigate();
  const features = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Intuitive Editor",
      description: "Write and format with our easy-to-use markdown editor",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Publish your content instantly with zero lag",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Built-in Audience",
      description: "Reach thousands of readers from day one",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Powerful Analytics",
      description: "Track your content performance with detailed insights",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center pt-16 md:pt-24">
          <h1 className="heading1">
            Share Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block md:inline-block md:ml-4">
              Thoughts with World
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A powerful blogging platform that helps you create, publish, and
            grow your audience. Start writing in minutes, no technical skills
            required.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              ClickAction={() => navigate("/dashboard")}
              content="Create Blog"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              ClickAction={() => navigate("/articles")}
              content="Explore"
              className=" text-black px-8 py-4 text-lg font-semibold  bg-white border-2
             border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-300 transform 
             hover:-translate-y-1"
            >
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-4 text-gray-500">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                />
              ))}
            </div>
            <p className="text-sm md:text-base">
              Join <span className="font-semibold text-gray-900">10,000+</span>{" "}
              bloggers already writing
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-colors duration-300">
                <div className="text-blue-600">{feature.icon}</div>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "10K+", label: "Active Blogs" },
            { value: "1M+", label: "Monthly Readers" },
            { value: "50K+", label: "Articles Published" },
            { value: "99%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="mt-2 text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
