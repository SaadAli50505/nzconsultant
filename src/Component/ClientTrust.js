import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ClientTrust.css";
import { db } from "../firebase"; // Import Firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Helmet } from "react-helmet";
import googleLogo from "./img/google logo.png";

function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const StarRatingInput = ({ value, onChange }) => (
  <div className="star-rating-input-glass">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= value ? "star filled" : "star"}
        onClick={() => onChange(star)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" ? onChange(star) : null)}
      >
        <FaStar />
      </span>
    ))}
  </div>
);

const ClientTrust = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 0, review: "" });

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, "reviews");
      const reviewsSnapshot = await getDocs(reviewsCollection);
      const reviewsList = reviewsSnapshot.docs.map((doc) => doc.data());
      setReviews(reviewsList);
    };

    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleStarChange = (rating) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { ...form };
    const reviewsCollection = collection(db, "reviews");
    await addDoc(reviewsCollection, newReview);
    setReviews([...reviews, newReview]);
    setForm({ name: "", rating: 0, review: "" });
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="client-trust-glass-bg">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <h1 className="client-trust-glass-title">Clients Who Trust Us</h1>
      <div className="client-trust-glass-content">
        <div className="client-trust-glass-carousel">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3500}
            showDots={true}
            className="reviews-glass"
            arrows={false}
            renderDotsOutside={true}
          >
            {reviews.map((review, index) => (
              <div key={index} className="review-card-glass">
                <div className="review-avatar-glass">
                  <span>{getInitials(review.name)}</span>
                </div>
                <FaQuoteLeft className="review-quote-bg-glass" />
                <div className="review-content-glass">
                  <p className="review-text-glass">{review.review}</p>
                  <div className="review-info-glass">
                    <span className="review-name-glass">{review.name}</span>
                    <div className="rating-glass">
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                          <span key={i}>
                            {review.rating >= ratingValue ? (
                              <FaStar />
                            ) : (
                              <FaRegStar />
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <img
                    src={googleLogo}
                    alt="Google logo"
                    className="google-logo-review"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="client-trust-glass-divider"></div>
        <div className="review-form-glass">
          <h2>Submit a Review</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
            <StarRatingInput value={form.rating} onChange={handleStarChange} />
            <textarea
              name="review"
              placeholder="Your Review"
              value={form.review}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientTrust;
