import {
  aibaba,
  vendr,
  vestwell,
  snapdocs,
  toast,
  connexpay,
  mineralTree,
  flywire,
  quovo,
  spendesk,
  notabene,
  recurly,
  fireblocks,
  kensho,
  futureadvisor,
  argyle,
  snapsheet,
} from "../Assets/index";
function SeventhPage() {
  const Listings = [
    { source: aibaba, title: "aibaba" },
    { source: vendr, title: "vendr" },
    { source: vestwell, title: "vestwell" },
    { source: snapdocs, title: "snapdocs" },
    { source: vendr, title: "vendr" },
    { source: snapdocs, title: "snapdocs" },
    { source: toast, title: "toast" },
    { source: connexpay, title: "connexpay" },
    { source: connexpay, title: "connexpay" },
    { source: mineralTree, title: "mineralTree" },
    { source: flywire, title: "flywire" },
    { source: quovo, title: "quovo" },
    { source: spendesk, title: "spendesk" },
    { source: notabene, title: "notabene" },
    { source: recurly, title: "recurly" },
    { source: fireblocks, title: "fireblocks" },
    { source: kensho, title: "kensho" },
    { source: futureadvisor, title: "futureadvisor" },
    { source: argyle, title: "argyle" },
    { source: snapsheet, title: "snapsheet" },
  ];

  return (
    <>
      <div
        className="containerWithoutBg"
        id="portfolio-companies"
        style={{ textAlign: "left", whiteSpace: "balance" }}>
        <h1>Potential Future Listings</h1>
        <p>
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div className="listingImages">
          {Listings.map((List, Index) => (
            <>
              <div
                key={Index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <div
                  className="listingImageContainer"
                  style={{
                    backgroundImage: `url(${List.source})`,
                  }}></div>
                <p className="Listing">{List.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeventhPage;
