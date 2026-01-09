import { Users, Target, Rocket } from "lucide-react";

const values = [
  {
    icon: <Target className="w-8 h-8 text-indigo-600" />,
    title: "Our Mission",
    description:
      "To empower creators with a simple, powerful platform to share ideas and inspire the world."
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Our Community",
    description:
      "A growing community of writers, developers, and thinkers who believe in knowledge sharing."
  },
  {
    icon: <Rocket className="w-8 h-8 text-indigo-600" />,
    title: "Our Vision",
    description:
      "To become a trusted space where quality content and meaningful conversations thrive."
  }
];

const About = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-indigo-600">Us</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We are building a modern blogging platform designed to help creators
            share their voice, grow their audience, and make an impact.
          </p>
        </div>

        {/* Story */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Our Story
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our journey started with a simple idea: writing should be easy,
              accessible, and meaningful. We noticed many creators struggling
              with complex tools and limited reach, so we decided to build a
              platform focused on simplicity, performance, and community.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Today, we continue to improve our platform by listening to our
              users and evolving with modern web technologies.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <p className="text-gray-400">📸 Team / Platform Image</p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            What We Believe In
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
