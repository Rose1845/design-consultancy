import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <>
      <div
        data-aos="fade-out "
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        style={{ flexDirection: "column" }}
        className="container-fluid image pt-3 d-flex justify-content-center align-items-center "
      >
        <h1 className="text-center text-white">Make room for better living</h1>
        <p
          data-os="zoom-in"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          className="text-center text-bold text-white"
        >
          Let our accomplished team of online interior designers submit concepts
          for your space — it's easy and convenient!
        </p>
        <div className="d-flex justify-content-center">
          <button
            style={{ backgroundColor: "orange", border: " solid orange" }}
            className="btn btn-primary p-2"
          >
            Find your style
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="img"
              className="img-fluid"
            />
          </div>

          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <h1 className="text-center">Love the space you are in</h1>
              <p className="text-center">
                Our online interior design process is designed to help you
                maximize your decorating budget. With one flat fee you won’t get
                any surprise costs and our transparent pricing on your final
                project allows you to see exactly how much each item costs
                before you make the final decision on what to buy.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  style={{ backgroundColor: "orange", border: " solid orange" }}
                  className="btn btn-primary p-2"
                >
                  See us in action
                </button>
              </div>
            </div>
          </div>
          {/* various styles */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="img"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h1 className="text-center">Show us your style</h1>
                <p>
                  Have big dreams for your space? Share your inspiration, goals,
                  and budget and we’ll help you design a space you love.{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-center">Show us your style</h1>
                <p>
                  Have big dreams for your space? Share your inspiration, goals,
                  and budget and we’ll help you design a space you love.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-center">Show us your style</h1>
                <p>
                  Have big dreams for your space? Share your inspiration, goals,
                  and budget and we’ll help you design a space you love.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
