import { useState } from "react";
import { Star } from "lucide-react";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      name: "Rahul Sharma",
      rating: 5,
      text: "Amazing platform for startup validation.",
    },
    {
      name: "Priya Patil",
      rating: 4,
      text: "Helped me analyze market opportunities.",
    },
    {
      name: "Amit Kumar",
      rating: 5,
      text: "Excellent competitor analysis features.",
    },
  ]);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = () => {
    if (!name || !text) return;

    const newReview = {
      name,
      text,
      rating,
    };

    setReviews([newReview, ...reviews]);

    setName("");
    setText("");
    setRating(5);
  };

  return (
    <div className="min-h-screen px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h1 className="text-6xl font-bold mb-4">
            Customer Reviews
          </h1>

          <p className="text-gray-400">
            See what entrepreneurs think about ProductScope AI.
          </p>

        </div>

        {/* Add Review */}

        <div
          className="
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          mb-12
          "
        >

          <h2 className="text-3xl font-bold mb-6">
            Add Your Review
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            mb-4
            "
          />

          <textarea
            rows={4}
            placeholder="Write your review..."
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            mb-4
            "
          />

          <select
            value={rating}
            onChange={(e) =>
              setRating(Number(e.target.value))
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            mb-6
            "
          >
            <option value={5}>
              ⭐⭐⭐⭐⭐ (5)
            </option>

            <option value={4}>
              ⭐⭐⭐⭐ (4)
            </option>

            <option value={3}>
              ⭐⭐⭐ (3)
            </option>

            <option value={2}>
              ⭐⭐ (2)
            </option>

            <option value={1}>
              ⭐ (1)
            </option>
          </select>

          <button
            onClick={handleSubmit}
            className="
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            hover:scale-105
            transition
            "
          >
            Submit Review
          </button>

        </div>

        {/* Reviews Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              hover:scale-105
              transition
              "
            >

              <div className="flex mb-4">

                {[...Array(review.rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                    />
                  )
                )}

              </div>

              <h2 className="text-2xl font-bold mb-3">
                {review.name}
              </h2>

              <p className="text-gray-400">
                {review.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}