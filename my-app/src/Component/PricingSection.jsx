// src/components/Pricing.js
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./PricingSection.css";

// Custom CSS for additional styling

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="row">
          <div>
            <h5>API Pricing</h5>
            <span>
              Our API pricing is based on the model used and the number of
              tokens processed. Here's a breakdown of the costs:
            </span>
            <div className="container">
              <div className="heading"></div>

              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                  <div className="price-container">
                    <div>
                      <h5 className="text-light text-center p-5">API Plans</h5>
                    </div>
                    <div>
                      <div className="price">
                        <h5>
                          $0.002 <br />/ 1K Token
                        </h5>
                      </div>
                      <div className="d-flex justify-content-between p-2 text-light">
                        <p>OpenAi</p> | | <p>GPT 3.5</p>
                      </div>

                      <div className="text-center  text-light ">
                        <h4>Token Estimation</h4>
                        <hr />
                        <p>
                          On average, 1 token is approximately 4 characters or
                          0.75 words. For precise pricing, we recommend using
                        </p>
                        <button className="btn btn-success mb-3 fw-bold">
                          Select Plans
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="price-container">
                    <div>
                      <h5 className="text-light text-center p-5">API Plans</h5>
                    </div>
                    <div>
                      <div className="price">
                        <h5>
                          $0.03 <br />/ 1K Token
                        </h5>
                      </div>
                      <div className="d-flex justify-content-between p-2 text-light">
                        <p>OpenAi</p> | | <p>GPT 4</p>
                      </div>
                      <div className="text-center  text-light ">
                        <h4>Token Estimation</h4>
                        <hr />
                        <p>
                          On average, 1 token is approximately 4 characters or
                          0.75 words. For precise pricing, we recommend using
                        </p>
                        <button className="btn btn-success mb-3 fw-bold">
                          Select Plans
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="price-container">
                    <div>
                      <h5 className="text-light text-center p-5">API Plans</h5>
                    </div>
                    <div>
                      <div className="price">
                        <h5>
                          $0.0008 <br />/ 1K Token
                        </h5>
                      </div>
                      <div className="d-flex justify-content-between  p-2 text-light">
                        <p>TogetherAi</p>
                        <br />
                        <p>Llama-2-70b</p>
                      </div>
                      <div className="text-center  text-light ">
                        <h4>Token Estimation</h4>
                        <hr />
                        <p>
                          On average, 1 token is approximately 4 characters or
                          0.75 words. For precise pricing, we recommend using
                        </p>
                        <button className="btn btn-success mb-3 fw-bold">
                          Select Plans
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="price-container">
                    <div>
                      <h5 className="text-light text-center p-5">API Plans</h5>
                    </div>
                    <div>
                      <div className="price">
                        <h5>
                          $0.0006 <br />/ 1K Token
                        </h5>
                      </div>
                      <div className="d-flex justify-content-between  p-2 text-light">
                        <p>TogetherAi</p>
                        <br />
                        <p>Llama-2-13b</p>
                      </div>
                    </div>
                    <div className="text-center  text-light ">
                      <h4>Token Estimation</h4>
                      <hr />
                      <p>
                        On average, 1 token is approximately 4 characters or
                        0.75 words. For precise pricing, we recommend using our
                      </p>
                      <button className="btn btn-success mb-3 fw-bold">
                        Select Plans
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                    <ArrowBackIcon />
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <ArrowForwardIcon />
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other pricing plans */}
      </div>
    </section>
  );
};

export default Pricing;
