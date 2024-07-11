import LightNavBar from "./NavBar";
import React, { useEffect } from "react";

function FirstPage() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by the height of the viewport
      behavior: "smooth", // Smooth scrolling
    });
  };
  useEffect(() => {
    const textContainer = document.getElementById("animatedText");
    const text = textContainer.innerText;
    textContainer.innerHTML = ""; // Clear original text
    const letters = text.split("");
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.35}s`;
      textContainer.appendChild(span);
    });
  }, []);
  return (
    <>
      <div className="" id="visit-wppool">
        <div
          className="navBar"
          style={{ backgroundColor: "rgba(32, 66, 182, 1)" }}>
          <LightNavBar />
        </div>
        <div className=" d-flex flex-col firstPage">
          <div>
            <div class="parent">
              <div class="status">
                <p className="fs-2 title">60</p>
                <p className="fs-5 description">Companies</p>
                <br style={{ lineHeight: "0px" }} />
                <p className="fs-2 title">$100B</p>
                <p className="fs-5 description">Market cap</p>
                <br />

                <p className="fs-2 title">3.5x</p>
                <p className="fs-5 description">Revnue multiple</p>
                <br />
                <p className="fs-2 title">60%</p>
                <p className="fs-5 description">LTM avg. revnue Growth Rate</p>
              </div>
              <div class="mainPage">
                <h1 style={{ fontFamily: "Times New Roman" }} id="animatedText">
                  The WPPOOL Index
                </h1>{" "}
                <p>
                  Monitor the performance of emerging, publicly traded,
                  financial technology companies
                </p>
              </div>
              <div className="underIcon" onClick={handleScroll}>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.99881 16.0769L0.921875 8.99992L1.86548 8.05632L7.33214 13.523V0.333252H8.66548V13.523L14.1321 8.05632L15.0757 8.99992L7.99881 16.0769Z"
                    fill="#2042B6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default FirstPage;
