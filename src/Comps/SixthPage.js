import { person1, person2, person3, aboutbg } from "../Assets/index";

function SixthPage() {
  const pds = [
    {
      profileImage: person1,
      profileName: "By: Shagor Sahabuddin",
      profileBio1stLine: "Lorem ipsum dolor sit amet consectetur",
      profileBio2ndLine: "adipisicing elit. Maxime mollitia.",
    },
    {
      profileImage: person2,
      profileName: "By: Nayem Khan",
      profileBio1stLine: "Lorem ipsum dolor sit amet consectetur",
      profileBio2ndLine: null,
    },
    {
      profileImage: person3,
      profileName: "By: Shagor Sahabuddin",
      profileBio1stLine: "Lorem ipsum dolor sit amet consectetur",
      profileBio2ndLine: "adipisicing elit. Maxime mollitia.",
    },
    {
      profileImage: person1,
      profileName: "By: Shagor Sahabuddin",
      profileBio1stLine: "Lorem ipsum dolor sit amet consectetur",
      profileBio2ndLine: "adipisicing elit. Maxime mollitia.",
    },
    {
      profileImage: person2,
      profileName: "By: Nayem Khan",
      profileBio1stLine: "Lorem ipsum dolor sit amet consectetur",
      profileBio2ndLine: null,
    },
    {
      profileImage: person3,
      profileName: "By: Shagor Sahabuddin",
      profileBio1stLine: "Lorem ipsum dolor sit amet consectetur",
      profileBio2ndLine: "adipisicing elit. Maxime mollitia.",
    },
  ];

  return (
    <>
      <div
        className="containerWithoutBg"
        style={{ textAlign: "left" }}
        id="stories-ideas">
        <h1 style={{ fontSize: "48px" }}>Stories and Ideas</h1>
        <p style={{ fontSize: "20px" }}>The latest news and updates</p>
        <div
          className="profilesContainer"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}>
          {pds.map((pd, index) => (
            <div key={index} className="profileData">
              <div className="profilePhoto">
                <img
                  src={pd.profileImage}
                  alt={pd.profileName}
                  width={120}
                  height={120}
                />
              </div>
              <div className="profileDetails">
                <p style={{ color: "rgba(32, 66, 182, 1)" }}>
                  {pd.profileName}
                </p>
                <p>{pd.profileBio1stLine}</p>
                {pd.profileBio2ndLine && <p>{pd.profileBio2ndLine}</p>}
                <button className="page3Button" style={{ width: "124px" }}>
                  Read More
                </button>
              </div>
              <div className="profileBackground"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="lineBreak"></div>
      <div className="about">
        <div
          style={{
            maxWidth: "400px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
          }}>
          <div className="aboutText" id="about-wppool">
            <h1>About WPPOOL</h1>
            <h3 className="fs-1">Investing in WPPOOL for over 50 years</h3>
            <p style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
            <button
              className="page5Button"
              style={{ height: "45px", color: "white" }}>
              Contact WPPOOL
            </button>
          </div>
        </div>
        <div>
          <img src={aboutbg} alt="aboutBg" className="aboutSubDiv" />
        </div>
      </div>
      <div className="lineBreak"></div>
    </>
  );
}

export default SixthPage;
