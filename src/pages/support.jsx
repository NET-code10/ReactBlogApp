import { Mail, MessageCircle, HelpCircle } from "lucide-react";

const supportOptions = [
  {
    icon: <Mail className="w-8 h-8 text-indigo-600" />,
    title: "Email Support",
    description: "Get help via email within 24 hours.",
    action: "support@example.com"
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-indigo-600" />,
    title: "Live Chat",
    description: "Chat with our support team in real-time.",
    action: "Start Chat"
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-indigo-600" />,
    title: "Help Center",
    description: "Browse FAQs and guides to solve issues fast.",
    action: "Visit FAQs"
  }
];

const Support = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            We’re Here to <span className="text-indigo-600">Help You</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Need assistance? Our support team is ready to help you anytime.
          </p>
        </div>

        {/* Support Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportOptions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <p className="mt-4 font-medium text-indigo-600">
                {item.action}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Contact Support
          </h2>

          <form className="mt-8 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <textarea
              rows="4"
              placeholder="Describe your issue"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Support;
