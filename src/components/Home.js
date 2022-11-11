import React from "react";
import Category from "./Category";
import Services from "./Services";
import foodImage from "../assets/images/food.png";
import prepaidIcon from "../assets/images/prepaid.png";
import tvIcon from "../assets/images/tv.jpeg";
import loansIcon from "../assets/images/loans.jpeg";
import promotionIcon from "../assets/images/promotion.png";
import newsIcon from "../assets/images/news.jpeg";
import blogIcon from "../assets/images/blog.jpeg";
import jobsIcon from "../assets/images/jobs.jpeg";
import feedbackIcon from "../assets/images/feedback.jpeg";
import gasIcon from "../assets/images/gas.jpeg";
import electricityIcon from "../assets/images/electricity.jpeg";
import waterIcon from "../assets/images/water.jpeg";
import moreIcon from "../assets/images/more.jpeg";
import { categories } from "../data/categories";
import { services } from "../data/services";

const Home = () => {
  return (
    <div className="home-body">
      <section className="img-slider-container">
        <div className="img-slider">
          <img src={foodImage} />
          <img src={foodImage} />
          <img src={foodImage} />
          <img src={foodImage} />
          <img src={foodImage} />
          <img src={foodImage} />
        </div>
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </section>
      <section className="options">
        {/* <FontAwesomeIcon icon="fa-regular fa-lightbulb" /> */}
        <ul>
          <li>
            <img src={prepaidIcon} />
            <p>Prepaid Mobile Recharge</p>
          </li>
          <li>
            <img src={tvIcon} />
            <p>DTH Recharge</p>
          </li>
          <li>
            <img src={loansIcon} />
            <p>Loans</p>
          </li>
          <li>
            <img src={promotionIcon} />
            <p>Promotion</p>
          </li>
          <li>
            <img src={newsIcon} />
            <p>News</p>
          </li>
          <li>
            <img src={blogIcon} />
            <p>Blog</p>
          </li>
          <li>
            <img src={jobsIcon} />
            <p>Jobs</p>
          </li>
          <li>
            <img src={feedbackIcon} />
            <p>Anonymous Feedback</p>
          </li>
          <li>
            <img src={gasIcon} />
            <p>Gas Booking</p>
          </li>
          <li>
            <img src={electricityIcon} />
            <p>Electricity Bill</p>
          </li>
          <li>
            <img src={waterIcon} />
            <p>Water Bill</p>
          </li>
          <li>
            <img src={moreIcon} />
            <p>See More</p>
          </li>
        </ul>
      </section>
      <div className="section-title">Popular Service Products</div>
      <Category categories={categories} />
      <div className="section-title">Services We Provide</div>
      <Services services={services} />
    </div>
  );
};

export default Home;
