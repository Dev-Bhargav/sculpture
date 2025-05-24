import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  return (
    <div className="flex ">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} size={18} fill="gold" color="gold" />
      ))}

      {hasHalfStar && (
        <Star key="half" size={18} fill="url(#half-grad)" color="gold" />
      )}

      {Array.from({ length: totalStars - fullStars - (hasHalfStar ? 1 : 0) }).map(
        (_, i) => (
          <Star key={`empty-${i}`} size={18} color="gray" />
        )
      )}

      {/* Gradient definition for half star */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="half-grad" x1="0" x2="100%" y1="0" y2="0">
            <stop offset="50%" stopColor="gold" />
            <stop offset="50%" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default StarRating;