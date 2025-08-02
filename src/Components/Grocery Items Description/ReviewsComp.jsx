import React, { useState } from "react";
import { FaStar, FaThumbsDown, FaThumbsUp, FaUser } from "react-icons/fa";

const ReviewsComp = () => {
  // Reviews array with static values
  const [reviews, setReviews] = useState([
    {
      name: "ali",
      message: "This is a good shirt",
      daysAgo: 5,
      likes: 0,
      dislikes: 0,
    },
    {
      name: "asad",
      message: "I strongly recommend this",
      daysAgo: 3,
      likes: 0,
      dislikes: 0,
    },
    {
      name: "bilal",
      message: "Nice stuff",
      daysAgo: 7,
      likes: 0,
      dislikes: 0,
    },
    {
      name: "ahmad",
      message: "Fair price",
      daysAgo: 4,
      likes: 0,
      dislikes: 0,
    },
    {
      name: "ibrahim",
      message: "Great stuff according to price",
      daysAgo: 6,
      likes: 0,
      dislikes: 0,
    },
  ]);

  // Handle like
  const handleLikeCount = (index) => {
    setReviews((prev) =>
      prev.map((review, i) =>
        i === index ? { ...review, likes: review.likes + 1 } : review
      )
    );
  };

  // Handle dislike
  const handleDislikeCount = (index) => {
    setReviews((prev) =>
      prev.map((review, i) =>
        i === index ? { ...review, dislikes: review.dislikes + 1 } : review
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h1 className="font-bold text-2xl text-center mb-6 text-gray-800">
        Customer Reviews
      </h1>

      <ul>
        {reviews.map((review, index) => (
          <li
            key={index}
            className="border rounded-md p-4 mb-4 shadow-sm bg-white"
          >
            {/* User & Meta Info */}
            <div className="flex items-center gap-2 mb-2">
              <FaUser className="text-gray-600" />
              <span className="font-semibold capitalize text-gray-800">
                {review.name}
              </span>
              <span className="text-sm text-gray-500 ml-auto">
                {review.daysAgo} days ago
              </span>
            </div>

            {/* Review message */}
            <div className="text-gray-700 mb-2">{review.message}</div>

            {/* Star Rating (static for now) */}
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Like/Dislike Buttons */}
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <button
                onClick={() => handleLikeCount(index)}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <FaThumbsUp />
                <span>{review.likes}</span>
              </button>
              <button
                onClick={() => handleDislikeCount(index)}
                className="flex items-center gap-1 hover:text-red-500"
              >
                <FaThumbsDown />
                <span>{review.dislikes}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsComp;
