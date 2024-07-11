import DarkNavBar from "./DarkNavBar";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SecondPage() {
  const [activeOption, setActiveOption] = useState("6M");
  const [activePage, setActivePage] = useState("The Index");

  const handleIndexClick = (page) => {
    setActivePage(page);
  };

  const handleDateClick = (option) => {
    setActiveOption(option);
  };
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "WIPPOOL",
        data: [0, 63, 40, 43, 47, 72, 80],
        borderColor: "rgba(252, 113, 77, 1)",
        backgroundColor: "rgba(252, 113, 77, 1)",

        fill: true,
      },
      {
        label: "Google",
        data: [0, 27, 38, 43, 47, 75, 52],
        borderColor: "rgba(97, 93, 227, 1)",
        backgroundColor: "rgba(97, 93, 227, 1)",
      },
      {
        label: "Microsoft",
        data: [-10, 35, 42, 50, 12, 60, 65],
        borderColor: "rgba(175, 205, 128, 1)",
        backgroundColor: "rgba(175, 205, 128, 1)",
      },
      {
        label: "Twitter",
        data: [0, 20, 10, 18, 18, 29, 38],
        borderColor: "rgba(111, 52, 161, 1)",
        backgroundColor: "rgba(111, 52, 161, 1)",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Performance Trends" },
    },
  };
  return (
    <>
      <div className="container" id="wppool-index">
        <DarkNavBar />
        <div className="secondContent">
          <div>
            <ul
              className="sideNav"
              style={{
                padding: "10px",
                backgroundColor: "rgba(239, 243, 246, 1)",
                listStyleType: "none", // Remove the default list markers
              }}>
              {[
                "The Index",
                "The Index Tab Two",
                "The Index Tab Three",
                "The Index Tab Four",
                "The Index Tab Five",
              ].map((page) => (
                <li
                  key={page}
                  className={`indexPage ${activePage === page ? "active" : ""}`}
                  onClick={() => handleIndexClick(page)}
                  style={{
                    cursor: "pointer",
                    margin: "5px 0",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <div>{page}</div>
                  <div>{activePage === page ? "-" : "+"}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="secondPageMain">
            <div>
              <div>
                <h1
                  className="fs-1"
                  style={{ fontFamily: "Times New Roman", textAlign: "left" }}>
                  {" "}
                  <svg
                    width="46"
                    height="41"
                    viewBox="0 0 46 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.914491 40.5L26.5591 0.5H45.0855L19.4409 40.5H0.914491Z"
                      stroke="#191618"
                    />
                  </svg>
                  The WPPOOL Index{" "}
                </h1>{" "}
                <div className="companyIndexes">
                  <div className="companyIndex">
                    <h1
                      className="indexPercentage"
                      style={{ color: "rgba(252, 113, 77, 1)" }}>
                      66.2%
                    </h1>
                    <p className=" text"> WPPOL Index</p>
                    <div
                      style={{
                        border: "3px solid rgba(252, 113, 77, 1)",
                        height: "45px",
                        width: "0px",
                      }}
                    />
                  </div>
                  <div className="companyIndex ">
                    <h1
                      className="indexPercentage"
                      style={{ color: "rgba(97, 93, 227, 1)" }}>
                      +26.6%
                    </h1>
                    <p className="google text"> Google Index</p>
                    <div
                      style={{
                        border: "3px solid rgba(97, 93, 227, 1)",
                        height: "45px",
                        width: "0px",
                      }}
                    />
                  </div>
                  <div className="companyIndex">
                    <h1
                      className="indexPercentage"
                      style={{ color: "rgba(175, 205, 128, 1)" }}>
                      34.1%
                    </h1>
                    <p className="microsoft text"> Microsoft</p>
                    <div
                      style={{
                        border: "3px solid rgba(175, 205, 128, 1)",
                        height: "45px",
                        width: "0px",
                      }}
                    />
                  </div>
                  <div className="companyIndex">
                    <h1
                      className="indexPercentage"
                      style={{ color: "rgba(111, 52, 161, 1)" }}>
                      17%
                    </h1>
                    <p className="twitter text"> Twitter Index</p>
                    <div
                      style={{
                        border: "3px solid rgba(111, 52, 161, 1)",
                        height: "45px",
                        width: "0px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="page2Mid">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  className="page3Button"
                  style={{
                    width: "150px",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <p>Selectors</p>
                  <svg
                    width="6"
                    height="5"
                    viewBox="0 0 6 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.4177 3.91732L0.251037 1.75065C-0.0128516 1.48676 -0.0718794 1.18468 0.0739539 0.844401C0.219787 0.504123 0.480204 0.333984 0.855204 0.333984H5.14687C5.52187 0.333984 5.78229 0.504123 5.92812 0.844401C6.07395 1.18468 6.01493 1.48676 5.75104 1.75065L3.58437 3.91732C3.50104 4.00065 3.41076 4.06315 3.31354 4.10482C3.21632 4.14648 3.11215 4.16732 3.00104 4.16732C2.88993 4.16732 2.78576 4.14648 2.68854 4.10482C2.59132 4.06315 2.50104 4.00065 2.4177 3.91732Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="page3Button"
                  style={{
                    width: "150px",
                    height: "26px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <p>Types of IPO</p>
                  <svg
                    width="6"
                    height="5"
                    viewBox="0 0 6 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.4177 3.91732L0.251037 1.75065C-0.0128516 1.48676 -0.0718794 1.18468 0.0739539 0.844401C0.219787 0.504123 0.480204 0.333984 0.855204 0.333984H5.14687C5.52187 0.333984 5.78229 0.504123 5.92812 0.844401C6.07395 1.18468 6.01493 1.48676 5.75104 1.75065L3.58437 3.91732C3.50104 4.00065 3.41076 4.06315 3.31354 4.10482C3.21632 4.14648 3.11215 4.16732 3.00104 4.16732C2.88993 4.16732 2.78576 4.14648 2.68854 4.10482C2.59132 4.06315 2.50104 4.00065 2.4177 3.91732Z"
                      fill="white"
                    />
                  </svg>
                </div>{" "}
              </div>
              <div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "5px 5px 5px 45px",
                    backgroundColor: "rgba(239, 243, 246, 1)",
                    listStyleType: "none",
                    borderRadius: "20px ",
                    alignItems: "center",
                    maxWidth: "350px",
                  }}>
                  {["1Y", "YTD", "6M", "1M", "1W"].map((option) => (
                    <li
                      key={option}
                      className={`dateOption ${
                        activeOption === option ? "active" : ""
                      }`}
                      onClick={() => handleDateClick(option)}
                      style={{ cursor: "pointer", margin: "0 10px" }}>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="decoratedScrollBarX chart">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
