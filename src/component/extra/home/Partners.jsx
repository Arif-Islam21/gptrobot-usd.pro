import coti from "../../../../src/assets/images/partners/coti.jpg";
import binance from "../../../../src/assets/images/partners/binance.jpg";
import bitsafe from "../../../../src/assets/images/partners/bitsafe.png";
import criptware from "../../../../src/assets/images/partners/criptware.png";

const Partners = () => {
  const partners = [
    {
      name: "Coti",
      image: coti,
      link: "https://coti.io/",
    },
    {
      name: "Binance",
      image: binance,
      link: "https://www.binance.com/en",
    },
    {
      name: "Bitsafe",
      image: bitsafe,
      link: "https://bitsafe.com/",
    },
    {
      name: "Criptware",
      image: criptware,
      link: "https://criptware.com/",
    },
  ];
  return (
    <div className="p-4 rounded-2 bg-white shadow-sm">
      <h2 className="fs-3 fw-bold text-center my-2 text-black">Partners</h2>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-auto rounded"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
