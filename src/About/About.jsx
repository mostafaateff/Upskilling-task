import React from "react";
import bgImg from "../Assets/about-bg.jpg";
import img1 from "../Assets/about.png";
import img2 from "../Assets/Vector 8.png";

export default function About() {
  return (
    <div className="about my-5">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "840px",
        }}
      >
        <div
          className="about-layer d-flex justify-content-evenly align-items-center"
          style={{
            backgroundColor: "rgba(109, 145, 238, 0.7)",
            height: "840px",
          }}
        >
          <div className="ab-le text-white">
            <h1>About Us</h1>
            <div style={{ width: "538px", height: "72px" }}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an{" "}
              </p>
            </div>
            <div style={{ width: "420px", height: "282px" }} className=" ab-image mt-4">
              <img src={img1} className="w-100 rounded-4" alt="" />
            </div>
          </div>
          <div className="about-dark text-white text-end position-relative">
            <img
              src={img2}
              className="w-100"
              style={{ height: "840px" }}
              alt=""
            />
            <h1>Where</h1>
            <p className="about-lorem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
