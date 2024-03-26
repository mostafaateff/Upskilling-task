import React from "react";
import img from "../Assets/Ellipse 1.png";
import star from "../Assets/Group 30.png";

export default function Testymonials() {
  return (
    <div className="testy my-5">
      <div
        className="testy-text mx-auto"
        style={{
          width: "496px",
          height: "122px",
        }}
      >
        <div className="testy-lines d-flex justify-content-between">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <p className="my-0">Testymonials</p>
        <div className="bottom-testy-lines d-flex justify-content-between">
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
      </div>
      <div
        className="testy-items  my-5"
        style={{ width: "1199ppx", height: "511px" }}
      >
        <div className="d-flex flex-wrap justify-content-evenly align-items-center">
          <div
            className=" mb-3 rounded-4 border border-1 d-flex flex-wrap justify-content-evenly align-items-center "
            style={{ width: "577px", height: "233px" }}
          >
            <div className="testy-image">
              <img src={img} alt="" />
            </div>
            <div className="d-flex flex-column">
              <div
                className="item-text  "
                style={{ width: "423px", height: "145px" }}
              >
                <p className="item-head">Courtney Henry</p>
                <p className="item-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="my-2" style={{ width: "114px", height: "18px" }}>
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div
            className=" mb-3 rounded-4 border border-1 d-flex flex-wrap justify-content-evenly align-items-center "
            style={{ width: "577px", height: "233px" }}
          >
            <div className="testy-image">
              <img src={img} alt="" />
            </div>
            <div className="d-flex flex-column">
              <div
                className="item-text  "
                style={{ width: "423px", height: "145px" }}
              >
                <p className="item-head">Courtney Henry</p>
                <p className="item-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="my-2" style={{ width: "114px", height: "18px" }}>
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div
            className=" mt-4 rounded-4 border border-1 d-flex flex-wrap justify-content-evenly align-items-center "
            style={{ width: "577px", height: "233px" }}
          >
            <div className="testy-image">
              <img src={img} alt="" />
            </div>
            <div className="d-flex flex-column">
              <div
                className="item-text  "
                style={{ width: "423px", height: "145px" }}
              >
                <p className="item-head">Courtney Henry</p>
                <p className="item-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="my-2" style={{ width: "114px", height: "18px" }}>
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div
            className=" mt-4 rounded-4 border border-1 d-flex flex-wrap justify-content-evenly align-items-center "
            style={{ width: "577px", height: "233px" }}
          >
            <div className="testy-image">
              <img src={img} alt="" />
            </div>
            <div className="d-flex flex-column">
              <div
                className="item-text  "
                style={{ width: "423px", height: "145px" }}
              >
                <p className="item-head">Courtney Henry</p>
                <p className="item-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="my-2" style={{ width: "114px", height: "18px" }}>
                <img src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
