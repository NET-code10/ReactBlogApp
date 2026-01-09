// src/pages/FAQs.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faqs.data";

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      {/* Page Title */}
      <h1 className="heading1">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-10">
        Find answers to common questions about our platform.
      </p>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="border border-gray-300 rounded-lg bg-white"
            >
              {/* Question */}
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-4 py-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-4 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
