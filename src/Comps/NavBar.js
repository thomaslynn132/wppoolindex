import { logoLight } from "../Assets/index";
import React, { useState } from "react";

function LightNavBar() {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(!openMenu);
  };
  return (
    <div
      className="navBar"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <div>
        <img src={logoLight} alt="Logo" className="logo" />
      </div>
      {openMenu ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div className="lightShare  share">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.5 11.8334C9.01389 11.8334 8.60069 11.6633 8.26042 11.323C7.92014 10.9827 7.75 10.5695 7.75 10.0834C7.75 10.0154 7.75486 9.94487 7.76458 9.87196C7.77431 9.79904 7.78889 9.73342 7.80833 9.67508L3.69583 7.28342C3.53056 7.42925 3.34583 7.54348 3.14167 7.62612C2.9375 7.70876 2.72361 7.75008 2.5 7.75008C2.01389 7.75008 1.60069 7.57994 1.26042 7.23967C0.920139 6.89939 0.75 6.48619 0.75 6.00008C0.75 5.51397 0.920139 5.10078 1.26042 4.7605C1.60069 4.42022 2.01389 4.25008 2.5 4.25008C2.72361 4.25008 2.9375 4.2914 3.14167 4.37404C3.34583 4.45668 3.53056 4.57092 3.69583 4.71675L7.80833 2.32508C7.78889 2.26675 7.77431 2.20112 7.76458 2.12821C7.75486 2.05529 7.75 1.9848 7.75 1.91675C7.75 1.43064 7.92014 1.01744 8.26042 0.677165C8.60069 0.336887 9.01389 0.166748 9.5 0.166748C9.98611 0.166748 10.3993 0.336887 10.7396 0.677165C11.0799 1.01744 11.25 1.43064 11.25 1.91675C11.25 2.40286 11.0799 2.81605 10.7396 3.15633C10.3993 3.49661 9.98611 3.66675 9.5 3.66675C9.27639 3.66675 9.0625 3.62543 8.85833 3.54279C8.65417 3.46015 8.46944 3.34592 8.30417 3.20008L4.19167 5.59175C4.21111 5.65008 4.22569 5.71571 4.23542 5.78862C4.24514 5.86154 4.25 5.93203 4.25 6.00008C4.25 6.06814 4.24514 6.13862 4.23542 6.21154C4.22569 6.28446 4.21111 6.35008 4.19167 6.40841L8.30417 8.80008C8.46944 8.65425 8.65417 8.54001 8.85833 8.45737C9.0625 8.37473 9.27639 8.33342 9.5 8.33342C9.98611 8.33342 10.3993 8.50355 10.7396 8.84383C11.0799 9.18411 11.25 9.5973 11.25 10.0834C11.25 10.5695 11.0799 10.9827 10.7396 11.323C10.3993 11.6633 9.98611 11.8334 9.5 11.8334Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="downloadReport downloadReportButton">
            <p>Download the 2024 Report</p>
          </div>
          <div
            className="navSvg"
            style={{
              marginRight: "40px",
            }}
            onClick={toggleOpenMenu}>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="1"
                fill="white"
                stroke="white"
              />
              <rect
                x="0.5"
                y="7.5"
                width="19"
                height="1"
                fill="white"
                stroke="white"
              />
              <rect
                x="0.5"
                y="14.5"
                width="19"
                height="1"
                fill="white"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div
          className="openedMenu"
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <div className="openedLightShare share">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.5 11.8334C9.01389 11.8334 8.60069 11.6633 8.26042 11.323C7.92014 10.9827 7.75 10.5695 7.75 10.0834C7.75 10.0154 7.75486 9.94487 7.76458 9.87196C7.77431 9.79904 7.78889 9.73342 7.80833 9.67508L3.69583 7.28342C3.53056 7.42925 3.34583 7.54348 3.14167 7.62612C2.9375 7.70876 2.72361 7.75008 2.5 7.75008C2.01389 7.75008 1.60069 7.57994 1.26042 7.23967C0.920139 6.89939 0.75 6.48619 0.75 6.00008C0.75 5.51397 0.920139 5.10078 1.26042 4.7605C1.60069 4.42022 2.01389 4.25008 2.5 4.25008C2.72361 4.25008 2.9375 4.2914 3.14167 4.37404C3.34583 4.45668 3.53056 4.57092 3.69583 4.71675L7.80833 2.32508C7.78889 2.26675 7.77431 2.20112 7.76458 2.12821C7.75486 2.05529 7.75 1.9848 7.75 1.91675C7.75 1.43064 7.92014 1.01744 8.26042 0.677165C8.60069 0.336887 9.01389 0.166748 9.5 0.166748C9.98611 0.166748 10.3993 0.336887 10.7396 0.677165C11.0799 1.01744 11.25 1.43064 11.25 1.91675C11.25 2.40286 11.0799 2.81605 10.7396 3.15633C10.3993 3.49661 9.98611 3.66675 9.5 3.66675C9.27639 3.66675 9.0625 3.62543 8.85833 3.54279C8.65417 3.46015 8.46944 3.34592 8.30417 3.20008L4.19167 5.59175C4.21111 5.65008 4.22569 5.71571 4.23542 5.78862C4.24514 5.86154 4.25 5.93203 4.25 6.00008C4.25 6.06814 4.24514 6.13862 4.23542 6.21154C4.22569 6.28446 4.21111 6.35008 4.19167 6.40841L8.30417 8.80008C8.46944 8.65425 8.65417 8.54001 8.85833 8.45737C9.0625 8.37473 9.27639 8.33342 9.5 8.33342C9.98611 8.33342 10.3993 8.50355 10.7396 8.84383C11.0799 9.18411 11.25 9.5973 11.25 10.0834C11.25 10.5695 11.0799 10.9827 10.7396 11.323C10.3993 11.6633 9.98611 11.8334 9.5 11.8334Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="downloadReport downloadReportButton">
              <p>Download the 2024 Report</p>
            </div>
            <div
              className="cancelButton"
              style={{
                marginRight: "40px",
              }}
              onClick={toggleOpenMenu}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="0.928909"
                  y="14.364"
                  width="19"
                  height="1"
                  transform="rotate(-45 0.928909 14.364)"
                  fill="white"
                  stroke="#191618"
                />
                <rect
                  x="1.63684"
                  y="0.928298"
                  width="19"
                  height="1"
                  transform="rotate(45 1.63684 0.928298)"
                  fill="white"
                  stroke="#191618"
                />
              </svg>
            </div>
          </div>
          <div>
            <h4
              className="menuItem"
              onClick={() => scrollToComponent("wppool-index")}>
              The WPPOOL Index
            </h4>
            <h4
              className="menuItem"
              onClick={() => scrollToComponent("all-companies")}>
              All Companies
            </h4>
            <h4
              className="menuItem"
              onClick={() => scrollToComponent("potential-future-listings")}>
              Potential Future Listings
            </h4>
            <h4
              className="menuItem"
              onClick={() => scrollToComponent("state-usa")}>
              State Of USA
            </h4>
            <h4
              className="menuItem"
              onClick={() => scrollToComponent("stories-ideas")}>
              Stories & Ideas
            </h4>
            <h4
              className="menuItem"
              onClick={() => scrollToComponent("about-wppool")}>
              About WPPOOL
            </h4>
            <h4
              className="menuItem"
              onClick={() => scrollToComponent("portfolio-companies")}>
              WPPOOL Portfolio Companies
            </h4>
            <h4
              className="menuItem"
              onClick={() => scrollToComponent("visit-wppool")}>
              Visit WPPOOL
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
export default LightNavBar;
