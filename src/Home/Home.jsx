import React from "react";
import img from "../Assets/Vector 7.png";
import trash from "../Assets/Trash Hauling.png";

export default function Home() {
  return (
    <div className="home py-4">
      <div className="position-relative">
        <div className="home-img">
          <img src={img} className="w-100" alt="" />
        </div>
        <div className="home-text">
          <div className="main-text d-flex justify-content-between align-items-center ">
            <div
              className="trash-icon"
              style={{ width: "83px", height: "59px" }}
            >
              <img src={trash} className="w-100" alt="" />
            </div>
            <div className="trash-text">
              <p className="main-round my-0">Round Rock</p>
              <p className="main-trush my-0 ms-1">Trush Hauling</p>
            </div>
          </div>
          <div
            className=" mx-auto mt-5 mb-4 d-flex justify-content-center align-items-center bg-color "
            style={{ width: "167px", height: "50px" }}
          >
            <p className="my-0 text-white ex-text">Experts</p>
          </div>
          <div className="lorem mx-auto text-center   ">
            <span>Lorem</span>
            <p>Lorem lorem</p>
          </div>
          <div
            className="big-lorem text-center mx-auto "
            style={{ width: "400px", height: "70px" }}
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div
            className="d-flex mx-auto justify-content-center align-items-center bg-color "
            style={{ width: "200px", height: "50px" }}
          >
            <p className="my-0 text-white ex-text">Help Me</p>
          </div>
        </div>
      </div>
    </div>
  );
}
