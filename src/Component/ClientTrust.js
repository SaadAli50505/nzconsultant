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
  const extraReviews = [
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUPFsjNTYCffL_yPWjBFf9YTQ5H8yRCkSq6Xl2zxvj3yY4PBXKn=w90-h90-p-rp-mo-br100",
      rating: 5,
      name: "Mian Rauf",
      review:
        "The best Education consultancy in Australia. Highly recommend to everyone who is seeking for their help in PR journey. NZ consultation got very cooperative and expert team members who work collaboratively with all issues. Mr Zubair helped me throughout my PR journey. I will strongly recommend NZ Consultant by considering their services.",
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWaaeqwTmzS6SrF0DEBIo2QoDGiv-jEeHzLW-ULBrjl8yFWlbqv=w90-h90-p-rp-mo-br100",
      rating: 5,
      name: "Ali Rehman",
      review:
        "I sincerely want to express my heartfelt gratitude to Mr. Zubair (NZ Education Consultants) for their unwavering support and care throughout my visa, admission, and PR journey. Their dedication, professionalism, and the way they treated my case as if it were their own were truly remarkable. What sets them apart is their genuine effort to recommend options that are better for you, ensuring you gain the most benefits while minimizing expenses. It's rare to find someone so committed to helping others succeed. I feel incredibly fortunate to have had their guidance and would highly recommend them to anyone seeking the best assistance. ✨",
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWWD2DXNtDQvBQYB4Gbg1E_IgHtgf_7FASHAnG3R6Z_67ZEgp7S=w90-h90-p-rp-mo-br100",
      rating: 5,
      name: "faheem mavia",
      review:
        "I had the pleasure of working with NZ Education consultants, and I can confidently say that their expertise and professionalism exceeded my expectations. From the outset, they demonstrated a deep understanding of my needs and provided tailored solutions that were not only insightful but also highly practical. Their approach was always collaborative, ensuring that I felt empowered throughout the process. I highly recommend NZ Education Consultants to anyone looking for a knowledgeable and dependable consultant. Their skills and dedication make them a true asset.",
    },
    {
      img: "https://lh3.googleusercontent.com/a/ACg8ocIhcCk0TTzlIk4DDY_43tiiOe4biAfjHq7y69igLE3ZpPxrvg=w45-h45-p-rp-mo-br100",
      rating: 5,
      name: "sheheryar bhatti",
      review:
        "I sincerely want to express my heartfelt gratitude to Mr. Zubair (NZ Education Consultants) for their unwavering support and care throughout my visa, admission, and PR journey. Their dedication, professionalism, and the way they treated my case as if it were their own were truly remarkable. What sets them apart is their genuine effort to recommend options that are better for you, ensuring you gain the most benefits while minimizing expenses. It's rare to find someone so committed to helping others succeed. I feel incredibly fortunate to have had their guidance and would highly recommend them to anyone seeking the best assistance. ✨",
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjX517N7bkSQoeIcygdGhLR8Cw7X8QmpZDMLJdG1zvYo65LeHJ3LWQ=w90-h90-p-rp-mo-br100",
      rating: 5,
      name: "Athar Gondal",
      review:
        "I will always be grateful for your service. Thank you so much for the guidance and the hard work. My heartfelt thanks again to Zubair bhai for your kind support. I definitely recommend NZ Education Consultants because they always answered all our questions and concern at all hours without getting annoyed 😇. Always successfully providing right guidance . Just trust them and the process.",
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjWH6mvKJYIU9qCkXjtbC3jtuBiq6-kxoHgY5GOr6GqDTU9W45s5=w90-h90-p-rp-mo-br100",
      rating: 5,
      name: "Subtain Ali",
      review:
        "I had the best experience with my NZ consultant for my visa. They provided excellent information and their work process is amazing. They don’t just give consultancy papers; they also provide regular updates and guide you towards achieving your dreams.",
    },
    {
      img: "https://lh3.googleusercontent.com/a/ACg8ocKrHnA_-TrIJGdaHlWiCm2Nh9Qm15qfOwnw_ImPRZqLfe7wgA=w90-h90-p-rp-mo-br100",
      rating: 5,
      name: "Ali Raza Dhillon",
      review:
        "One of the best migration and educational team in Australia. Highly recommend to save your time and money. They will give u transparent and honest advise, specially best with natural justice process. Zubair sir deal with throughout my process he is so calm and kind, He always given me the best advice that help me alot here in australia.  THANKs to NZ team. Highly recommended if you want to choose the right path for your Permanent residency in australia.",
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUO5NB4od6UZay6y2NDU_ZohAuInZgx_P08g4j6sYun_KZthA5d=w45-h45-p-rp-mo-br100",
      rating: 5,
      name: "Haider Butt",
      review:
        "Highly recommend to everyone who needs help in their immigration purposes. Consultants are really helpful and whenever u contact them they are ready to help. Recommend 💯💯 …",
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUXRqGTnfubWZV83PlSo7kINDPwlpEE6MRLkvsTM7PGg4RExHo=w90-h90-p-rp-mo-br100",
      rating: 5,
      name: "NASEER LIAQAT",
      review:
        "I had a great experience with NZ Consultants! Their team was knowledgeable, helpful, and efficient in guiding me through the process of obtaining my Australian student visa. Their expertise and support made the entire process stress-free. I highly recommend their services to anyone seeking assistance with immigration to Australia or New Zealand.",
    },
    {
      img: "https://lh3.googleusercontent.com/a/ACg8ocI0JDFzvi8_I9vQaA8Rs0p4IW-cdDmKvzKOY_kGcTvnQWwdUw=w90-h90-p-rp-mo-br100",
      rating: 5,
      name: "Muhammad ilyas",
      review:
        "Brother zubair is the great person because he helped  me a lot. He showed  me the right path for PR. He is very honest,  trustable and helpful as well.",
    },
  ];

  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 0, review: "" });

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, "reviews");
      const reviewsSnapshot = await getDocs(reviewsCollection);
      const reviewsList = reviewsSnapshot.docs.map((doc) => doc.data());
      setReviews([...extraReviews, ...reviewsList]);
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
                  {review.img ? (
                    <img
                      src={review.img}
                      alt={review.name}
                      className="review-avatar-image"
                    />
                  ) : (
                    <span>{getInitials(review.name)}</span>
                  )}
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
