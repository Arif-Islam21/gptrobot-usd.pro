import { Table } from "react-bootstrap";
import Binance from "../../../assets/images/coins/Binance.jpg";
import Bitcoin from "../../../assets/images/coins/Bitcoin.png";
import Cardano from "../../../assets/images/coins/Cardano.png";
import Dogecoin from "../../../assets/images/coins/Dogecoin.jpg";
import Ethereum from "../../../assets/images/coins/Ethereum.jpg";
import Litecoin from "../../../assets/images/coins/Litecoin.jpg";
import Polkadot from "../../../assets/images/coins/Polkadot.png";
import Ripple from "../../../assets/images/coins/Ripple.jpg";
import Shiba from "../../../assets/images/coins/Shiba.png";
import Solana from "../../../assets/images/coins/Solana.jpg";
import TRON from "../../../assets/images/coins/TRON.png";

const PriceList = () => {
  const prices = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      logo: Bitcoin,
      price: "$91,510",
    },
    {
      name: "TRON",
      symbol: "TRX",
      logo: TRON,
      price: "$0.247",
    },
    {
      name: "Solana",
      symbol: "SOL",
      logo: Solana,
      price: "$145.02",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      logo: Cardano,
      price: "$0.658",
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      logo: Litecoin,
      price: "$83.32",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      logo: Ethereum,
      price: "$1,702.96",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      logo: Ripple,
      price: "$2.16",
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      logo: Polkadot,
      price: "$3.91",
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      logo: Dogecoin,
      price: "$0.172",
    },
    {
      name: "Binance Coin",
      symbol: "BNB",
      logo: Binance,
      price: "$608.91",
    },
    {
      name: "Shiba",
      symbol: "SHIB",
      logo: Shiba,
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
              <td className="text-center">
                <img
                  className=""
                  style={{ height: "5vh", width: "5vh" }}
                  src={price.logo}
                  alt={price.logo}
                />
              </td>
              <td className="text-center">{price.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PriceList;
