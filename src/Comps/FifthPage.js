import React, { useState } from "react";
import { Slide1, Slide2, Slide3 } from "../Assets/index";
export default function FifthPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Images = [{ image: Slide1 }, { image: Slide2 }, { image: Slide3 }];
  const totalImages = Images.length;
  const screenWidth = window.screen.width * 0.4;

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };
  return (
    <div className="slider" id="state-usa" style={{ margin: "15px" }}>
      <div
        className="containerWithoutBg imgCtn "
        style={{
          textAlign: "left",
        }}>
        <h1>State of USA</h1>

        <div class="dropdown">
          <div className="dropdownTitle">
            <h1 style={{ color: "white", marginRight: "45px" }}>2024</h1>
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7L0 0H14L7 7Z" fill="white" />
            </svg>
          </div>
          <div class="dropdown-content">
            <h1 className="dropdownText"> 2023 </h1>
            <h1 className="dropdownText"> 2022 </h1>
            <h1 className="dropdownText">2021</h1>
          </div>
        </div>
        <p>
          Click through the slides or download the report to view natively on
          your device.
        </p>

        <div>
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "35vw",
              justifyContent: "center",
              position: "relative",
              transform: `translateX(-${currentIndex * screenWidth + 10}px)`,
              transition: "transform 1s ease-in-out",
            }}>
            {Images.map((Image, index) => (
              <div key={index}>
                <img
                  src={Image.image}
                  alt="Slide"
                  style={{
                    margin: "15px",
                    borderRadius: "15px",
                    width: "40vw",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "1vw",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <div className="arrow shadowAdd" onClick={handleLeftArrowClick}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.92437 7.99881L8.0013 0.921875L8.9449 1.86548L3.47824 7.33214L16.668 7.33214L16.668 8.66548L3.47824 8.66547L8.9449 14.1321L8.0013 15.0757L0.92437 7.99881Z"
                  fill="#2042B6"
                />
              </svg>
            </div>
            <div className="arrow shadowAdd" onClick={handleRightArrowClick}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0756 7.99881L8.9987 0.921875L8.0551 1.86548L13.5218 7.33214L0.332032 7.33214L0.332032 8.66548L13.5218 8.66547L8.0551 14.1321L8.9987 15.0757L16.0756 7.99881Z"
                  fill="#2042B6"
                />
              </svg>
            </div>
            <div>Pages</div>
            <div>
              <div class="dropdown">
                <div className="botttomDropdownTitle shadowAdd">
                  <p style={{ marginRight: "25px" }}>1 and 2</p>
                  <svg
                    width="14"
                    height="7"
                    viewBox="0 0 14 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 7L0 0H14L7 7Z" fill="black" />
                  </svg>
                </div>
                <div class="bottomDropdown-content">
                  <p className="bottomDropdownText"> 2 and 3 </p>
                </div>
              </div>
            </div>
            <p>of 37</p>
          </div>
          <div>
            <button className="page5Button shadowAdd">
              <p> Download the 2023 Report </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
