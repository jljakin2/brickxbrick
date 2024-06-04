"use client";

import { useState } from "react";
import { allPosts } from "contentlayer/generated";
import PostItem from "./post-item";

export default function Podcasts() {
  const [category, setCategory] = useState<string>("All");

  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="md:flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4 md:mb-0">
              Latest Podcasts
            </h2>
            {/* Filters */}
            <div className="flex flex-wrap -m-1">
              <button
                className={`font-medium text-sm bg-white hover:bg-gray-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm ${
                  category === "All"
                    ? "text-red-500 !bg-white"
                    : "text-gray-500"
                }`}
                onClick={() => setCategory("All")}
              >
                All
              </button>
              <button
                className={`font-medium text-sm bg-white hover:bg-gray-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm ${
                  category === "Free Flow"
                    ? "text-red-500 !bg-white"
                    : "text-gray-500"
                }`}
                onClick={() => setCategory("Free Flow")}
              >
                Free Flow
              </button>
              <button
                className={`font-medium text-sm bg-white hover:bg-gray-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm ${
                  category === "Deep Dives"
                    ? "text-red-500 !bg-white"
                    : "text-gray-500"
                }`}
                onClick={() => setCategory("Deep Dives")}
              >
                Deep Dives
              </button>
              <button
                className={`font-medium text-sm bg-white hover:bg-gray-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm ${
                  category === "Interviews"
                    ? "text-red-500 !bg-white"
                    : "text-gray-500"
                }`}
                onClick={() => setCategory("Interviews")}
              >
                Interviews
              </button>
            </div>
          </div>

          {/* Podcasts */}
          <div>
            {allPosts.map((post, postIndex) => (
              <PostItem key={postIndex} selectedCategory={category} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
