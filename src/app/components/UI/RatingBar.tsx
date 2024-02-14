import React from 'react';

const RatingBar = () => {
  // Convert rating to percentage
  const rating = 3.5;
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const remainingStars = 5 - Math.ceil(rating);

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Full star Unicode character
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-500">&#9734;</span>); // Half star Unicode character
    }

    // Remaining empty stars
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">&#9734;</span>); // Empty star Unicode character
    }

    return stars;
  };

  return (
    <>
      {/* <div className="w-20 mr-3">Rating:</div> */}
      <div className="flex">
        {renderStars()}
      </div>
      {/* <div className="ml-2">{rating}/5</div> */}
    </>
  );
};

export default RatingBar;