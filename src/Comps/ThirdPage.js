function ThirdPage() {
  const details = [
    {
      company: "Adyen",
      ticker: "AFRM",
      vertical: "Payments",
      price: "$17.15",
      marketCap: "$50.5",
      revenueGrowth: "49.0%",
      grossMargin: "15.8%",
      evRevenue: "6.3",
      ytdPerformance: "24.3%",
    },
    {
      company: "Affirm",
      ticker: "AFRM",
      vertical: "Lending",
      price: "$16.12",
      marketCap: "$4.7",
      revenueGrowth: "32.0%",
      grossMargin: "48.7%",
      evRevenue: "4.9",
      ytdPerformance: "77.1%",
    },
    {
      company: "Alkami Technology",
      ticker: "ALKT",
      vertical: "B2B SaaS",
      price: "$16.27",
      marketCap: "$1.5",
      revenueGrowth: "34.0%",
      grossMargin: "53.0%",
      evRevenue: "7.0",
      ytdPerformance: "10.0%",
    },
    {
      company: "AvidXchange",
      ticker: "AVDX",
      vertical: "Payments",
      price: "$10.21",
      marketCap: "$2.0",
      revenueGrowth: "27.0%",
      grossMargin: "61.5%",
      evRevenue: "6.0",
      ytdPerformance: "10.5%",
    },
    {
      company: "Bakkt Holdings",
      ticker: "BKKT",
      vertical: "Wealth",
      price: "$1.32",
      marketCap: "$0.1",
      revenueGrowth: "38.0%",
      grossMargin: "--",
      evRevenue: "0.4",
      ytdPerformance: "13.8%",
    },
    {
      company: "Virtu Financial Inc",
      ticker: "VIRT",
      vertical: "Wealth",
      price: "$17.0",
      marketCap: "$3.1",
      revenueGrowth: "-22.0%",
      grossMargin: "38.2%",
      evRevenue: "2.6",
      ytdPerformance: "-17.8%",
    },
    {
      company: "Adyen",
      ticker: "AFRM",
      vertical: "Payments",
      price: "$17.15",
      marketCap: "$50.5",
      revenueGrowth: "49.0%",
      grossMargin: "15.8%",
      evRevenue: "6.3",
      ytdPerformance: "24.3%",
    },
    {
      company: "Affirm",
      ticker: "AFRM",
      vertical: "Lending",
      price: "$16.12",
      marketCap: "$4.7",
      revenueGrowth: "32.0%",
      grossMargin: "48.7%",
      evRevenue: "4.9",
      ytdPerformance: "77.1%",
    },
    {
      company: "Alkami Technology",
      ticker: "ALKT",
      vertical: "B2B SaaS",
      price: "$16.27",
      marketCap: "$1.5",
      revenueGrowth: "34.0%",
      grossMargin: "53.0%",
      evRevenue: "7.0",
      ytdPerformance: "10.0%",
    },
    {
      company: "AvidXchange",
      ticker: "AVDX",
      vertical: "Payments",
      price: "$10.21",
      marketCap: "$2.0",
      revenueGrowth: "27.0%",
      grossMargin: "61.5%",
      evRevenue: "6.0",
      ytdPerformance: "10.5%",
    },
  ];

  return (
    <>
      <div
        className="thirdPage container"
        style={{ borderRadius: "25px" }}
        id="all-companies">
        <div className="thirdHeading">
          <div>
            <h1>All Companies</h1>
          </div>
          <div class="search-container">
            <input type="text" placeholder="Search Companies" />
          </div>
        </div>
        <div className="decoratedScrollBarX">
          <table>
            <tr>
              <th>Company</th>
              <th>Ticker</th>
              <th>Vertical</th>
              <th>Price</th>
              <th>MarketCap</th>
              <th>Revnue Growth</th>
              <th>Gross Margin</th>
              <th>EV Revenue</th>
              <th>YTD Performance</th>
            </tr>
            {details.map((detail, index) => (
              <tr key={index}>
                <td>{detail.company}</td>
                <td>{detail.ticker}</td>
                <td>{detail.vertical}</td>
                <td>{detail.price}</td>
                <td>{detail.marketCap}</td>
                <td>{detail.revenueGrowth}</td>
                <td>{detail.grossMargin}</td>
                <td>{detail.evRevenue}</td>
                <td>{detail.ytdPerformance}</td>
              </tr>
            ))}
          </table>
        </div>

        <div>
          <button className="page3Button shadowAdd">
            Download All Companies' Data
          </button>
          <button className="page3Button shadowAdd">View Methodology</button>
        </div>
      </div>
    </>
  );
}

export default ThirdPage;
