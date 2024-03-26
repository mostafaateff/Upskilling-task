import React from "react";
import img1 from "../Assets/services-1.png";
import img2 from "../Assets/services-2.png";
// import img3 from "../Assets/services-3.jpg";

export default function Services() {
  return (
    <div className="Services my-5">
      <div
        className="text-group mx-auto"
        style={{ width: "321px", height: "122px" }}
      >
        <div className="lines d-flex justify-content-between ">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <p className="services-text">Services</p>
        <div className="bottom-lines d-flex justify-content-between ">
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
      </div>
      <div
        className="images-group my-4 mx-auto d-flex justify-content-between"
        style={{ width: "1199px", height: "504px" }}
      >
        <div
          className="image-1 bg-white"
          style={{ width: "385px", height: "504px" }}
        >
          <div style={{ width: "385px", height: "290px" }}>
            <img src={img1} className="ser-image w-100" alt="" />
          </div>
          <div
            className="mx-auto my-1"
            style={{ width: "325px", height: "24px" }}
          >
            <p className="ser-sm-lo">Lorem Ipsum</p>
          </div>
          <div className="mx-auto" style={{ width: "325px", height: "120px" }}>
            <p className="ser-lg-lo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
        <div
          className="image-2 bg-white"
          style={{ width: "385px", height: "504px" }}
        >
          <div style={{ width: "385px", height: "290px" }}>
            <img src={img2} className="w-100 ser-image" alt="" />
          </div>
          <div
            className="mx-auto my-1"
            style={{ width: "325px", height: "24px" }}
          >
            <p className="ser-sm-lo">Lorem Ipsum</p>
          </div>
          <div className="mx-auto" style={{ width: "325px", height: "120px" }}>
            <p className="ser-lg-lo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
        <div
          className="image-3 bg-white"
          style={{ width: "385px", height: "504px" }}
        >
          <div style={{ width: "385px", height: "290px" }}>
            <img src={img1} className=" w-100 ser-image" alt="" />
          </div>
          <div
            className="mx-auto my-1"
            style={{ width: "325px", height: "24px" }}
          >
            <p className="ser-sm-lo">Lorem Ipsum</p>
          </div>
          <div className="mx-auto" style={{ width: "325px", height: "120px" }}>
            <p className="ser-lg-lo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
      </div>
      <div
        className="ser-help my-4 bg-color text-white mx-auto  d-flex justify-content-center align-items-center"
        style={{ width: "280px", height: "86px" }}
      >
        <p className="m-0">Help Me</p>
      </div>
    </div>
  );
}
