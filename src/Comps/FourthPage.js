import {
  Brex,
  checkout,
  chime,
  deel,
  klarna,
  N26,
  Plaid,
  Revolut,
  stripe,
  gusto,
} from "../Assets/index";
function FourthPage() {
  const Listings = [
    { title: "stripe", src: stripe },

    { title: "klarna", src: klarna },

    { title: "Plaid", src: Plaid },

    { title: "checkout.com", src: checkout },

    { title: "Revolut", src: Revolut },

    { title: "Chime", src: chime },

    { title: "N 26", src: N26 },

    { title: "Brex", src: Brex },

    { title: "Deel", src: deel },

    { title: "Gusto", src: gusto },
  ];
  return (
    <>
      <div
        className="containerWithoutBg"
        id="potential-future-listings"
        style={{ textAlign: "left", whiteSpace: "balance" }}>
        <h1>Potential Future Listings</h1>
        <p>
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. <br />{" "}
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </p>
        <div className="listingImages">
          {Listings.map((List, Index) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <div
                  className="listingImageContainer"
                  key={Index}
                  style={{
                    backgroundImage: `url(${List.src})`,
                  }}></div>{" "}
                <p className="Listing">{List.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default FourthPage;
