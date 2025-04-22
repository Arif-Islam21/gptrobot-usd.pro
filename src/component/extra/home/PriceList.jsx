import { Table } from "react-bootstrap";

const PriceList = () => {
  const prices = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      logo: "Bitcoin Logo",
      price: "$91,510",
    },
    {
      name: "TRON",
      symbol: "TRX",
      logo: "TRON Logo",
      price: "$0.247",
    },
    {
      name: "Solana",
      symbol: "SOL",
      logo: "Solana Logo",
      price: "$145.02",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      logo: "Cardano Logo",
      price: "$0.658",
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      logo: "Litecoin Logo",
      price: "$83.32",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      logo: "Ethereum Logo",
      price: "$1,702.96",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      logo: "Ripple Logo",
      price: "$2.16",
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      logo: "Polkadot Logo",
      price: "$3.91",
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      logo: "Dogecoin Logo",
      price: "$0.172",
    },
    {
      name: "Binance Coin",
      symbol: "BNB",
      logo: "Binance Coin Logo",
      price: "$608.91",
    },
    {
      name: "Shiba",
      symbol: "SHIB",
      logo: "Shiba Inu Logo",
      price: "$0",
    },
  ];

  return (
    <div className="my-4">
      <h2 className="fs-3 fw-semibold">Cryptocurrency Prices</h2>
      <Table striped className="rounded-1 mt-2">
        <thead>
          <tr>
            <th className="text-center">Cryptocurrency</th>
            <th className="text-center">Icon</th>
            <th className="text-center">Current Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td className="text-center">{price.name}</td>
              <td className="text-center">{price.logo}</td>
              <td className="text-center">{price.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PriceList;
