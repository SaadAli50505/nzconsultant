import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ClientTrust.css";
import { db } from "../firebase"; // Import Firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Helmet } from "react-helmet";

const ClientTrust = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", rating: "", review: "" });

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
    <div className="client-trust-container">
      <Helmet>
        <title>NZ Education Consultants</title>
        <meta
          name="description"
          content="NZ Education Consultants. Explore world-class education opportunities in Australia "
        />
      </Helmet>
      <h1>Clients Who Trust Us</h1>
      <div className="content">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={2000}
          className="reviews"
        >
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.name}</h3>
              <div className="rating">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 0.5;
                  return (
                    <span key={i}>
                      {review.rating >= i + 1 ? (
                        <FaStar />
                      ) : review.rating >= ratingValue ? (
                        <FaStarHalfAlt />
                      ) : (
                        <FaRegStar />
                      )}
                    </span>
                  );
                })}
              </div>
              <p>{review.review}</p>
            </div>
          ))}
        </Carousel>
        <div className="review-form">
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
            <input
              type="number"
              name="rating"
              placeholder="Rating (0-5)"
              value={form.rating}
              onChange={handleInputChange}
              step="0.5"
              min="0"
              max="5"
              required
            />
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
